import express from "express";
import {
    getAllPartner,
    getAllPartnerStatus,
    getPartnerById,
    createPartner,
    updatePartner,
    deletePartner,
} from '../controllers/partnerContro.js'

const routerPartner = express.Router();

routerPartner.get('/', getAllPartner);
routerPartner.get('/status', getAllPartnerStatus);
routerPartner.get('/:pid', getPartnerById);
routerPartner.post('/', createPartner);
routerPartner.patch('/:pid', updatePartner);
routerPartner.delete('/:pid', deletePartner);

export default routerPartner; 