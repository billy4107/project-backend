import buymushroom from "../models/buymushroomModel.js";
import farmmember from "../models/farmmemberModel.js";

export const getAllBuymushroom = async (req, res) => {
    try {
        const buymushrooms = await buymushroom.findAll();
        res.json(buymushrooms);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getBuymushroomById = async (req, res) => {
    try {
        const buymushrooms = await buymushroom.findAll({
            include: [{
                model: farmmember,
                as: 'Farmmember',
                required: true,
            }],
            where: {
                buyid: req.params.buyid
            }
        });
        res.json(buymushrooms[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getBuymushroomByfK = async (req, res) => {
    try {
        const buymushrooms = await buymushroom.findAll({
            include: [{
                model: farmmember,
                as: 'Farmmember',
                required: true
            }]
        });
        res.json(buymushrooms);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createBuymushroom = async (req, res) => {
    try {
        await buymushroom.create(req.body);
        res.json({
            "message": "buymushroom Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateBuymushroom = async (req, res) => {
    try {
        await buymushroom.update(req.body, {
            where: {
                buyid: req.params.buyid
            }
        });
        res.json({
            "message": "buymushroom Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteBuymushroom = async (req, res) => {
    try {
        await buymushroom.destroy({
            where: {
                buyid: req.params.buyid
            }
        });
        res.json({
            "message": "buymushroom deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}