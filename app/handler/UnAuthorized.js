const httpStatus = require('http-status');
const BaseError = require('./BaseError');

module.exports = class UnAuthorized extends BaseError {
    constructor(message) {
        super(message || 'Not Authorized', httpStatus.UNAUTHORIZED);
    }
}
