import express from "express";
import sequelize from "./config/database.js";
import workplaceRoutes from './routes/workplaceRoutes.js';
import processedRoutes from './routes/processedRoutes.js';
import productfreshRoutes from './routes/productfreshRoutes.js';
import warehouseRoutes from './routes/warehouseRoutes.js';
import buymushroomRoutes from './routes/buymushroomRoutes.js';
import farmmemberRoutes from './routes/farmmemberRoutes.js';
import partnerRoutes from './routes/partnerRoutes.js';
import sellmushroomRoutes from './routes/sellmushroomRoutes.js';
import personnelRoutes from './routes/personnelRoutes.js';
import cors from 'cors';
import Processed from "./models/processedModel.js";
import Statusprocess from "./models/statusProcessModel.js";
import Warehouse from "./models/warehouseModel.js";
import Farmmember from "./models/farmmemberModel.js";
import Buymushroom from "./models/buymushroomModel.js";
import Partner from "./models/partnerModel.js";
import Sellmushroom from "./models/sellmushroomModel.js";
import Workplace from "./models/workplaceModel.js";
import Personnel from "./models/personnelModel.js";
import User from "./models/user.model.js";
import Role from "./models/role.model.js";

const app = express();

Statusprocess.hasMany(Processed, { as: "Processed", foreignKey: 'sid' });
Processed.belongsTo(Statusprocess, { as: "Statusprocess", foreignKey: 'sid' });

Processed.hasOne(Warehouse, { as: "Warehouse", foreignKey: 'proid' });
Warehouse.belongsTo(Processed, { as: "Processed", foreignKey: 'proid' });

Farmmember.hasMany(Buymushroom, { as: "Buymushroom", foreignKey: 'fmid' });
Buymushroom.belongsTo(Farmmember, { as: "Farmmember", foreignKey: 'fmid' });

Partner.hasMany(Sellmushroom, { as: "Sellmushroom", foreignKey: 'pid' });
Sellmushroom.belongsTo(Partner, { as: "Partner", foreignKey: 'pid' });

Warehouse.hasMany(Sellmushroom, { as: "Sellmushroom", foreignKey: 'wareid' });
Sellmushroom.belongsTo(Warehouse, { as: "Warehouse", foreignKey: 'wareid' });

Personnel.hasMany(Workplace, { as: "Workplace", foreignKey: 'perid' });
Workplace.belongsTo(Personnel, { as: "Personnel", foreignKey: 'perid' });

Role.belongsToMany(User, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
  });
User.belongsToMany(Role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
  });

try {
    await sequelize.authenticate();
    // await sequelize.sync({ alter: true });
    // await sequelize.sync({ fore: true })
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}

//  sequelize
//  .sync({ fore: true })

//  .then((result) => {
//     console.log(result);
// }) 
// .catch((error) => {
//     console.error('Connection error:', error);
// })

app.use(cors());
app.use(express.json());
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