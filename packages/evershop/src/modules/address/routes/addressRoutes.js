// const express = require('express');
// const router = express.Router();
// const { list, view, edit } = require('../controllers/addressController');
// const { addRoute } = require('@evershop/evershop/src/lib/router/Router');

// router.get('/addressGrid', list);
// router.get('/addressView/:address_form_id', view);
// router.get('/addressEdit/:address_form_id', edit);

// // Register routes in Router instance
// addRoute({ id: 'addressGrid', path: '/api/addressGrid' });
// addRoute({ id: 'addressView', path: '/api/addressView/:address_form_id' });
// addRoute({ id: 'addressEdit', path: '/api/addressEdit/:address_form_id' });

// module.exports = router;


const express = require('express');
const router = express.Router();

// Define your route handlers
router.get('/addressGrid', (req, res) => {
  // Your route logic here
  res.send('Address Grid');
});

module.exports = router;
