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

// DB_USER=postgres
// DB_PASSWORD=Fiubahr20..
// DB_HOST=localhost:5432
// API_URL_TYPE=https://pokeapi.co/api/v2/type
// API_URL=https://pokeapi.co/api/v2/pokemon