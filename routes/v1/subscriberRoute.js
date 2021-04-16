const express = require('express');
const appRoute = express.Router({ strict: true });

const validator = require(`${basePath}/app/middlewares/dataValidators/entities/subscriber`);
const controller = require(`${basePath}/app/controllers/subscriberController`);

appRoute.post('/',
    validator.create,
    controller.create,
);

module.exports = appRoute;
