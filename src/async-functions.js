const fetch = require('node-fetch')

const getTatooineResidents = fetch("https://swapi.co/api/planets/1/")

getTatooineResidents
    .then(response => {
        return response.json()
    }).then(json => {

    })