const db = require('../models');


module.exports = {
    index: (req, res) => {
        db.Item.find({}, (err, allItems) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, Please try again'
            });
            res.status(200).json({
                status: 200,
                data: allItems,
                requestedAt: new Date().toLocaleString()
            })
        });
    },
    show: (req, res) => {
        db.Item.findById(req.params.item_id, (err, foundItem) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, Please try again'
            });
            res.status(200).json({
                status: 200,
                data: foundItem,
                requestedAt: new Date().toLocaleString()
            });
        });
    },
    create: (req, res) => {
        db.Item.create(req.body, (err, createdItem) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, Please try again'
            })
            res.status(200).json({
                status: 200,
                data: createdItem,
                requestedAt: new Date().toLocaleString()
            })
        });
    },
    update: (req, res) => {
        db.Item.findByIdAndUpdate(req.params.item_id, req.body, { new: true }, (err, updatedItem) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'something went wrong, Please again'
            })
            res.status(200).json({
                status: 200,
                data: updatedItem,
                requestedAt: new Date().toLocaleString()
            })
        });
    },
    delete: (req, res) => {
        db.Item.findByIdAndDelete(req.params.item_id, (err, deletedItem) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, Please try again'
            })
            res.status(200).json({
                status: 200,
                data: deletedItem,
                requestedAt: new Date().toLocaleString()
            })
        })
    }
}