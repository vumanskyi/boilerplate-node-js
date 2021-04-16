const httpStatus = require('http-status');
const BaseError = require('./BaseError');

module.exports = class BadRequest extends BaseError {
    constructor(message) {
        super(message || 'Bad Request', httpStatus.BAD_REQUEST);
    }
}
