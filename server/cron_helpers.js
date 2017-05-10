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
        let completed = goal.count >= goal.target;
        let count = task.type === 'time' ? dh.minutesToTime(goal.count) : parseInt(goal.count);
        let target = task.type === 'time' ? dh.minutesToTime(goal.target) : parseInt(goal.target);

        emailText.content += eth.task(task, count, target, completed);
        goal.count = 0;
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
    // tasks = tasks.map(task => task.toJSON());

    let goalsGrouped = groupGoals(tasks);
    // let {day, week, month, year, date} = getNewHistoryInfo(lastHistory.date);

    emailText.content += eth.headerOpening();

    if (isFirstDayOfMonth()) assess(emailText, 'monthly', goalsGrouped['monthly'], tasks);
    if (dh.today().get('day') === 1) assess(emailText, 'weekly', goalsGrouped['weekly'], tasks);         
    assess(emailText, 'daily', goalsGrouped['daily'], tasks);

    tasks.forEach(task => stripId(task));

    emailText.content += eth.headerClosing();    

    sendEmail(user, emailText);

    // for (let interval in goalsGrouped) {
    //     let goals = goalsGrouped[interval];
    // }

    // History.create(
    //     {date, userId: user.id, day, week, month, year, tasks},
    //     {include: [
    //         {model: Task, as: 'tasks', include: [
    //             {model: Goal, as: 'goals'}, {model: Timestamp, as: 'timestamps'}
    //         ]}
    //     ]}
    // ).then(history => {
    //     history;
    // }).catch(e => {
    //     e;
    // });    
};

        // message = `<span style="color: red;">Incomplete: ${task.name} (${goal.count} of ${goal.goal})</span><br/>`;                
        // message = `<span style="color: green;">Complete: ${task.name} (${goal.count} of ${goal.goal}) <b>Streak: ${goal.streak}</span><b><br/>`;                