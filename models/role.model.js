import { Sequelize } from "sequelize";
import sequelize from "../config/database.js";

const { DataTypes } = Sequelize;

const Role = sequelize.define('roles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default Role;