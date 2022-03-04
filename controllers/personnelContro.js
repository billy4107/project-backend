import personnelModel from "../models/personnelModel.js";

export const getAllPersonnel = async (req, res) => {
    try {
        const personnels = await personnelModel.findAll();
        res.json(personnels);
    } catch (error) {
        res.json({ message: error.message });
    }
}


export const getAllPersonnelStatus = async (req, res) => {
    try {
        const personnels = await personnelModel.findAll({
            where: {
                status: "1"
            }
        });
        res.json(personnels);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getPersonnelById = async (req, res) => {
    try {
        const personnels = await personnelModel.findAll({
            where: {
                perid: req.params.perid
            }
        });
        res.json(personnels[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createPersonnel = async (req, res) => {
    try {
        await personnelModel.create(req.body);
        res.json({
            "message": "personnel Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updatePersonnel = async (req, res) => {
    try {
        await personnelModel.update(req.body, {
            where: {
                perid: req.params.perid
            }
        });
        res.json({
            "message": "personnel Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deletePersonnel = async (req, res) => {
    try {
        await personnelModel.destroy({
            where: {
                perid: req.params.perid
            }
        });
        res.json({
            "message": "personnel deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}