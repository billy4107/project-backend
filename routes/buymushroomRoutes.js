import express from "express";
import {
    getAllBuymushroom,
    getBuymushroomById,
    createBuymushroom,
    updateBuymushroom,
    deleteBuymushroom,
    getBuymushroomByfK
} from '../controllers/buymushroomContro.js'

const routerBuymushroom = express.Router();

routerBuymushroom.get('/', getBuymushroomByfK);
// routerBuymushroom.get('/', getAllBuymushroom);
routerBuymushroom.get('/:buyid', getBuymushroomById);
routerBuymushroom.post('/', createBuymushroom);
routerBuymushroom.patch('/:buyid', updateBuymushroom);
routerBuymushroom.delete('/:buyid', deleteBuymushroom);


export default routerBuymushroom; 