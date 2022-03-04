import express from "express";
import {
    getAllPersonnel,
    getAllPersonnelStatus,
    getPersonnelById,
    createPersonnel,
    updatePersonnel,
    deletePersonnel,
} from '../controllers/personnelContro.js'

const routerPersonnel = express.Router();

routerPersonnel.get('/', getAllPersonnel);
routerPersonnel.get('/status', getAllPersonnelStatus);
routerPersonnel.get('/:perid', getPersonnelById);
routerPersonnel.post('/', createPersonnel);
routerPersonnel.patch('/:perid', updatePersonnel);
routerPersonnel.delete('/:perid', deletePersonnel);

export default routerPersonnel; 