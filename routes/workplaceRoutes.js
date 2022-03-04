import express from "express";
import {
    getAllWorkplace,
    getWorkplaceById,
    createWorkplace,
    updateWorkplace,
    deleteWorkplace,
    // getWorkplaceByfk
} from '../controllers/workplaceContro.js'

const routerWorkplace = express.Router();

routerWorkplace.get('/', getAllWorkplace);
// routerWorkplace.get('/edit/:wid', getWorkplaceByfk);
routerWorkplace.get('/:wid', getWorkplaceById);
routerWorkplace.post('/', createWorkplace);
routerWorkplace.patch('/:wid', updateWorkplace);
routerWorkplace.delete('/:wid', deleteWorkplace);

export default routerWorkplace; 