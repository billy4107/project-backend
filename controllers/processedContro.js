import processedModel from "../models/processedModel.js";

export const getAllProcessed = async (req, res) => {
    try {
        const processedModels = await processedModel.findAll();
        res.json(processedModels);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getProcessedById = async (req, res) => {
    try {
        const processedModels = await processedModel.findAll({
            where: {
                proid: req.params.proid 
            }
        });
        res.json(processedModels[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createProcessed = async (req, res) => {
    try {
        await processedModel.create(req.body);
        res.json({
            "message": "processedModel Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateProcessed = async (req, res) => {
    try {
        await processedModel.update(req.body, {
            where: {
                proid: req.params.proid 
            }
        });
        res.json({
            "message": "processedModel Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateProcessedSid = async (req, res) => {
    try {
        await processedModel.update({sid: 2}, {
            where: {
                proid: req.params.proid 
            }
        });
        res.json({
            "message": "processedModel Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateProcessedSidDried = async (req, res) => {
    try {
        await processedModel.update({sid: 3}, {
            where: {
                proid: req.params.proid 
            }
        });
        res.json({
            "message": "processedModel Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateProcessedSidPacking = async (req, res) => {
    try {
        await processedModel.update({sid: 4}, {
            where: {
                proid: req.params.proid 
            }
        });
        res.json({
            "message": "processedModel Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateProcessedSidWarehouse = async (req, res) => {
    try {
        await processedModel.update({sid: 5, status: 'pass'}, {
            where: {
                proid: req.params.proid 
            }
        });
        res.json({
            "message": "processedModel Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteProcessed = async (req, res) => {
    try {
        await processedModel.destroy({
            where: {
                proid: req.params.proid 
            }
        });
        res.json({
            "message": "processedModel deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}