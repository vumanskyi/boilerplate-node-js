const express   = require('express');
const appRoute  = express.Router({ strict: true });

/**
 * Main App Routes (Dummy)
 */
appRoute.use('/', require('./mainRoute'));
appRoute.use('/api', require('./mainRoute'));

/**
 * API V1 Routes
 */
appRoute.use('/api', require('./v1'));

module.exports = appRoute;
