import express from 'express';
import db from '../db/db.json';
import Producto from '../models/Producto';

const router = express.Router();

router.get('/', async (req,res) =>{
    try {

        const productosCreados = await Producto.bulkCreate(db);

        if(productosCreados){
            console.log('Base de datos cargada exitosamente');
            res.send('Base de datos cargada exitosamente')
        } else {
            console.log(productosCreados);
            console.log('algo pasó');
        }

    } catch (error) {
        console.log(error);
    }

});

module.exports = router;