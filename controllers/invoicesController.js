const db = require('../models');


module.exports = {
    index: (req, res) => {
        db.Invoice.find({}, (err, allInvoices) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, Please try again'
            });
            res.status(200).json({
                status: 200,
                data: allInvoices,
                requestedAt: new Date().toLocaleString()
            })
        });
    },
    show: (req, res) => {
        db.Invoice.findById(req.params.invoice_id)
            .populate('items client user')
            .exec((err, foundInvoice) => {
                if (err) return res.status(400).json({
                    status: 400,
                    message: 'Something went wrong, Please try again'
                });
                res.status(200).json({
                    status: 200,
                    data: foundInvoice,
                    requestedAt: new Date().toLocaleString()
                });
            })

    },

    create: (req, res) => {
        const newInvoice = { user: req.session.currentUser.id, ...req.body }
        db.Invoice.create(newInvoice, (err, createdInvoice) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, Please try again'
            })

            res.status(200).json({
                status: 200,
                data: createdInvoice,
                requestedAt: new Date().toLocaleString()
            })

        });
    },
    update: (req, res) => {
        db.Invoice.findByIdAndUpdate(req.params.invoice_id, req.body, { new: true }, (err, updatedInvoice) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'something went wrong, Please again'
            })
            res.status(200).json({
                status: 200,
                data: updatedInvoice,
                requestedAt: new Date().toLocaleString()
            })
        });
    },
    delete: (req, res) => {
        db.Invoice.findByIdAndDelete(req.params.invoice_id, (err, deletedInvoice) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, Please try again'
            })
            res.status(200).json({
                status: 200,
                data: deletedInvoice,
                requestedAt: new Date().toLocaleString()
            })
        })
    }
}