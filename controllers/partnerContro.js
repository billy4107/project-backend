import partner from "../models/partnerModel.js";

export const getAllPartner = async (req, res) => {
    try {
        const partners = await partner.findAll();
        res.json(partners);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getAllPartnerStatus = async (req, res) => {
    try {
        const partners = await partner.findAll({
            where: {
                status: "1"
            }
        });
        res.json(partners);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getPartnerById = async (req, res) => {
    try {
        const partners = await partner.findAll({
            where: {
                pid: req.params.pid
            }
        });
        res.json(partners[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createPartner = async (req, res) => {
    try {
        await partner.create(req.body);
        res.json({
            "message": "Partner Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updatePartner = async (req, res) => {
    try {
        await partner.update(req.body, {
            where: {
                pid: req.params.pid
            }
        });
        res.json({
            "message": "Partner Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deletePartner = async (req, res) => {
    try {
        await partner.destroy({
            where: {
                pid: req.params.pid
            }
        });
        res.json({
            "message": "Partner deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}