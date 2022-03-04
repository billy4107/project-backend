import sellmushroom from "../models/sellmushroomModel.js";
import partner from "../models/partnerModel.js";

export const getAllSellmushroom = async (req, res) => {
    try {
        const sellmushrooms = await sellmushroom.findAll();
        res.json(sellmushrooms);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getSellmushroomById = async (req, res) => {
    try {
        const sellmushrooms = await sellmushroom.findAll({
            include: [{
                model: partner,
                as: 'Partner',
                required: true,
            }],
            where: {
                sellid: req.params.sellid
            }

        });
        res.json(sellmushrooms[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getSellmushroomByfK = async (req, res) => {
    try {
        const sellmushrooms = await sellmushroom.findAll({
            include: [{
                model: partner,
                as: 'Partner',
                required: true
            }]
        });
        res.json(sellmushrooms);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createSellmushroom = async (req, res) => {
    try {
        await sellmushroom.create(req.body);
        res.json({
            "message": "sellmushroom Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateSellmushroom = async (req, res) => {
    try {
        await sellmushroom.update(req.body, {
            where: {
                sellid: req.params.sellid
            }
        });
        res.json({
            "message": "sellmushroom Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteSellmushroom = async (req, res) => {
    try {
        await sellmushroom.destroy({
            where: {
                sellid: req.params.sellid
            }
        });
        res.json({
            "message": "sellmushroom deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}