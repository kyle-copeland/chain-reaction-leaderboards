// Initializes the `leaderboard` service on path `/leaderboard`
const createService = require('./leaderboard.class.js');
const hooks = require('./leaderboard.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'leaderboard',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/leaderboard', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('leaderboard');

  service.hooks(hooks);
};
