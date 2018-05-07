const assert = require('assert');
const app = require('../../src/app');

describe('\'leaderboard\' service', () => {
  it('registered the service', () => {
    const service = app.service('leaderboard');

    assert.ok(service, 'Registered the service');
  });
});
