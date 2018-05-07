// Initializes the `leaderboards` service on path `/leaderboards`
const createService = require('feathers-sequelize');
const createModel = require('../../models/leaderboards.model');
const hooks = require('./leaderboards.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'leaderboards',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/leaderboards', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('leaderboards');

  service.hooks(hooks);
};
