/*
 * Import Module
 ****************/
const mongoose = require('mongoose'),
    Schema = mongoose.Schema

// MongoDb Collection Model Movies
const MoviesShema = new mongoose.Schema({

    annee: String,
    content: String,
    annee: Number,
    nbre_de_prets: String,
    titre: String,
    auteur: String,
    editeur: String,
    indice: String,
    bib: String,
    cote: String,
    cat_1: String,
    cat_2: String

});

// Déclaration du model comment dans mongodb
const Movies = mongoose.model('movies', MoviesShema);

/*
 * Export Module
 ****************/
module.exports = Movies;