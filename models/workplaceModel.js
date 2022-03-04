import { Sequelize } from "sequelize";
import sequelize from "../config/database.js";

const { DataTypes } = Sequelize;

const Workplace = sequelize.define('workplace', {
    wid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    worktype: {
        type: DataTypes.STRING
    },
    harvest: {
        type: DataTypes.DOUBLE
    },
    damaged: {
        type: DataTypes.DOUBLE
    },
    note: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default Workplace;