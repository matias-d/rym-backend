const express = require('express')
const { addFavorite, getFavorites, deleteFavorite } = require('../controllers/favorites.controllers.js')

const router = express.Router()

router
  .get('/', getFavorites)
  .post('/', addFavorite)
  .delete('/:favoriteId', deleteFavorite)

module.exports = router
