const Task = require('../models').Task;
const Goal = require('../models').Goal;
const Timestamp = require('../models').Timestamp;
var _ = require('lodash');
const dh = require('../date_helpers');
var moment = require('moment');


const firstDayOfWeek = () => {
  let result = moment().day(1).startOf('day');
  if (moment().day() === 0) result.subtract('days', 7);
  return result;
};

const hoursPassedSince = date => {
  return Math.floor(moment.duration(moment().unix() - date.unix(), 'seconds').asHours());
};

const lastDayOfMonth = () => {
  return moment().endOf('month').date();
};

const calculateMultipliers = goals => {
  goals.forEach(goal => {
    let fDoW = firstDayOfWeek();
    let fDoM = moment().date(1).startOf('day');
    // return Math.floor(moment.duration(moment().unix() - timestamp, 'seconds').asHours());
    if (goal.interval === 'weekly') {
      let hoursPassedInWeek = hoursPassedSince(fDoW);
      goal.multiplier = hoursPassedInWeek / 168;
    } else if (goal.interval === 'monthly') {
      let hoursPassedInMonth = hoursPassedSince(fDoM);
      goal.multiplier = hoursPassedInMonth / (lastDayOfMonth() * 24);
    }

  });
  return goals;
};

exports.create = function(req, res, next) {
  let {task, goals} = req.body;
  task.goals = goals;
  task.timestamps = [];

  Task.create(task, {include: [ {model: Goal, as: 'goals'}, {model: Timestamp, as: 'timestamps'} ]})
  .then(task => {
    // task.timestamps = [];
    // task.setTimestamps([]).then(task => {
      res.status(201).json(task);
    // });
  }).catch((e) => {
    res.status(401).send(e);
  });


  // var token = req.header('x-auth');
  // User.findByToken(token).then((user) => {
  //   if (!user) {
  //     return Promise.reject();
  //   }
    
  //   fillAssessments(req.body.goals);
  //   calculateMultipliers(req.body.goals);

  //   let task = {
  //     name: req.body.name,
  //     color: req.body.color,
  //     type: req.body.type,
  //     goals: req.body.goals
  //   };
  //   let date = new Date();

  //   if (!user.histories[0]) user.histories[0] = { date: date, tasks: [] };
  //   user.histories[0].tasks.push(task);

  //   user.save(function(err) {
  //     if (err) { return next(err); }
  //     // let history = user.histories[0].toObject();
  //     // history.date = dh.formattedDate(date);
  //     let tasks = user.histories[0].tasks;
  //     res.json(tasks[tasks.length-1]);
  //   }).catch((e) => {
  //     res.status(401).send();
  //   });

  // }).catch((e) => {
  //   res.status(401).send();
  // });
};

exports.getTasks = function(req, res, next) {
  var token = req.header('x-auth');
  User.findByToken(token).then((user) => {
    if (user.buddy) {
      User.findOne({_id: user.buddy}).then(buddy => {
        res.json({user: user.tasks, buddy: buddy.tasks});
      });
    } else {
      res.json({user: user.tasks });      
    }
  }).catch((e) => {
    res.status(401).send();
  });
};

exports.updateTask = function(req, res, next) {

};