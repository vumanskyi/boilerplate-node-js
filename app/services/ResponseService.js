/**
 * Service to close response data formatting
 * Uses express res.send method
 */
const httpStatus = require('http-status');

module.exports = class ResponseService {

    static sendSuccessResponse(response, data) {

        response.set('Pagination-Count', 0);
        response.set('Pagination-Skip', response.req.query.skip);
        response.set('Pagination-Limit', response.req.query.limit);

        response.send(data);
    }

    static sendErrorResponse(response, err) {
        const errStatus = err.status || httpStatus.INTERNAL_SERVER_ERROR;
        response.status(errStatus).send({ error: err.message });
    }
};
