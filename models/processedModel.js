import { Sequelize } from "sequelize";
import sequelize from "../config/database.js";

const { DataTypes } = Sequelize;

const Processed = sequelize.define('processed', {
    proid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mushroomname: {
        type: DataTypes.STRING
    },
    sortingweight: {
        type: DataTypes.DOUBLE
    },
    beforeweight: {
        type: DataTypes.DOUBLE
    },
    afterweight: {
        type: DataTypes.DOUBLE
    },
    quantity: {
        type: DataTypes.INTEGER,
    },
    netweight: {
        type: DataTypes.DOUBLE
    },
    status: {
        type: DataTypes.STRING,
    }
}, {
    freezeTableName: true
});

export default Processed;