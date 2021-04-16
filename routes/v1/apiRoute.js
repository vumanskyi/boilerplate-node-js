const express = require('express');
const appRoute = express.Router({ strict: true });


/**
 * Core Routes
 */
appRoute.use('/core', require('./coreRoute'));

/**
 * Subscriber Routes
 */
appRoute.use('/subscribers', require('./subscriberRoute'));

/**
 * User Routes
 */
appRoute.use('/users', require('./userRoute'));


module.exports = appRoute;
