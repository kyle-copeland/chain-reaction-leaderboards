const leaderboard = require('./leaderboard/leaderboard.service.js');
const leaderboards = require('./leaderboards/leaderboards.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(leaderboard);
  app.configure(leaderboards);
};
