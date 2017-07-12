const User = require('./models').User;
const History = require('./models').History;
const Task = require('./models').Task;
const Goal = require('./models').Goal;
const Timestamp = require('./models').Timestamp;
const dh = require('./date_helpers');
const config = require('./environment');
const _ = require('lodash');
var moment = require('moment');
const eth = require('./emailTemplateHelper');

const stripId = obj => {
    delete obj.id;
};

const assess = (emailText, interval, goals, tasks) => {

    emailText.content += eth.intervalOpening(interval);
    goals.forEach(goal => {
        let task = tasks.find(task => task.id === goal.taskId);
        let completed = goal.count >= Math.ceil(goal.multiplier * goal.target);
        let count = task.type === 'time' ? dh.minutesToTime(goal.count) : parseInt(goal.count);
        let target = task.type === 'time' ? dh.minutesToTime(goal.target) : parseInt(goal.target);

        emailText.content += eth.task(task, count, target, completed);
        completed ? goal.streak += 1 : goal.streak = 0;
        if (goal.streak > goal.record) goal.record = goal.streak;
        goal.count = 0;
        if (goal.multiplier !== 1) goal.multiplier = 1;
        goal.save();
    });
    emailText.content += eth.intervalClosing();

    return emailText;
};

const sendEmail = (user, emailText) => {
    var helper = require('sendgrid').mail;
    
    let fromEmail = new helper.Email("worldindustry91@gmail.com.com");
    let toEmail = new helper.Email(`robert.a.schneiderman@gmail.com`);
    // let toEmail = new helper.Email(`${user.email}`);
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

const groupGoals = tasks => {
    let goalsGrouped = {daily: [], weekly: [], monthly: []};
    tasks.forEach(task => {
        task.goals.forEach(goal => {
            stripId(goal);
            goalsGrouped[goal.interval].push(goal);
        });
    }); 

    return goalsGrouped;   
};

const isFirstDayOfMonth = () => {
    return dh.today().get('date') === 1;
};

exports.cronTask = user => {
    let emailText = {content: ''};

    let tasks = user.tasks;

    let goalsGrouped = groupGoals(tasks);
    emailText.content += eth.headerOpening();

    if (isFirstDayOfMonth()) assess(emailText, 'monthly', goalsGrouped['monthly'], tasks);
    if (dh.today().get('day') === 1) assess(emailText, 'weekly', goalsGrouped['weekly'], tasks);         
    assess(emailText, 'daily', goalsGrouped['daily'], tasks);

    tasks.forEach(task => stripId(task));

    emailText.content += eth.headerClosing();    

    sendEmail(user, emailText);

};