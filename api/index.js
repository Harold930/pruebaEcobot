import server from './src/app.js'
import sequelize from './src/db/db.js';

 sequelize.sync({ force: true }).then(() => {
   server.listen(3001, () => {
     console.log('%s listening at 3001');
   });
 }).catch(e => console.log(e));
