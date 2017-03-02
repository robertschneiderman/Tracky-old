const auth = require('./auth');
const cron = require('./cron');
const user = require('./user');
const history = require('./history');
const task = require('./task');
const goal = require('./goal');
const timestamp = require('./timestamp');

module.exports = {
  auth,
  cron,
  user,
  history,
  task,
  goal,
  timestamp
};