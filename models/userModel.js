import { Sequelize } from "sequelize";
import sequelize from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Users = sequelize.define('users',{
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName:true
});
 
export default Users;