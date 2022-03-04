import workplace from "../models/workplaceModel.js";
import personnel from "../models/personnelModel.js";

export const getAllWorkplace = async (req, res) => {
    try {
        const workplaces = await workplace.findAll({
            include: [{
                model: personnel,
                as: 'Personnel',
                required: true
            }]
        });
        res.json(workplaces);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getWorkplaceById = async (req, res) => {
    try {
        const workplaces = await workplace.findAll({
            include: [{
                model: personnel,
                as: 'Personnel',
                required: true
            }],
            where: {
                wid: req.params.wid 
            }
        });
        res.json(workplaces[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// export const getWorkplaceByfk = async (req, res) => {
//     try {
//         const workplaces = await workplace.findAll({
//             include: [{
//                 model: personnel,
//                 required: true,
//                 as: 'Personnel',
//                 where: {
//                     wid: req.params.wid 
//                 }
//             }]
//         });
//         res.json(workplaces[0]);
//     } catch (error) {
//         res.json({ message: error.message });
//     }
// }

export const createWorkplace = async (req, res) => {
    try {
        await workplace.create(req.body);
        res.json({
            "message": "Workplace Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateWorkplace = async (req, res) => {
    try {
        await workplace.update(req.body, {
            where: {
                wid: req.params.wid 
            }
        });
        res.json({
            "message": "Workplace Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteWorkplace = async (req, res) => {
    try {
        await workplace.destroy({
            where: {
                wid: req.params.wid 
            }
        });
        res.json({
            "message": "Workplace deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}