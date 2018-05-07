const assert = require('assert');
const app = require('../../src/app');

describe('\'leaderboards\' service', () => {
  it('registered the service', () => {
    const service = app.service('leaderboards');

    assert.ok(service, 'Registered the service');
  });
});
