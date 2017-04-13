const User = require('./models').User;
const History = require('./models').History;
const Task = require('./models').Task;
const Goal = require('./models').Goal;
const Timestamp = require('./models').Timestamp;
const dh = require('./date_helpers');
const config = require('./environment');
const _ = require('lodash');
var moment = require('moment');

const stripId = obj => {
    delete obj.id;
};

const assess = (tasks, emailText, goal) => {
    let task = tasks.find(task => task.id === goal.taskId);
    let count = dh.minutesToTime(goal.count);
    let target = dh.minutesToTime(goal.target);

    if (goal.count >= goal.target) {
        emailText.content += `<span style="color: green;">${task.name} complete! (${count} / ${target})</span>`;
    } else {
        emailText.content += `<span style="color: red;">${task.name} failed! (${count} / ${target})</span>`;
    }
    goal.count = 0;
    emailText.content += `<br/>`;
    return emailText;
};

const sendEmail = (user, emailText) => {
    var helper = require('sendgrid').mail;
    
    let fromEmail = new helper.Email("robert.a.schneiderman@gmail.com");
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

const getNewHistoryInfo = date => {
    let now = moment(date);
    now.add(1, 'days');

    let day = dh.adjustedDay(now.get('day'));
    let week = now.get('week');
    week = day === 6 ? (week - 1) : week;
    let month = now.get('month');
    let year = now.get('year');
    date = now.format("YYYY-MM-DDTHH:mm:ss.SSSSZ");    

    return {day, week, month, year, date};
};

const isFirstDayOfMonth = () => {
    return moment().get('date') === 1;
};

exports.cronTask = user => {
    let emailText = {content: ''};

    let lastHistory = user.historys[user.historys.length-1];
    let tasks = lastHistory.tasks;
    tasks = tasks.map(task => task.toJSON());

    let goalsGrouped = groupGoals(tasks);
    let {day, week, month, year, date} = getNewHistoryInfo(lastHistory.date);

    if (isFirstDayOfMonth()) {
        emailText.content += `<br/><b>Monthly:</b><br/><br/>`;
        goalsGrouped['monthly'].forEach(goal => assess(tasks, emailText, goal));
    }
    if (day === 0) {
        emailText.content += `<br/><b>Weekly:</b><br/><br/>`;        
        goalsGrouped['weekly'].forEach(goal => assess(tasks, emailText, goal));
    }
    emailText.content += `<br/><b>Daily:</b><br/><br/>`;            
    goalsGrouped['daily'].forEach(goal => assess(tasks, emailText, goal));

    tasks.forEach(task => stripId(task));

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
};

        // message = `<span style="color: red;">Incomplete: ${task.name} (${goal.count} of ${goal.goal})</span><br/>`;                
        // message = `<span style="color: green;">Complete: ${task.name} (${goal.count} of ${goal.goal}) <b>Streak: ${goal.streak}</span><b><br/>`;                