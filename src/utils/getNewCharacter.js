const getCharacterAPI = require('../services/getCharacterAPI.js')

async function getNewCharacter (id) {
  const API_RESULT = await getCharacterAPI(id)
  const newCharacter = {
    id: API_RESULT.id,
    name: API_RESULT.name,
    status: API_RESULT.status,
    species: API_RESULT.species,
    gender: API_RESULT.gender,
    origin: API_RESULT.origin.name,
    location: API_RESULT.location.name,
    image: API_RESULT.image,
    favorite: false
  }
  return newCharacter
}

module.exports = getNewCharacter
