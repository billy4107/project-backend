import { Sequelize } from "sequelize";
import sequelize from "../config/database.js";

const { DataTypes } = Sequelize;

const Farmmember = sequelize.define('farmmember', {
    fmid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    memberID: {
        type: DataTypes.STRING
    },
    membername: {
        type: DataTypes.STRING
    },
    idcard: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.BOOLEAN
    },
    address: {
        type: DataTypes.STRING
    }
}, {
    createdAt: true,
    updatedAt: true,
    freezeTableName: true
});

export default Farmmember;