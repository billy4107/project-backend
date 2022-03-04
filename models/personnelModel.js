import { Sequelize } from "sequelize";
import sequelize from "../config/database.js";

const { DataTypes } = Sequelize;

const Personnel = sequelize.define('personnel', {
    perid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codename: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    birthday: {
        type: DataTypes.DATEONLY
    },
    idcard: {
        type: DataTypes.INTEGER
    },
    phone: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.BOOLEAN
    }
}, {
    createdAt: true,
    updatedAt: true,
    freezeTableName: true
});

export default Personnel;