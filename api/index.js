import server from './src/app.js'
import sequelize from './src/db/db.js';
import axios from 'axios';


 sequelize.sync({ force: true }).then(() => {
   server.listen(3001, () => {
     console.log('%s listening at 3001');

    async function chargeDB(){
      await axios.get('http://localhost:3001/');
    }
    chargeDB();
    
   });
 }).catch(e => console.log(e));
