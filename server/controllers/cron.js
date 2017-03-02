const User = require('../models').User;
const History = require('../models').History;
const Task = require('../models').Task;
const Goal = require('../models').Goal;
const Timestamp = require('../models').Timestamp;
const ch = require('../cron_helpers');



module.exports = {
    create(req, res) {
        var token = req.header('x-auth');
        User.findByToken(token)
        .then(user => {
            User.find({
                where: {id: user.id},
                include: [
                    {model: History, as: 'historys', include: [
                        {model: Task, as: 'tasks', include: [
                            {model: Goal, as: 'goals'},
                            {model: Timestamp, as: 'timestamps'},
                        ]}
                    ]}
                ],
                order: [ [ { model: History, as: 'historys' }, 'createdAt', 'ASC' ] ]
            }).then(user => {
                ch.cronTask(user);
            }).catch(error => res.status(400).send(error));
        }).catch(error => res.status(400).send(error));
    }
};