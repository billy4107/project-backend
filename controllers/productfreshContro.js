import productFreshModel from "../models/productfreshModel.js";

export const getAllProductFresh = async (req, res) => {
    try {
        const productFreshModelModels = await productFreshModel.findAll();
        res.json(productFreshModelModels);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getProductFreshById = async (req, res) => {
    try {
        const productFreshModelModels = await productFreshModel.findAll({
            where: {
                pfid: req.params.pfid
            }
        });
        res.json(productFreshModelModels[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createProductFresh = async (req, res) => {
    try {
        await productFreshModel.create(req.body);
        res.json({
            "message": "productFreshModel Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateProductFresh = async (req, res) => {
    try {
        await productFreshModel.update(req.body, {
            where: {
                pfid: req.params.pfid
            }
        });
        res.json({
            "message": "productFreshModel Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteProductFresh = async (req, res) => {
    try {
        await productFreshModel.destroy({
            where: {
                pfid: req.params.pfid
            }
        });
        res.json({
            "message": "productFreshModel deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}
