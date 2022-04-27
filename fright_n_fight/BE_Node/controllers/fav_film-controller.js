import FavouriteMovie from "../model/film.js";

/*CRUD Logic*/

export const allFavouriteMovies = async (req, res) => {
    try {
        const favMovies = await FavouriteMovie.findAll(); 
        res.send(favMovies);
    } catch (err) {
        console.log(err);
    }
}

export const getAllFavouriteMoviesByUserId = async (req, res) => {
    try {
        const favMovies = await FavouriteMovie.findAll({
            where: {
                user_id: req.params.user_id
            }
        });
            res.send(favMovies);
    } catch (err) {
        console.log(err);
    }
}

export const createFavouriteMovie = async (req, res) => {
    try {
        const favMovie = await FavouriteMovie.create(req.body);
        res.json({
            "message": "Movie added to Favourites!",
            "data" : favMovie
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const getPrefMovieById = async (req, res) => {
    try {
        const favMovie = await FavouriteMovie.findOne({
            where: {
                id: req.params.id
            }
        });
        
        if (favMovie) {
            res.send(favMovie);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const updateFavouriteMovie = async (req, res) => {
    try {
        await FavouriteMovie.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Movie modified with success!"
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const getFavMoviesbyUserIdMovieId = async (req, res) => {
    try {
        const favMovies = await FavouriteMovie.findOne({
            where : {
                user_id : req.params.user_id,
                movie_id : req.params.movie_id
            }
        });
        res.send(favMovies);
    } catch (err) {
        console.log(err);
    }
}

export const deleteFavouriteMovie = async (req, res) => {
    try {
        await FavouriteMovie.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Favourite film deleted!"
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}