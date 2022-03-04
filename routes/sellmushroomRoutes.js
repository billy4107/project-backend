import express from "express";
import {
    getAllSellmushroom,
    getSellmushroomById,
    getSellmushroomByfK,
    createSellmushroom,
    updateSellmushroom,
    deleteSellmushroom
} from '../controllers/sellmushroomContro.js'

const routerSellmushroom = express.Router();

routerSellmushroom.get('/', getSellmushroomByfK);
routerSellmushroom.get('/:sellid', getSellmushroomById);
routerSellmushroom.post('/', createSellmushroom);
routerSellmushroom.patch('/:sellid', updateSellmushroom);
routerSellmushroom.delete('/:sellid', deleteSellmushroom);

export default routerSellmushroom; 