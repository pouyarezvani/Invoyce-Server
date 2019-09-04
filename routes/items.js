const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// Endpoint : 'api/v1/items'

//Invoice Routes
router.get('/:item_id', ctrl.items.show);
router.get('/', ctrl.items.index);
router.put('/:item_id', ctrl.items.update);
router.delete('/:item_id', ctrl.items.delete);
router.post('/', ctrl.items.create);

module.exports = router;