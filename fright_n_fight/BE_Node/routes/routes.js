import express from "express";

import {
    getAllFavouriteMoviesByUserId,
    createFavouriteMovie,
    updateFavouriteMovie,
    deleteFavouriteMovie,
    getFavMoviesbyUserIdMovieId,
    getPrefMovieById,
    allFavouriteMovies
} from "../controllers/fav_film-controller.js";


const router = express.Router();

router.get('/favourites', allFavouriteMovies);
router.get('/favourites/:user_id', getAllFavouriteMoviesByUserId);
router.get('/favourites/:id', getPrefMovieById);
router.get('/favourites/:user_id/:movie_id', getFavMoviesbyUserIdMovieId);
router.post('/favourites', createFavouriteMovie);
router.put('/favourites/:id', updateFavouriteMovie);
router.delete('/favourites/:id', deleteFavouriteMovie);

export default router;