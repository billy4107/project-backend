// import express from "express";
// import morgan from "morgan";
// import helmet from "helmet";
// import cors from "cors";
// import bodyParser from "body-parser";
// import 'dotenv/config'
// import "./auth/passport.js";
// import "./models/userModel.js";

// import middlewares from "./middlewares";
// import routes from "./routes/index.js";

// import workplaceRoutes from './routes/workplaceRoutes.js';
// import processedRoutes from './routes/processedRoutes.js';
// import productfreshRoutes from './routes/productfreshRoutes.js';
// import warehouseRoutes from './routes/warehouseRoutes.js';
// import buymushroomRoutes from './routes/buymushroomRoutes.js';
// import farmmemberRoutes from './routes/farmmemberRoutes.js';
// import partnerRoutes from './routes/partnerRoutes.js';
// import sellmushroomRoutes from './routes/sellmushroomRoutes.js';
// import personnelRoutes from './routes/personnelRoutes.js';
// import Processed from "./models/processedModel.js";
// import Statusprocess from "./models/statusProcessModel.js";
// import Warehouse from "./models/warehouseModel.js";
// import Farmmember from "./models/farmmemberModel.js";
// import Buymushroom from "./models/buymushroomModel.js";
// import Partner from "./models/partnerModel.js";
// import Sellmushroom from "./models/sellmushroomModel.js";
// import Workplace from "./models/workplaceModel.js";
// import Personnel from "./models/personnelModel.js";

// const app = express();

// Statusprocess.hasMany(Processed, { as: "Processed", foreignKey: 'sid' });
// Processed.belongsTo(Statusprocess, { as: "Statusprocess", foreignKey: 'sid' });

// Processed.hasOne(Warehouse, { as: "Warehouse", foreignKey: 'proid' });
// Warehouse.belongsTo(Processed, { as: "Processed", foreignKey: 'proid' });

// Farmmember.hasMany(Buymushroom, { as: "Buymushroom", foreignKey: 'fmid' });
// Buymushroom.belongsTo(Farmmember, { as: "Farmmember", foreignKey: 'fmid' });

// Partner.hasMany(Sellmushroom, { as: "Sellmushroom", foreignKey: 'pid' });
// Sellmushroom.belongsTo(Partner, { as: "Partner", foreignKey: 'pid' });

// Warehouse.hasMany(Sellmushroom, { as: "Sellmushroom", foreignKey: 'wareid' });
// Sellmushroom.belongsTo(Warehouse, { as: "Warehouse", foreignKey: 'wareid' });

// Personnel.hasMany(Workplace, { as: "Workplace", foreignKey: 'perid' });
// Workplace.belongsTo(Personnel, { as: "Personnel", foreignKey: 'perid' });

// app.use('/workplace', workplaceRoutes);
// app.use('/processed', processedRoutes);
// app.use('/productfresh', productfreshRoutes)
// app.use('/warehouse', warehouseRoutes)
// app.use('/buymushroom', buymushroomRoutes)
// app.use('/farmmember', farmmemberRoutes)
// app.use('/partner', partnerRoutes)
// app.use('/sellmushroom', sellmushroomRoutes)
// app.use('/personnel', personnelRoutes)

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use(morgan("dev"));
// app.use(helmet());
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//     res.json({
//         message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
//     });
// });

// app.use("/api/v1", routes);

// app.use(middlewares.notFound);
// app.use(middlewares.errorHandler);

// export default app;