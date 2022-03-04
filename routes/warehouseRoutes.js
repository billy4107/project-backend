import express from "express";
import {
    getAllWarehouse,
    getWarehouseById,
    createWarehouse,
    updateWarehouse,
    deleteWarehouse
} from '../controllers/warehouseContro.js'

const routerWarehouse = express.Router();

routerWarehouse.get('/', getAllWarehouse);
routerWarehouse.get('/:wareid', getWarehouseById);
routerWarehouse.post('/', createWarehouse);
routerWarehouse.patch('/:wareid', updateWarehouse);
routerWarehouse.delete('/:wareid', deleteWarehouse);

export default routerWarehouse; 