const express = require('express')
const { getCharacter, getCharacterDetail, toggleFavorite, deleteCharacter } = require('../controllers/characters.controllers.js')

const router = express.Router()

router
  .get('/:characterId', getCharacter)
  .get('/detail/:characterId', getCharacterDetail)
  .put('/:characterId', toggleFavorite)
  .delete('/:characterId', deleteCharacter)

module.exports = router
