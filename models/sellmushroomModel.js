import { Sequelize } from "sequelize";
import sequelize from "../config/database.js";

const { DataTypes } = Sequelize;

const Sellmushroom = sequelize.define('sellmushroom', {
    sellid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    numbersell: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    mushroomname: {
        type: DataTypes.STRING
    },
    amount: {
        type: DataTypes.DOUBLE
    },
    price: {
        type: DataTypes.DOUBLE
    }
}, {
    createdAt: true,
    updatedAt: true,
    freezeTableName: true
});

export default Sellmushroom;