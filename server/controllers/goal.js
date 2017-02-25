const Goal = require('../models').Goal;
const dh = require('../date_helpers');
var _ = require('lodash');
var moment = require('moment');

const increment = (goals, incrementObj) => {
  let num = parseInt(incrementObj.increment);
  goals = goals.toObject();
  goals.forEach(goal => {
    goal.count = num;
  });
  return goals;
};

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
  let goals = calculateMultipliers(req.body);

  Goal.bulkCreate(goals).then(() => {
    Goal.findAll().then(goals => {
      res.status(201).json(goals);
    });
  }).catch((e) => {
    res.status(401).send(e);
  });
};


exports.update = function(req, res, next) {
  var token = req.header('x-auth');
  User.findByToken(token).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    let task = user.histories[0].tasks.find(task2 => {
      return task2._id == req.params.id;
    });

    let goals = task.goals;
    let newGoals = (req.body.increment) ? increment(task.goals, req.body) : req.body;
    task.goals = newGoals;

    user.save(function(err) {
      if (err) { return next(err); }
      let history = user.histories[0].toObject();
      history.date = dh.formattedDate(user.histories[0].date);    
      res.json(task.goals);
    });


  }).catch((e) => {
    res.status(401).send();
  });
};