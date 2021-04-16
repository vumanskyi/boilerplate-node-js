const path = require('path');
global.basePath = path.normalize(`${__dirname}/../..`);

/**
 * Parses .env files to retrieve config variables
 */
// require('dotenv-safe').load({ path: `${basePath}/config/env/.env.test`, sample: `${basePath}/config/env/.env.test_example` });
require('dotenv').config({ path: `${basePath}/config/env/.env.test` });
/**
 * Require Application (start app)
 */
const app = require(`${basePath}/bin/app`);

const { DbService } = require(`${basePath}/app/services`);

/**
 * Run All Tests
 */
describe('Main Test Runner', () => {
    before(async () => {
        await DbService.dropDatabase();
    });

    it('Should Run All Tests', async () => {
        describe('# Main Test', async () => {
            require('./test.main')(app);
        });
    });

    after(async () => {
        // await DbService.dropDatabase();
    });
});
