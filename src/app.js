
const cors = require('cors')
const express = require('express')
const app = express()
const routesCharacter = require('./routes/characters.routes.js')
const routesFavorite = require('./routes/favorites.routes.js')

app.use(cors())
app.use(express.json())

app.use('/character', routesCharacter)
app.use('/favorites', routesFavorite)

module.exports = app
