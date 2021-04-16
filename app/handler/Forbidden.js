const httpStatus = require('http-status');
const BaseError = require('./BaseError');

module.exports = class Forbidden extends BaseError {
    constructor(message) {
        super(message || 'Forbidden', httpStatus.FORBIDDEN);
    }
}
