/*
 * Import Module
 ****************/
const Movies = require('../database/models/movies'),
    paginator = require('./pagination/paginator')

/*
 * Controller
 *************/
module.exports = {

    // Method Get pour recevoir les datas
    get: async(req, res) => {

        const success = req.session.success, // Message Succes
            error = req.session.error // Message Error

        req.session.success = undefined
        req.session.error = undefined

        // Nombre d'item par page
        var perPage = 20

        // La page que l'on veux récupéré si il y a en pas alors page 1
        var page = req.query.page || 1
        var arrayPagesIndexes = []

        Movies
            .find()
            // Ici On viens chercher l'index qui nous interesse
            .skip((perPage * page) - perPage)
            // Ici on limite le nombre de résultat
            .limit(perPage) // Limitattion des résultat par page
            .lean() // Permet de lire les datas
            .sort('-annee') // Trie par date de sortie
            .exec((err, data) => { // Execute la requete
                Movies.countDocuments() // Compte le nombre de résultats
                    .exec((err, count) => {

                        var allPagesNumber = Math.ceil(count / perPage)
                            // On fait une boucle sur le nombre total de page
                        for (i = 0; i < allPagesNumber; i++) {
                            // On push nos index dans le tableau
                            arrayPagesIndexes.push(i + 1)
                        }

                        // Function de pagination de page
                        const prelinks = "/",
                            pagination = paginator(page, perPage, count, prelinks) // Function paginator

                        if (success || error) {
                            res.render('index', {
                                title: 'Exercice 2 - Les filmes',
                                content: "Exercice 2 sur des vidéos",
                                // Page sur la quel on est : Number
                                current: page,
                                // Nombre de pages : Number
                                pages: Math.ceil(count / perPage),
                                // tableau avec les index des page: []
                                arrayPage: arrayPagesIndexes,
                                // Les filmes : [{}]
                                moviesAll: data,
                                moviesAllCount: count,
                                // Pages - 1
                                previous: parseInt(page) - 1,
                                // Pages + 1
                                next: parseInt(page) + 1,
                                pagination,
                                success: success,
                                error: error,
                            })

                        } else {
                            res.render('index', {
                                title: 'Exercice 2 - Les filmes',
                                content: "Exercice 2 sur des vidéos",
                                // Page sur la quel on est : Number
                                current: page,
                                // Nombre de pages : Number
                                pages: Math.ceil(count / perPage),
                                // tableau avec les index des page: []
                                arrayPage: arrayPagesIndexes,
                                // Les filmes : [{}]
                                moviesAll: data,
                                moviesAllCount: count,
                                // Pages - 1
                                previous: parseInt(page) - 1,
                                // Pages + 1
                                next: parseInt(page) + 1,
                                pagination,
                                error: error,
                            })
                        }

                    })

            })

    },

    // Method Post pour envoyer les datas via la méthode post
    postOrderDate: async(req, res) => {

        // On déclare une constante query
        const query = {
            annee: req.body.orderDate
        }

        const movies = await Movies
            .find(query)
            .lean()
            .sort('-annee') // Trie par date de sortie
            .sort('-nbre_de_prets') // Trie par nombre de prêt
            .limit(100)

        if (movies === []) {
            res.json({
                'movies': {
                    'titre': 'Pas de résultat',
                    'auteur': 'Pas de résultat',
                    'editeur': 'Pas de résultat',
                    'annee': 'Pas de résultat',
                    'nbre_de_prets': 'Pas de résultat',
                    'cat_1': 'Pas de résultat',
                    'cat_2': 'Pas de résultat'
                }
            })
        } else {
            res.json({ 'movies': movies })
        }

    },

    // Method Get pour recevoir les datas
    mostRented: async(req, res) => {

        const movies = await Movies
            .find()
            .lean()
            .sort('-nbre_de_prets') // Trie par nombre de prêt
            .limit(100)

        if (movies === null) {
            res.json({
                'movies': {
                    'titre': 'Pas de résultat',
                    'auteur': 'Pas de résultat',
                    'editeur': 'Pas de résultat',
                    'annee': 'Pas de résultat',
                    'nbre_de_prets': 'Pas de résultat',
                    'cat_1': 'Pas de résultat',
                    'cat_2': 'Pas de résultat'
                }
            })
        } else {
            res.json({ 'movies': movies })
        }

    },

    // Method Post pour envoyer les datas via la méthode post
    postOrderDateOne: async(req, res) => {
        // On déclare une constante query
        const query = {
            annee: req.body.orderDateOne
        }

        const movies = await Movies
            .findOne(query)
            .lean()
            .sort('-annee') // Trie par date de sortie
            .sort('-nbre_de_prets') // Trie par nombre de prêt

        if (movies === null) {
            res.json({
                'movies': {
                    'titre': 'Pas de résultat',
                    'auteur': 'Pas de résultat',
                    'editeur': 'Pas de résultat',
                    'annee': 'Pas de résultat',
                    'nbre_de_prets': 'Pas de résultat',
                    'cat_1': 'Pas de résultat',
                    'cat_2': 'Pas de résultat'
                }
            })
        } else {
            res.json({ 'movies': movies })
        }

    },

    // Method Post pour envoyer les datas via la méthode post
    mostRentedOne: async(req, res) => {

        const movies = await Movies
            .findOne()
            .lean()
            .sort('-nbre_de_prets') // Trie par nombre de prêt

        if (movies === null) {
            res.json({
                'movies': {
                    'titre': 'Pas de résultat',
                    'auteur': 'Pas de résultat',
                    'editeur': 'Pas de résultat',
                    'annee': 'Pas de résultat',
                    'nbre_de_prets': 'Pas de résultat',
                    'cat_1': 'Pas de résultat',
                    'cat_2': 'Pas de résultat'
                }
            })
        } else {
            res.json({ 'movies': movies })
        }

    },

    // Method Post pour envoyer les datas via la méthode post
    postAuthorRentedOne: async(req, res) => {

        // On déclare une constante query
        const query = {
            auteur: req.body.authorRentedOne
        }

        const movies = await Movies
            .findOne(query)
            .lean()
            .sort('-nbre_de_prets') // Trie par nombre de prêt

        if (movies === null) {
            res.json({
                'movies': {
                    'titre': 'Pas de résultat',
                    'auteur': 'Pas de résultat',
                    'editeur': 'Pas de résultat',
                    'annee': 'Pas de résultat',
                    'nbre_de_prets': 'Pas de résultat',
                    'cat_1': 'Pas de résultat',
                    'cat_2': 'Pas de résultat'
                }
            })
        } else {
            res.json({ 'movies': movies })
        }

    },

    // Method Post pour envoyer les datas via la méthode post
    postSearchTitle: async(req, res) => {

        Movies
            .find({ "titre": { $regex: req.body.searchTitle, $options: 'i' } },
                function(err, movies) {
                    if (err) return handleError(err);

                    res.json({ 'movies': movies })

                })
            .lean()
            .limit(100)
            .sort('-nbre_de_prets') // Trie par nombre de prêt

    },

    // Method Post pour envoyer les datas via la méthode post
    moviesAdd: async(req, res) => {

        // Permet de récupérer toute la requète body (Formulaire) et de crée les datas dans le model movies
        Movies
            .create({
                ...req.body
            }, (err) => {
                if (err) {
                    req.flash('error', 'Une erreur est survenue !')
                    req.session.error = req.flash('error')

                    res.redirect('/')
                } else {
                    req.flash('success', "Le film à été ajouté !")
                    req.session.success = req.flash('success')

                    res.redirect('/')
                }

            })
    },

    // Method Get pour recevoir les datas
    moviesDelete: async(req, res) => {

        const id = req.params.id

        // Permet de supprimer un élément par id
        Movies
            .deleteOne({ _id: id }, (err) => {

                if (err) {
                    req.flash('error', 'Une erreur est survenue !')
                    req.session.error = req.flash('error')

                    res.redirect('/')
                } else {
                    req.flash('success', "Le film à été supprimer !")
                    req.session.success = req.flash('success')

                    res.redirect('/')
                }

            })
    }

}