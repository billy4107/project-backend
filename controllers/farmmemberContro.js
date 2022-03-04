import farmmember from "../models/farmmemberModel.js";

export const getAllFarmmember = async (req, res) => {
    try {
        const farmmembers = await farmmember.findAll();
        res.json(farmmembers);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getAllFarmmemberStatus = async (req, res) => {
    try {
        const farmmembers = await farmmember.findAll({
            where: {
                status: "1"
            }
        });
        res.json(farmmembers);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getFarmmemberById = async (req, res) => {
    try {
        const farmmembers = await farmmember.findAll({
            where: {
                fmid: req.params.fmid
            }
        });
        res.json(farmmembers[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createFarmmember = async (req, res) => {
    try {
        await farmmember.create(req.body);
        res.json({
            "message": "farmmember Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateFarmmember = async (req, res) => {
    try {
        await farmmember.update(req.body, {
            where: {
                fmid: req.params.fmid
            }
        });
        res.json({
            "message": "farmmember Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteFarmmember = async (req, res) => {
    try {
        await farmmember.destroy({
            where: {
                fmid: req.params.fmid
            }
        });
        res.json({
            "message": "farmmember deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}