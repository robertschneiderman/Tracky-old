const Sequelize = require('sequelize');
const db = require('../models');
// const config = require('../config/config.json');
// var sequelize = new Sequelize(config.database, config.username, config.password, config);
const Task = require('../models').Task;
const Goal = require('../models').Goal;
const Timestamp = require('../models').Timestamp;
const dh = require('../date_helpers');
var moment = require('moment');


exports.get = function(req, res, next) {
  let timestamp = req.body;
  let start = timestamp.start || new Date();
  let end = timestamp.end || null;

  let week = req.params.week;

  Timestamp.findAll({taskId: timestamp.taskId, start, end}).then(task => {
    res.status(201).json(task);
  }).catch((e) => {
    res.status(401).send(e);
  });
};

const selectGoalsToIncrement = (goals, timestamp) => {
  let now = moment();
  // return goals
  if (!dh.isSameWeek(timestamp.start, now)) goals = goals.filter(goal => goal.interval === 'montly');
  if (!dh.isSameDay(timestamp.start, now)) goals = goals.filter(goal => goal.interval !== 'daily');

  return goals;
};

const getAmount = timestamp => {
  let timeElapsed = moment(timestamp.end).unix() - moment(timestamp.start).unix();
  return timestamp.end ? timeElapsed : 1;
};

exports.create = function(req, res, next) {
  return db.sequelize.transaction((t) => {
    let timestamp = req.body;
    let start = timestamp.start || new Date();
    let end = timestamp.end || null;

    return Timestamp.create({taskId: timestamp.taskId, start, end}, {transaction: t})
      .then(timestamp => {
        let amount = getAmount(timestamp);
        return Goal.update({ count: db.sequelize.literal(`count + ${amount}`)}, { where: { taskId: timestamp.taskId }, transaction: t, returning: true })
        .then((goals) => {
          let taskId = goals[1][0].taskId;
          return Task.findById(taskId, {include: [
            {model: Goal, as: 'goals', where: {taskId}, required: false},
            {model: Timestamp, as: 'timestamps', limit: 1, where: {taskId}, order: [ [ 'updatedAt', 'DESC' ]]}
          ]});
        });
      }).catch((e) => {
        res.status(401).send(e);
      });
  }).then(function (result) {
    // let taskId = goals[0].taskId;
    // result;
    res.status(201).json(result);    
    // Transaction has been committed
    // result is whatever the result of the promise chain returned to the transaction callback
  }).catch(function (e) {
    res.status(401).send(e);
    // Transaction has been rolled back
    // err is whatever rejected the promise chain returned to the transaction callback
  });
};

exports.update = function(req, res, next) {
  let taskId = req.params.taskId;
  let { start, end, id } = req.body;


  Timestamp.update({start: new Date(start), end: new Date(end), taskId}, {where: {id}, plain: true, returning: true }).then(timestamp => {
    res.status(201).json(timestamp[1]);
  }).catch((e) => {
    res.status(401).send(e);
  });
};

exports.finish = function(req, res, next) {
  let timestamp = req.body;
  let end = timestamp.end || null;  
  // let key = Object.keys(req.body)[0];
  // let value = req.body[key];

  // if (Object.keys(req.body).length === 0) {
  //   key = 'end';
  //   value = new Date();
  // }

  Timestamp.update({end}, {where: {id: req.params.id}, plain: true, returning: true }).then(timestamp => {
    res.status(201).json(timestamp[1]);
  }).catch((e) => {
    res.status(401).send(e);
  });
};


exports.delete = function(req, res, next) {
  Timestamp.findById(req.params.id).then(timestamp => {
    timestamp.destroy();
    res.status(201).json(req.params.id);    
  }).catch((e) => {
    res.status(401).send(e);
  });
};