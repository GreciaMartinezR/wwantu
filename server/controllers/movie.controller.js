const { Movie } = require('../models/movie.model');

    // Método para obtener lista
module.exports.getAllMovies = (request, response) => {
    Movie.find({})
        .then(pirate => response.json(pirate))
        .catch(err => response.json(err))
    }


    //Método para ver detalles
module.exports.getMovie = (request, response) => {
    Movie.findOne({_id:request.params.id})
        .then(pirate => response.json(pirate))
        .catch(err => response.json(err))
}