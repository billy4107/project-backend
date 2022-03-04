import { Sequelize } from "sequelize";

const sequelize = new Sequelize('mushroomsystem', 'root', 'Billy1234', {
    host: "localhost",
    dialect: "mysql",
    timezone: 'Asia/Bangkok',
});
 
sequelize.sync()

export default sequelize;