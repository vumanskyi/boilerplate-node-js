const userEnums = require(`${basePath}/app/enums`).USER;
const { DBService } = require(`${basePath}/app/services`);
const schema = require('./../schemas/userSchema');

const UserModel = DBService.createModel('User', schema);

UserModel.ROLES = userEnums.ROLES;

module.exports = UserModel;
