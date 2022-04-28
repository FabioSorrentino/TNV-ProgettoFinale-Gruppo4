import db from "../config/database.js";
import { Sequelize } from "sequelize"; 

const { DataTypes } = Sequelize;
const FavouriteMovie = db.define('favourites', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }, 
  movie_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  freezeTableName: true
});

export default FavouriteMovie;