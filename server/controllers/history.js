const History = require('../models').History;
const dh = require('../date_helpers');
var _ = require('lodash');
var moment = require('moment');

exports.get = function(req, res, next) {
  var token = req.header('x-auth');
  User.findByToken(token).then((user) => {
    if (!user) {
      return Promise.reject();
    }
    User.findById(user.buddy).then(buddy => {
      let histories = user.histories.slice(req.params.index, parseInt(req.params.index) + 7);
      let userHistories = [];
      histories.forEach(history => {
          history = history.toObject();
          history.date = dh.formattedDate(history.date);
          userHistories.push(history);
      });

      if (buddy) {    
        histories = buddy.histories.slice(req.params.index, parseInt(req.params.index) + 7);
        let buddyHistories = [];
        histories.forEach(history => {
            history = history.toObject();
            history.date = dh.formattedDate(history.date);
            buddyHistories.push(history);
        });
        user.histories = userHistories;
        buddy.histories = buddyHistories;

        res.json({ users: [user, buddy] });        
      } else {
        res.json({ user: [user] });
      }

    }).catch((e) => {
      res.status(401).send();
    });
  }).catch((e) => {
    res.status(401).send();
  });    
};



exports.create = function(req, res, next) {
  let userId = req.body.id;
  let date = moment().startOf('day');
  let day = dh.adjustedDay(date.get('day'));
  let week = date.get('week');
  let year = date.get('year');

  History.create({userId, date, day, week, year}).then(history => {
    res.status(201).json(history);
  }).catch((e) => {
    res.status(401).send(e);
  });   
};


