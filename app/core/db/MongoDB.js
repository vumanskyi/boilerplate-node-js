const mongoose = require('mongoose');

module.exports = class MongoDB {
    constructor(options) {
        this._dbProvider = mongoose;
        this._dbProvider.Promise = global.Promise;
        this._options = options;
        this.connection = false;

        if (!(this._options && this._options.connectionString)) {
            super.throwError('database connection string is not provided');
        }
    }

    static getDataTypes() {
        return mongoose.Schema.Types;
    }

    static getSchemaTypes() {
        return mongoose.Schema.Types;
    }

    static createSchema(schemaData, options) {
        return new mongoose.Schema(schemaData, options);
    }

    static createModel(modelName, schema) {
        mongoose.Promise = global.Promise;
        return mongoose.model(modelName, schema);
    }


    static models(modelName) {
        if (modelName) {
            return mongoose.models[modelName];
        }
        return mongoose.models;
    }

    static dropDatabase() {
        return mongoose.connection.dropDatabase();
    }

    connect() {
        return this._dbProvider.connect(this._options.connectionString, { useNewUrlParser: true });
    }
};
