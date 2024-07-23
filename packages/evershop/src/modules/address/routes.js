// packages/evershop/src/modules/address/routes.js

const { Router } = require('express');
const addressController = require('./controllers/addressController');

const router = Router();

router.get('/addresses', addressController.list);
router.get('/addresses/:id', addressController.view);
router.get('/addresses/:id/edit', addressController.edit);

module.exports = router;
