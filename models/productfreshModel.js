import { Sequelize } from "sequelize";
import sequelize from "../config/database.js";

const { DataTypes } = Sequelize;

const Productfresh  = sequelize.define('productfresh', {
    pfid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idproduct: {
        type: DataTypes.STRING
    },
    mushroomname: {
        type: DataTypes.STRING
    },
    amount: {
        type: DataTypes.INTEGER
    },
    partner: {
        type: DataTypes.STRING
    },
    importdate: {
        type: DataTypes.DATEONLY
    },
    expdate: {
        type: DataTypes.DATEONLY
    },
    note: {
        type: DataTypes.STRING
    }
}, {
    createdAt: true,
    updatedAt: true,
    freezeTableName: true
});

export default Productfresh;