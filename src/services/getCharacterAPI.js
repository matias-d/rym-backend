const axios = require('axios')

async function getCharacterAPI (id) {
  try {
    const result = await axios(`https://rickandmortyapi.com/api/character/${id}`)
    return await result.data
  } catch (error) {
    console.error(error.message)
  }
}

module.exports = getCharacterAPI
