/**
 * CLI command for creating admin user
 * @type {string}
 */



const path = require('path');
global.basePath = path.normalize(`${__dirname}/../../../../`);

require('dotenv').config({ path: `${__dirname}/../../../../.env` });


require(`${basePath}/app/models/userModel`);

const isObjectValid = (obj) => {
    return !!(obj && Object.keys(obj) && Object.keys(obj).length);
}

// const mainEnvVariables = require(`${basePath}/config`);

// const envBasedVariables = require(`${basePath}/.env`);
// Object.assign(process.env, mainEnvVariables, envBasedVariables);

/**
 * Include Services
 * @type {*}
 */
const { UserService, DBService } = require(`${basePath}/app/services`);


const dbService = new DBService({ connectionString: process.env.DB_CONNECTION_STRING });

const newAdminData = {
    email: process.env.ADMIN_EMAIL || 'john.doe@domain.com',
    password: process.env.ADMIN_PASSWORD || 'john_doe',
    first_name: process.env.ADMIN_FIRST_NAME || 'John',
    last_name: process.env.ADMIN_LAST_NAME || 'Doe',
    role: 'guest',
};

/**
 * Open Database Connection
 */
dbService.connect();


/**
 * Main function to perform admin creation process
 */
const createAdmin = async () => {
    try {
        const searchResult = await UserService.findOne({ query: { email: newAdminData.email } });
        console.log('LOG');
        process.exit();

        if (isObjectValid(searchResult)) {
            throw new Error('Already Exists');
        }
        const userService = new UserService(newAdminData);
        await userService.createOne();

        console.log('SUCCESS: Admin user has been created');
        process.exit();

    } catch (err) {
        console.log(`ERROR: ${err}`);
        process.exit();
    }
};

createAdmin();
