import express from "express";
import {
    getAllFarmmember,
    getFarmmemberById,
    createFarmmember,
    updateFarmmember,
    deleteFarmmember,
    getAllFarmmemberStatus
} from '../controllers/farmmemberContro.js'

const routerFarmmember = express.Router();

routerFarmmember.get('/', getAllFarmmember);
routerFarmmember.get('/status', getAllFarmmemberStatus);
routerFarmmember.get('/:fmid', getFarmmemberById);
routerFarmmember.post('/', createFarmmember);
routerFarmmember.patch('/:fmid', updateFarmmember);
routerFarmmember.delete('/:fmid', deleteFarmmember);

export default routerFarmmember; 