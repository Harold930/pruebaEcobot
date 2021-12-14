import express from 'express';
import Producto from '../models/Producto.js'
const router = express.Router();

//---------------Ruta para obtener todos los productos o para obtenerlos según su categoría-----------------------------

router.get('/', async (req,res) => {
//  console.log(Producto)
try {
    const categoria = req.query.categoria;
    // console.log(categoria,'<<<<<----soy la cateogria qeu llega al endpoint');
    if(!categoria){
        // console.log('Entro a la opcion de que no hay categoria')
        const productos = await Producto.findAll();
        // console.log(productos)
        res.send(productos);
    } else {
        const productos = await Producto.findAll({
            where : {
                categoria: categoria
            }
        });
        if(productos.length === 0){
            res.send({msg:'Sin resultados'})
        }
        res.send(productos);

    }

} catch (error) {
    console.log(error );
    res.status(404);
}

});

//----------------Ruta para eliminar y cambiar el estado del producto-------------------------------------------

router.put('/eliminar-producto/:id', async (req,res)  => {
    
    try {  
        const { id } = req.params;
        console.log(id);

        await Producto.update({
            estado: false
        },
        {
            where: { id: id }
        });
        
        res.send({msg:'Cambio de estado exitoso'});

    } catch (error) {
        console.log(error );
        res.status(404);
    }
});

//------------------------Ruta para editar el producto------------------------------------------------

router.put('/editar-producto/:id', async (req,res)  => {
    
    try {  
        const { id } = req.params;
        const { nombre, categoria, sabor, precio } = req.body;

        console.log(req.body,'<<----- soy el formulario');
        console.log(id);
        
        const producto = await Producto.findByPk(id);

        if(producto.estado){
            await Producto.update({
                nombre: nombre,
                categoria: categoria,
                sabor: sabor,
                precio: precio
            },
            {
                where: { id: id }
            });
        
        res.send({msg:'Producto editado exitosamente.'});
        } else {
        res.send({msg:'No existe el producto.'});
        }


    } catch (error) {
        console.log(error);
        res.status(404);
    }
});

//------------------------Ruta para crear nuevos productos-------------------------------------------

router.post('/crear-producto', async (req,res)  => {
    try {
        const { nombre, categoria, sabor, precio } = req.body;
        if(nombre && categoria && sabor && precio){

            const productoNuevo = await Producto.create({
                nombre: nombre,
                categoria: categoria,
                sabor: sabor,
                precio: precio
            });
            
            res.send(productoNuevo);
        } else {
            res.send({msg: 'Datos faltantes'})
        }

    } catch (error) {
        console.log(error);
        res.status(404);
    }
});


module.exports = router;