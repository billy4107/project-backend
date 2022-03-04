import { Sequelize } from "sequelize";
import sequelize from "../config/database.js";

const { DataTypes } = Sequelize;

const Statusprocess = sequelize.define('statusprocess', {
    sid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status: {
        type: DataTypes.INTEGER,
    },
    namestatus: {
        type: DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
});

export default Statusprocess;