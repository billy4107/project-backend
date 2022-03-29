import warehouseModel from "../models/warehouseModel.js";

export const getAllWarehouse = async (req, res) => {
    try {
        const warehouseModels = await warehouseModel.findAll();
        res.json(warehouseModels);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getWarehouseById = async (req, res) => {
    try {
        const warehouseModels = await warehouseModel.findAll({
            where: {
                wareid: req.params.wareid
            }
        });
        res.json(warehouseModels[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createWarehouse = async (req, res) => {
    try {
        await warehouseModel.create(req.body);
        res.json({
            "message": "warehouseModel Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateWarehouse = async (req, res) => {
    try {
        await warehouseModel.update(req.body, {
            where: {
                wareid: req.params.wareid
            }
        });
        res.json({
            "message": "warehouseModel Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateWarehouseSell = async (req, res) => {
    const amount = req.body.amount;
    const wareid = req.params.wareid
    try {
            const warehouseModels = await warehouseModel.sequelize.query(`UPDATE warehouse SET quantity = quantity - $amount WHERE wareid = $wareid`, {
            bind: { amount, wareid },
        });
        // res.json({
        //     "message": "warehouseModel Updated"
        // });
        res.json(warehouseModels);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteWarehouse = async (req, res) => {
    try {
        await warehouseModel.destroy({
            where: {
                wareid: req.params.wareid
            }
        });
        res.json({
            "message": "warehouseModel deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}