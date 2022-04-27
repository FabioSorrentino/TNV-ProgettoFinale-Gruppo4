import { Sequelize } from "sequelize";
 
const db = new Sequelize({
    database: 'tnv',
    username: 'root',
    password: '',
    host: 'localhost',
    port: 3306,                 //Modify if Necessary
    dialect: 'mysql'
});

/*const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'localhost', 
     user:'root', 
     password: '',
     connectionLimit: 5,
     port: 3306
});
async function asyncFunction() {
  let conn;
  try {
	conn = await pool.getConnection();
	const rows = await conn.query("SELECT 1 as val");
	console.log(rows); //[ {val: 1}, meta: ... ]
	const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
	console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

  } catch (err) {
	throw err;
  } finally {
	if (conn) return conn.end();
  }
}*/
 
export default db;