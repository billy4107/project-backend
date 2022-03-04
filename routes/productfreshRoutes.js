import express from "express";
import {
    getAllProductFresh,
    getProductFreshById,
    createProductFresh,
    updateProductFresh,
    deleteProductFresh
} from '../controllers/productfreshContro.js'

const routerProductFresh = express.Router();

routerProductFresh.get('/', getAllProductFresh);
routerProductFresh.get('/:pfid', getProductFreshById);
routerProductFresh.post('/', createProductFresh);
routerProductFresh.patch('/:pfid', updateProductFresh);
routerProductFresh.delete('/:pfid', deleteProductFresh);

export default routerProductFresh; 