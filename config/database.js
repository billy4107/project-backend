import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    'mushroomsystem', 'root', 'Billy1234',
    {
        host: "localhost",
        dialect: "mysql",
        timezone: 'Asia/Bangkok',
    });

sequelize.sync();

(async () => {
    try {
        await sequelize.sync({ fore: true })
        // await sequelize.sync({ alter: true });
        // await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})();

export default sequelize;