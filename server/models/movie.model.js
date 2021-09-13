const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "El nombre de la película es requerido"]
    },
    released: {
        type: String,
        required: [true, "Fecha de lanzamiento es requerido"]
    },
    director: {
        type: String,
        required: [true, "Nombre del director o directora es requerido"]
    },
    poster: {
        type: String,
        required: [true, "Poster de la película es requerido"]
    },
    plot: {
        type: String,
        required: [true, "Descripción de la película es requerido"]  
    }
}, {timestamps: true});

module.exports.Movie = mongoose.model('Movie', MovieSchema);