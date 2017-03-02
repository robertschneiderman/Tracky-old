var CronJob = require('cron').CronJob;

const User = require('./models').User;
const History = require('./models').History;
const Task = require('./models').Task;
const Goal = require('./models').Goal;
const Timestamp = require('./models').Timestamp;

const ch = require('./cron_helpers');

var job = new CronJob('27 * * * * *', function() {

    User.findAll({
        include: [
            {model: History, as: 'historys', include: [
                {model: Task, as: 'tasks', include: [
                    {model: Goal, as: 'goals'},
                    {model: Timestamp, as: 'timestamps'},
                ]}
            ]}
        ],
        order: [ [ { model: History, as: 'historys' }, 'createdAt', 'ASC' ] ]
    }).then(users => {

        users.forEach(user => {
            ch.cronTask(user);
        });

    });
}, null, true, 'America/Los_Angeles');

//   Task.create(task, {include: [ {model: Goal, as: 'goals'}, {model: Timestamp, as: 'timestamps'} ]})
//   .then(task => {
//       res.status(201).json(task);
//   }).catch((e) => {
//     res.status(401).send(e);
//   });
