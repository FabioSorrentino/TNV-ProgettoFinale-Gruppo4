import express from "express";
import cors from "cors";
import db from "./config/database.js";
import router from "./routes/routes.js";
 
const app = express();
app.use(express.json());
app.use(cors());

 
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
 
app.use(router);

app.listen(3001, () => console.log('Server running at http://localhost:3001'));