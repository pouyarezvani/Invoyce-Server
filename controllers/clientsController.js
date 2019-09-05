const db = require('../models');


module.exports = {
    index: (req, res) => {
        db.Client.find({ user: req.session.currentUser.id }, (err, foundClients) => {
            if (err) return res.status(500).json({
                status: 500,
                message: 'Something went wrong. Please try again'
            });

            res.status(200).json({
                status: 200,
                data: foundClients
            });
        })
    },
    show: (req, res) => {
        db.Client.findById(req.params.client_id, (err, foundClient) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, Please try again'
            });
            res.status(200).json({
                status: 200,
                data: foundClient,
                requestedAt: new Date().toLocaleString()
            });
        });
    },
    create: (req, res) => {
        db.Client.create(req.body, (err, createdClient) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, Please try again'
            })
            createdClient.user = req.session.currentUser.id
            createdClient.save((err, savedClient) => {
                if (err) return res.status(400).json({
                    status: 400,
                    message: 'Something went wrong, Please try again'
                })
                res.status(200).json({
                    status: 200,
                    data: savedClient,
                    requestedAt: new Date().toLocaleString()
                })
            })
        });
    },
    update: (req, res) => {
        db.Client.findByIdAndUpdate(req.params.client_id, req.body, { new: true }, (err, updatedClient) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'something went wrong, Please again'
            })
            res.status(200).json({
                status: 200,
                data: updatedClient,
                requestedAt: new Date().toLocaleString()
            })
        });
    },
    delete: (req, res) => {
        db.Client.findByIdAndDelete(req.params.client_id, (err, deletedClient) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, Please try again'
            })
            res.status(200).json({
                status: 200,
                data: deletedClient,
                requestedAt: new Date().toLocaleString()
            })
        })
    }
}