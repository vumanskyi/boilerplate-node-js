const { DBService } = require(`${basePath}/app/services`);

const schemaData = {
    email: { type: String, required: true, unique: true },
};

const schemaOptions = {
    toJSON: { getters: true },
    toObject: { getters: true },
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    },
};

module.exports = DBService.createSchema(schemaData, schemaOptions);
