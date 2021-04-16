const express = require('express');
const appRoute = express.Router({ strict: true });

const { FileUploadService } = require('../../app/services/');
const controller = require('../../app/controllers/baseController');
const authMiddleware = require('../../app/middlewares/accessControl/entities/auth');

appRoute.post('/upload',
    authMiddleware.validateToken,
    // authMiddleware.loadUser,
    FileUploadService.getIncomingFileHandler(),
    controller.uploadFile,
);

module.exports = appRoute;
