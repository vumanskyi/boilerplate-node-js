const { DBService } = require(`${basePath}/app/services`);
const UserModel     = DBService.models().User;

module.exports = {
    isAdmin(user) {
        return !!(user && user.role && user.role === UserModel.ROLES.ADMIN);
    },
};
