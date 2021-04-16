const express = require('express');

const appRoute = express.Router({ strict: true, mergeParams: true });

const controller = require(`${basePath}/app/controllers/userController`);
const acl = require(`${basePath}/app/middlewares/accessControl/entities/user`);
const authMiddleware = require(`${basePath}/app/middlewares/accessControl/entities/auth`);
const loader = require(`${basePath}/app/middlewares/entityLoaders/entities/user`);
const validator = require('../../app/middlewares/dataValidators/entities/user');


appRoute.post('/sync',
    authMiddleware.validateToken,
    controller.syncOne,
);

// appRoute.get('/',
//   authMiddleware.validateToken,
//   authMiddleware.loadUser,
//   validator.getAll,
//   acl.getAll,
//   loader.getAll,
//   controller.getAll,
// );


appRoute.get('/me',
    authMiddleware.validateToken,
    authMiddleware.loadUser,
    controller.getMe,
);

appRoute.get('/:userId',
    validator.getOne,
    loader.getOne,
    controller.getOne,
);


appRoute.put('/:userId',
    authMiddleware.validateToken,
    authMiddleware.loadUser,
    acl.updateOne,
    validator.updateOne,
    controller.updateOne,
);


appRoute.delete('/me',
    authMiddleware.validateToken,
    authMiddleware.loadUser,
    controller.deleteOne,
);


module.exports = appRoute;
