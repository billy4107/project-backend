import express from "express";
import {
    getAllProcessed,
    getProcessedById,
    createProcessed,
    updateProcessed,
    updateProcessedSid,
    deleteProcessed,
    updateProcessedSidDried,
    updateProcessedSidPacking,
    updateProcessedSidWarehouse
} from '../controllers/processedContro.js'

const routerProcessed = express.Router();

routerProcessed.get('/', getAllProcessed);
routerProcessed.get('/:proid', getProcessedById);
routerProcessed.post('/', createProcessed);
routerProcessed.patch('/sid2/:proid', updateProcessedSid);
routerProcessed.patch('/sid3/:proid', updateProcessedSidDried);
routerProcessed.patch('/sid4/:proid', updateProcessedSidPacking);
routerProcessed.patch('/sid5/:proid', updateProcessedSidWarehouse);
routerProcessed.patch('/:proid', updateProcessed);
routerProcessed.delete('/:proid', deleteProcessed);

export default routerProcessed; 