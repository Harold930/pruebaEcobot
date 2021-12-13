const { Router } = require('express');
const router = Router();
const chargeDB = require('./chargeDatabase.js');
const productos = require('./productos.js');


router.use('/', chargeDB);
router.use('/productos', productos);


module.exports = router;