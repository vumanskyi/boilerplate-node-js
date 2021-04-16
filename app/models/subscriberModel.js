const { DBService } = require(`${basePath}/app/services`);
const schema = require('./../schemas/subscriberSchema');

const Model = DBService.createModel('Subscriber', schema);

module.exports = Model;
