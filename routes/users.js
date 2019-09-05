const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

router.get('/:id', authRequired, ctrl.users.show);
// router.get('/:user_id/clients', ctrl.users.getUserClient)

module.exports = router;