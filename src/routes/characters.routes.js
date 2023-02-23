const express = require('express')
const { getCharacter, getAllCharacters, getCharacterDetail, deleteCharacter } = require('../controllers/characters.controllers.js')

const router = express.Router()

router
  .get('/:characterId', getCharacter)
  .get('/all/characters', getAllCharacters)
  .get('/detail/:characterId', getCharacterDetail)
  .delete('/:characterId', deleteCharacter)

module.exports = router
