/*
 * Import Module
 ****************/
const express = require('express'), // Package express
    router = express.Router() // Constante pour les routes

// Module express pour faire fonctionné l'aplication
const app = express()

// Import Controller
const homeController = require('./homeController'); // Controller home

// Routes Home
router.route('/')
    .get(homeController.get)

// Routes Order By Date
router.route('/movies/date')
    .post(homeController.postOrderDate)

// Routes qui sort 100 résultats par date et pour le meilleur film
router.route('/movies/mostRented')
    .get(homeController.mostRented)

// Routes qui sort 1 résultat par date et pour le meilleur film
router.route('/movies/date/one')
    .post(homeController.postOrderDateOne)

// Routes qui sort 1 résultat pour le meilleur film
router.route('/movies/mostRented/one')
    .get(homeController.mostRentedOne)

// Routes qui sort 1 résultat pour l'autheur et le meilleur film
router.route('/movies/authorRentedOne')
    .post(homeController.postAuthorRentedOne)

// Routes qui permet de recherche par titre de film
router.route('/movies/search/title')
    .post(homeController.postSearchTitle)

// Routes qui permet d'ajouter un film à la db
router.route('/movies/add')
    .post(homeController.moviesAdd)

// Routes qui permet de supprimer un film à la db
router.route('/movies/delete/:id')
    .get(homeController.moviesDelete)

/*
 * Export Module
 ****************/
module.exports = router