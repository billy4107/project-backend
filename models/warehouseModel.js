import { Sequelize } from "sequelize";
import sequelize from "../config/database.js";

const { DataTypes } = Sequelize;

const Warehouse = sequelize.define('warehouse', {
    wareid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code: {
        type: DataTypes.STRING
    },
    mushroomname: {
        type: DataTypes.STRING
    },
    quantity: {
        type: DataTypes.INTEGER,
    },
    netweight: {
        type: DataTypes.DOUBLE
    }
}, {
    createdAt: true,
    updatedAt: true,
    freezeTableName: true
});

export default Warehouse;