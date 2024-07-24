// D:\solarissss-master\packages\evershop\src\modules\address\routes\addressRoutes.js

const { Router } = require('express');
const { addressGridHandler, addressViewHandler, addressEditHandler } = require('../handlers/addressHandlers');

const router = Router();

// router.get('/addressGrid', addressGridHandler);
router.get('/addressView/:address_form_id', addressViewHandler);
router.get('/addressEdit/:address_form_id', addressEditHandler);

module.exports = router;
