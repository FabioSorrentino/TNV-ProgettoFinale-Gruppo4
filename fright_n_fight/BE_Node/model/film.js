import db from "../config/database.js";
import { Sequelize } from "sequelize"; 

const { DataTypes } = Sequelize;
const FavouriteMovie = db.define('favourites', {
  user_id: {
    type: DataTypes.INTEGER
  }, 
  movie_id: {
    type: DataTypes.INTEGER
  }, 
}, {
  freezeTableName: true
});

 
export default FavouriteMovie;