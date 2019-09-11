const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// Endpoint : 'api/v1/invoices'

//Invoice Routes
router.get('/:invoice_id', ctrl.invoices.show);
router.get('/', ctrl.invoices.index);
router.get('/user/:user_id', ctrl.invoices.userInvoices);
router.put('/:invoice_id', ctrl.invoices.update);
router.delete('/:invoice_id', ctrl.invoices.delete);
router.post('/', ctrl.invoices.create);

module.exports = router;