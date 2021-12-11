const express = require('express');
const router = express.Router();
const {Producto} = require('../models/Producto.js');

router.get('/productos', async (req,res) => {

try {
    const categoria = req.query;
    console.log(categoria),'<<<<<----soy la cateogria qeu llega al endpoint';
    if(!categoria){
        const productos = await Producto.findAll();
        res.send(productos);
    } else {
        const productos = await Producto.findAll({
            where : {
                categoria: categoria
            }
        });
        res.send(productos);
    }

} catch (error) {
    res.status(404).send({errorMsg : error});
}

});

module.exports = router;