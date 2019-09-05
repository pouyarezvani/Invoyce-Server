const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// Endpoint : 'api/v1/clients'

//Clients Routes
router.get('/:client_id', ctrl.clients.show);
router.get('/', ctrl.clients.index);
router.put('/:client_id', ctrl.clients.update);
router.delete('/:client_id', ctrl.clients.delete);
router.post('/', ctrl.clients.create);



module.exports = router;