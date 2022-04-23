import express from "express";

import {
    getFavouriteMovieById,
    createFavouriteMovie,
    updateFavouriteMovie,
    deleteFavouriteMovie,
    allFavouriteMovies
} from "../controllers/fav_film-controller.js";


const router = express.Router();

router.get('/favourites', allFavouriteMovies);
router.get('/favourites/:id', getFavouriteMovieById);
router.post('/favourites', createFavouriteMovie);
router.put('/favourites/:id', updateFavouriteMovie);
router.delete('/favourites/:id', deleteFavouriteMovie);

export default router;