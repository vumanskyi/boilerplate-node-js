const express = require('express');
const appRoute = express.Router({ strict: true });
const controller = require(`${basePath}/app/controllers/mainController`);

appRoute.get('/', controller.main);
appRoute.get('/version', controller.version);


module.exports = appRoute;
