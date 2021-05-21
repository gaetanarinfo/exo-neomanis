// Constante ID pour le formulaire
const form = document.getElementById('search_form_date'),
    orderDate = document.getElementById('orderDate'),
    submitDate = document.getElementById('submitDate'),
    formOne = document.getElementById('search_form_date_one'),
    orderDateOne = document.getElementById('orderDateOne'),
    submitDateOne = document.getElementById('submitDateOne'),
    rented = document.getElementById('rented'),
    clear = document.getElementById('clear'),
    clearDateOne = document.getElementById('clearDateOne'),
    rentedOne = document.getElementById('rentedOne'),
    formAuthorOne = document.getElementById('search_form_author_one'),
    authorRentedOne = document.getElementById('authorRentedOne'),
    submitAuthorRentedOne = document.getElementById('submitAuthorRentedOne'),
    formSearchTitle = document.getElementById('search_form_title'),
    searchTitle = document.getElementById('searchTitle'),
    submitSearchTitle = document.getElementById('submitSearchTitle'),
    date = '2021'

// Constante ID des tables
const tableA = document.getElementById('tableA'),
    tableB = document.getElementById('tableB'),
    tableBB = document.getElementById('tableBB')

const tableC = document.getElementById('tableC'),
    tableCC = document.getElementById('tableCC')

const tableD = document.getElementById('tableD'),
    tableDD = document.getElementById('tableDD')

const tableE = document.getElementById('tableE'),
    tableEE = document.getElementById('tableEE')

const tableF = document.getElementById('tableF'),
    tableFF = document.getElementById('tableFF')

const tableG = document.getElementById('tableG'),
    tableGG = document.getElementById('tableGG')

// Function qui permet le trie des 100 meilleurs filmes par date de sortie.
form.addEventListener('submit', function(e) {

    // On ne recharge pas le formulaire
    e.preventDefault();

    // Récupération Url du formulaire && Récupération de la valeur du champ
    const url = this.getAttribute('action')

    fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({
            orderDate: orderDate.value
        })
    }).then(res => {
        res.json().then(data => {

            tableA.style.display = 'none'
            tableB.style.display = 'block'
            tableC.style.display = 'none'
            tableD.style.display = 'none'
            tableE.style.display = 'none'
            tableF.style.display = 'none'
            tableG.style.display = 'none'

            data.movies.forEach(e => {
                tableBB.innerHTML += `
                    <tr>
                        <td>
                            ${e.titre}
                        </td>
                        <td>
                            ${e.auteur}
                        </td>
                        <td>
                            ${e.editeur}
                        </td>
                        <td>
                            ${e.annee}
                        </td>
                        <td>
                            ${e.nbre_de_prets}
                        </td>
                        <td>
                            ${e.cat_1}
                        </td>
                        <td>
                            ${e.cat_2}
                        </td>
                    </tr>
                    `
            });

        })

    }).catch(error => {
        alert("Erreur : " + error)
    })
})

// Function qui permet de trier les 100 meilleurs film louer
function orderByRented() {

    const url = '/movies/mostRented'

    fetch(url, {}).then(res => {
        res.json().then(data => {

                tableA.style.display = 'none'
                tableB.style.display = 'none'
                tableC.style.display = 'block'
                tableD.style.display = 'none'
                tableE.style.display = 'none'
                tableF.style.display = 'none'
                tableG.style.display = 'none'

                data.movies.forEach(e => {
                    tableCC.innerHTML += `
                    <tr>
                        <td>
                            ${e.titre}
                        </td>
                        <td>
                            ${e.auteur}
                        </td>
                        <td>
                            ${e.editeur}
                        </td>
                        <td>
                            ${e.annee}
                        </td>
                        <td>
                            ${e.nbre_de_prets}
                        </td>
                        <td>
                            ${e.cat_1}
                        </td>
                        <td>
                            ${e.cat_2}
                        </td>
                        <td>
                            <a href="/movies/delete/${e._id}" class="btn btn-danger"><i class="fas fa-trash m-1"></i></a>
                        </td>
                    </tr>
                    `
                });

                rented.style.display = 'none'
                clear.style.display = 'block'

            })
            .catch(error => alert("Erreur : " + error));
    })
}

// Function qui permet d'envoyer le formulaire et de recuperer pour une seul date
formOne.addEventListener('submit', function(e) {

    // On ne recharge pas le formulaire
    e.preventDefault();

    // Récupération Url du formulaire && Récupération de la valeur du champ
    const url = this.getAttribute('action')

    fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({
            orderDateOne: orderDateOne.value
        })
    }).then(res => {
        res.json().then(data => {

            const movies = data.movies

            tableA.style.display = 'none'
            tableB.style.display = 'none'
            tableC.style.display = 'none'
            tableD.style.display = 'block'
            tableE.style.display = 'none'
            tableF.style.display = 'none'
            tableG.style.display = 'none'

            tableDD.innerHTML += `
                    <tr>
                        <td>
                            ${movies.titre}
                        </td>
                        <td>
                            ${movies.auteur}
                        </td>
                        <td>
                            ${movies.editeur}
                        </td>
                        <td>
                            ${movies.annee}
                        </td>
                        <td>
                            ${movies.nbre_de_prets}
                        </td>
                        <td>
                            ${movies.cat_1}
                        </td>
                        <td>
                            ${movies.cat_2}
                        </td>
                    </tr>
                    `

        })

    }).catch(error => {
        alert("Erreur : " + error)
    })
})

// Function qui permet de trier le meilleur film louer pour 1 résultat
function orderByRentedOne() {

    const url = '/movies/mostRented/one'

    fetch(url, {}).then(res => {
        res.json().then(data => {

                const movies = data.movies


                tableA.style.display = 'none'
                tableB.style.display = 'none'
                tableC.style.display = 'none'
                tableD.style.display = 'none'
                tableE.style.display = 'block'
                tableF.style.display = 'none'
                tableG.style.display = 'none'

                tableEE.innerHTML += `
                    <tr>
                        <td>
                            ${movies.titre}
                        </td>
                        <td>
                            ${movies.auteur}
                        </td>
                        <td>
                            ${movies.editeur}
                        </td>
                        <td>
                            ${movies.annee}
                        </td>
                        <td>
                            ${movies.nbre_de_prets}
                        </td>
                        <td>
                            ${movies.cat_1}
                        </td>
                        <td>
                            ${movies.cat_2}
                        </td>
                        <td>
                            <a href="/movies/delete/${movies._id}" class="btn btn-danger"><i class="fas fa-trash m-1"></i></a>
                        </td>
                    </tr>
                    `

            })
            .catch(error => alert("Erreur : " + error));
    })
}

// Function qui permet d'envoyer le formulaire et de recuperer pour une seul date
formAuthorOne.addEventListener('submit', function(e) {

    // On ne recharge pas le formulaire
    e.preventDefault();

    // Récupération Url du formulaire && Récupération de la valeur du champ
    const url = this.getAttribute('action')

    fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({
            authorRentedOne: authorRentedOne.value
        })
    }).then(res => {
        res.json().then(data => {

            const movies = data.movies

            tableA.style.display = 'none'
            tableB.style.display = 'none'
            tableC.style.display = 'none'
            tableD.style.display = 'none'
            tableE.style.display = 'none'
            tableF.style.display = 'block'
            tableG.style.display = 'none'

            tableFF.innerHTML += `
                    <tr>
                        <td>
                            ${movies.titre}
                        </td>
                        <td>
                            ${movies.auteur}
                        </td>
                        <td>
                            ${movies.editeur}
                        </td>
                        <td>
                            ${movies.annee}
                        </td>
                        <td>
                            ${movies.nbre_de_prets}
                        </td>
                        <td>
                            ${movies.cat_1}
                        </td>
                        <td>
                            ${movies.cat_2}
                        </td>
                        <td>
                            <a href="/movies/delete/${movies._id}" class="btn btn-danger"><i class="fas fa-trash m-1"></i></a>
                        </td>
                    </tr>
                    `

        })

    }).catch(error => {
        alert("Erreur : " + error)
    })
})

// Function qui permet d'envoyer le formulaire et de trier les filmes par titre
formSearchTitle.addEventListener('submit', function(e) {

    // On ne recharge pas le formulaire
    e.preventDefault();

    // Récupération Url du formulaire && Récupération de la valeur du champ
    const url = this.getAttribute('action')

    fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({
            searchTitle: searchTitle.value
        })
    }).then(res => {
        res.json().then(data => {

            tableA.style.display = 'none'
            tableB.style.display = 'none'
            tableC.style.display = 'none'
            tableD.style.display = 'none'
            tableE.style.display = 'none'
            tableF.style.display = 'none'
            tableG.style.display = 'block'

            tableGG.innerHTM = ''

            data.movies.forEach(e => {
                tableGG.innerHTML += `
                <tr>
                    <td>
                        ${e.titre}
                    </td>
                    <td>
                        ${e.auteur}
                    </td>
                    <td>
                        ${e.editeur}
                    </td>
                    <td>
                        ${e.annee}
                    </td>
                    <td>
                        ${e.nbre_de_prets}
                    </td>
                    <td>
                        ${e.cat_1}
                    </td>
                    <td>
                        ${e.cat_2}
                    </td>
                    <td>
                        <a href="/movies/delete/${e._id}" class="btn btn-danger"><i class="fas fa-trash m-1"></i></a>
                    </td>
                </tr>
                `
            });

        })

    }).catch(error => {
        alert("Erreur : " + error)
    })
})

// Function remis à zéro
clear.addEventListener('click', function(e) {

    e.preventDefault()

    // Table
    tableA.style.display = 'block'
    tableB.style.display = 'none'
    tableC.style.display = 'none'
    tableD.style.display = 'none'
    tableE.style.display = 'none'
    tableF.style.display = 'none'
    tableG.style.display = 'none'

    tableBB.style.innerHTML = ''
    tableCC.style.innerHTML = ''
    tableDD.style.innerHTML = ''
    tableEE.style.innerHTML = ''
    tableFF.style.innerHTML = ''
    tableGG.style.innerHTML = ''

    orderDate.value = date
    orderDateOne.value = date
    rentedOne.value = ''
    authorRentedOne.value = ''
    searchTitle.value = ''

})