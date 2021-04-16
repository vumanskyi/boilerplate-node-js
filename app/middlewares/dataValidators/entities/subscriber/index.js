const mainValidator = require('../../main');
const subscriberValidationSchema = require('../../../../validation/schemas/subscriberSchemaValidation');

module.exports = {
    create(req, res, next) {
        return mainValidator.validateSync(subscriberValidationSchema.create(), req, next);
    },
};
