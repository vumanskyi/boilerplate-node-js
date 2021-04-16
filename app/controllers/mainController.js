const serviceContainerManager = require('../core/serviceContainerManager');
const { ServerService, ResponseService } = serviceContainerManager.load(['ServerService', 'ResponseService']);

module.exports = {
    main(req, res) {
        ResponseService.sendSuccessResponse(res, { uptime: ServerService.getServerUptime() });
    },

    version(req, res) {
        ResponseService.sendSuccessResponse(res, {
            status: 'OK',
            uptime: ServerService.getServerUptime(),
            version: process.env.APP_VERSION || '0.0.0'
        });
    },
};
