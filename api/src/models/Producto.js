import Sequelize from 'sequelize';
import { sequelize} from '../db';

const Producto = sequelize.define('products', {
    
        nombre: {
            type: Sequelize.STRING
        },
        categoria: {
            type: Sequelize.STRING
        },
        sabor: {
            type: Sequelize.STRING
        },
        precio: {
            type: Sequelize.INTEGER
        },
        estado:{
            type: Sequelize.BOOLEAN
        }
});

export default Producto;