"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// utils/sequelize.ts
var sequelize_1 = require("sequelize");
var dotenv = require("dotenv");
dotenv.config();
var sequelize = new sequelize_1.Sequelize(process.env.DB_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});
exports.default = sequelize;
