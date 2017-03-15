const Timestamp = require('../models').Timestamp;

exports.create = function(req, res, next) {
  let timestamp = req.body;
  let start = timestamp.start || new Date();
  let end = timestamp.end || null;

  Timestamp.create({taskId: timestamp.taskId, start, end}).then(task => {
    res.status(201).json(task);
  }).catch((e) => {
    res.status(401).send(e);
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
  });
};