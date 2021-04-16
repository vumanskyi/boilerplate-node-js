const httpStatus = require('http-status');
const BaseError = require('./BaseError');

module.exports = class NotFound extends BaseError {
    constructor(message) {
        super(message || 'Not Found', httpStatus.NOT_FOUND);
    }
}
