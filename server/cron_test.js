var CronJob = require('cron').CronJob;
var CronHelpers = require('./cron_helpers');
var lodash = require('lodash');
var moment = require('moment');
var merge = lodash.merge;
const dh = require('./date_helpers');

// var MailGun = require('./mailgun_helpers');

const User = require('./models').User;
const History = require('./models').History;
const Task = require('./models').Task;
const Goal = require('./models').Goal;
const Timestamp = require('./models').Timestamp;

const config = require('./environment');

let todayInteger = new Date().getMinutes();

// email
// one history, goals that apply to history by interval

const stripId = obj => {
    delete obj.id;
};

const assess = (tasks, emailText, goal) => {
    let task = tasks.find(task => task.id === goal.taskId);
    if (goal.count >= goal.target) {
        emailText.content += `${task.name} complete! (${goal.count} / ${goal.target})`;
    } else {
        emailText.content += `${task.name} failed! (${goal.count} / ${goal.target})`;
    }
    goal.count = 0;
    return emailText;
};

const sendEmail = (user, emailText) => {
    var helper = require('sendgrid').mail;
    
    let fromEmail = new helper.Email("robert.a.schneiderman@gmail.com");
    let toEmail = new helper.Email(`${user.email}`);
    let subject = "Tracky Update";
    let content = new helper.Content("text/html", `${emailText.content}`);
    let mail = new helper.Mail(fromEmail, subject, toEmail, content);

    var sg = require('sendgrid')(config.sgApiKey);
    var request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
    });

    sg.API(request, function(error, response) {
        console.log(response.statusCode);
        console.log(response.body);
        console.log(response.headers);
    });    
};


var job = new CronJob('05 * * * * *', function() {
    todayInteger = new Date().getMinutes();

    User.find({ where: {id: 68}, 
        include: [
            {model: History, as: 'historys', include: [
                {model: Task, as: 'tasks', include: [
                    {model: Goal, as: 'goals'},
                    {model: Timestamp, as: 'timestamps'},
                ]}
            ]}
        ] 
    }).then(user => {
        let emailText = {content: ''};
        let goalsGrouped = {daily: [], weekly: [], monthly: []};

        let lastHistory = user.historys[user.historys.length -1];
        let tasks = lastHistory.tasks;

        // let tasksDup = tasks.slice().map(task => {
        //     let task = merge(task);
        //     task.goals.map(goal => {
        //         let goal = merge(goal);
        //     });
        // });


        tasks = tasks.map(task => task.toJSON());

        tasks.forEach(task => {
            task.goals.forEach(goal => {
                stripId(goal);
                goalsGrouped[goal.interval].push(goal);
            });
        });


        if (false) { //month

        }

        if (false) { //week

        }

        // emailText += `<br/><b>Daily:</b><br/><br/>`;                    

        goalsGrouped['daily'].forEach(goal => assess(tasks, emailText, goal));
        tasks.forEach(task => stripId(task));

        let now = moment(lastHistory.date);
        now.add(1, 'days');

        // let date = now;
        let year = now.get('year');
        let day = dh.adjustedDay(now.get('day'));
        let week = now.get('week');
        week = day === 6 ? week : (week - 1);
        let month = now.get('month');
        let date = now.format("YYYY-MM-DDTHH:mm:ss.SSSSZ");

            //     Task.create(task).then(task => {
            //         task.goals.forEach(goal => {
            //             Goal.create(goal);
            //         });
            //     });
            // });

        // sendEmail(user, emailText);


        History.create(
            {date, userId: user.id, day, week, month, year, tasks},
            {include: [
                {model: Task, as: 'tasks', include: [
                    {model: Goal, as: 'goals'}, {model: Timestamp, as: 'timestamps'}
                ]}
            ]}
        ).then(history => {
            history;
        }).catch(e => {
            e;
        });
    });
}, null, true, 'America/Los_Angeles');

//   Task.create(task, {include: [ {model: Goal, as: 'goals'}, {model: Timestamp, as: 'timestamps'} ]})
//   .then(task => {
//       res.status(201).json(task);
//   }).catch((e) => {
//     res.status(401).send(e);
//   });
