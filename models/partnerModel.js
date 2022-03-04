import { Sequelize } from "sequelize";
import sequelize from "../config/database.js";

const { DataTypes } = Sequelize;

const Partner = sequelize.define('partner', {
    pid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    partnerID: {
        type: DataTypes.STRING
    },
    partnername: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.BOOLEAN
    }
}, {
    createdAt: true,
    updatedAt: true,
    freezeTableName: true
});

export default Partner;