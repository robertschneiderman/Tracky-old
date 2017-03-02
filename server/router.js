const Auth = require('./controllers').auth;
const Cron = require('./controllers').cron;
const User = require('./controllers').user;
const Historyy = require('./controllers').history;
const Task = require('./controllers').task;
const Goal = require('./controllers').goal;
const Timestamp = require('./controllers').timestamp;
const passportService = require('./services/passport');
const passport = require('passport');


const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignIn = passport.authenticate('local', { session: false });

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.send({hi: 'there'});
  });

  app.post('/signin', requireSignIn, Auth.signin);
  app.post('/signup', Auth.signup);

  app.get('/users/:id', User.find);

  app.post('/historys', requireAuth, Historyy.create);

  app.post('/tasks', requireAuth, Task.create);
  app.get('/tasks', Task.getTasks);

  app.post('/goals', requireAuth, Goal.create);
  app.patch('/goals/:id', Goal.update);
  app.patch('/task/:id/goals', Goal.increment);

  app.post('/timestamps', requireAuth, Timestamp.create);
  app.patch('/timestamps/:id', requireAuth, Timestamp.finish);
  app.patch('/tasks/:taskId/timestamps', requireAuth, Timestamp.update);
  // app.patch('/timestamp', requireAuth, Timestamp.edit);
  app.delete('/tasks/:taskId/timestamps/:id', requireAuth, Timestamp.delete);


  app.post('/cron', requireAuth, Cron.create);
};