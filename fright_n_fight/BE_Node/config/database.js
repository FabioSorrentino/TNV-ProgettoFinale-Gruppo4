import { Sequelize } from "sequelize";
 
const db = new Sequelize({
    database: 'moviefavourites',
    username: 'root',
    password: '',
    host: 'localhost',
    port: 3306,                 //Modify if Necessary
    dialect: 'mysql'
});
 
export default db;