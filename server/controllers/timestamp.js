const Timestamp = require('../models').Timestamp;

exports.create = function(req, res, next) {
  let timestamp = req.body;
  Timestamp.create({taskId: timestamp.taskId, start: new Date()}).then(task => {
    res.status(201).json(task);
  }).catch((e) => {
    res.status(401).send(e);
  });
};

exports.update = function(req, res, next) {
  let taskId = parseInt(req.params.taskId);
  let { start, end } = req.body;


  Timestamp.update({start: new Date(start), end: new Date(end), taskId}, {where: {taskId}, plain: true, returning: true }).then(timestamp => {
    res.status(201).json(timestamp[1]);
  }).catch((e) => {
    res.status(401).send(e);
  });
};

exports.finish = function(req, res, next) {
  let timestamp = req.body;
  let key = Object.keys(req.body)[0];
  let value = req.body[key];

  if (Object.keys(req.body).length === 0) {
    key = 'end';
    value = new Date();
  }

  Timestamp.update({[key]: value}, {where: {id: req.params.id}, plain: true, returning: true }).then(timestamp => {
    res.status(201).json(timestamp[1]);
  }).catch((e) => {
    res.status(401).send(e);
  });
};


exports.delete = function(req, res, next) {
  var token = req.header('x-auth');
  User.findByToken(token).then((user) => {
    // let { taskId } = req.body;
    let task = user.histories[0].tasks.find(taskk => {
        return taskk._id == req.params.taskId;
    });

    let timestamp = task.timestamps.find(timestamp => timestamp._id == req.params.id);

    // timestamp = timestamp.toObject();
    timestamp.remove();

    user.save(function(err) {
      if (err) { return next(err); }
    }).catch((e) => {
      res.status(401).send();
    });

  }).catch((e) => {
    res.status(401).send();
  });
};