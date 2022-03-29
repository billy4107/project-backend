// import app from "./app.js";
// import sequelize from "./config/database.js";

// try {
//     await sequelize.authenticate();
//     await sequelize.sync({ alter: true });
//     await sequelize.sync({ fore: true })
//     console.log('Database connected...');
// } catch (error) {
//     console.error('Connection error:', error);
// }

// const port = process.env.PORT || 3001
// app.listen(port, () => console.log(`Server running at port ${port}`));

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import sequelize from "./config/database.js";
import router from "./routes/index.js";
import bodyParser from "body-parser"
dotenv.config();
const app = express();

try {
    await sequelize.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}

import workplaceRoutes from './routes/workplaceRoutes.js';
import processedRoutes from './routes/processedRoutes.js';
import productfreshRoutes from './routes/productfreshRoutes.js';
import warehouseRoutes from './routes/warehouseRoutes.js';
import buymushroomRoutes from './routes/buymushroomRoutes.js';
import farmmemberRoutes from './routes/farmmemberRoutes.js';
import partnerRoutes from './routes/partnerRoutes.js';
import sellmushroomRoutes from './routes/sellmushroomRoutes.js';
import personnelRoutes from './routes/personnelRoutes.js';
import Processed from "./models/processedModel.js";
import Statusprocess from "./models/statusProcessModel.js";
import Warehouse from "./models/warehouseModel.js";
import Farmmember from "./models/farmmemberModel.js";
import Buymushroom from "./models/buymushroomModel.js";
import Partner from "./models/partnerModel.js";
import Sellmushroom from "./models/sellmushroomModel.js";
import Workplace from "./models/workplaceModel.js";
import Personnel from "./models/personnelModel.js";

Statusprocess.hasMany(Processed, { as: "Processed", foreignKey: 'sid' });
Processed.belongsTo(Statusprocess, { as: "Statusprocess", foreignKey: 'sid' });

Farmmember.hasMany(Buymushroom, { as: "Buymushroom", foreignKey: 'fmid' });
Buymushroom.belongsTo(Farmmember, { as: "Farmmember", foreignKey: 'fmid' });

Partner.hasMany(Sellmushroom, { as: "Sellmushroom", foreignKey: 'pid' });
Sellmushroom.belongsTo(Partner, { as: "Partner", foreignKey: 'pid' });

Warehouse.hasMany(Sellmushroom, { as: "Sellmushroom", foreignKey: 'wareid' });
Sellmushroom.belongsTo(Warehouse, { as: "Warehouse", foreignKey: 'wareid' });

Personnel.hasMany(Workplace, { as: "Workplace", foreignKey: 'perid' });
Workplace.belongsTo(Personnel, { as: "Personnel", foreignKey: 'perid' });

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());

app.use('/', router);
app.use('/workplace', workplaceRoutes);
app.use('/processed', processedRoutes);
app.use('/productfresh', productfreshRoutes)
app.use('/warehouse', warehouseRoutes)
app.use('/buymushroom', buymushroomRoutes)
app.use('/farmmember', farmmemberRoutes)
app.use('/partner', partnerRoutes)
app.use('/sellmushroom', sellmushroomRoutes)
app.use('/personnel', personnelRoutes)

app.listen(3001, () => console.log('Server running at port 3001'));