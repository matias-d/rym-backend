const { Character, Favorite } = require('../database/index.js')
const getNewCharacter = require('../utils/getNewCharacter.js')

async function getCharacter (req, res) {
  const { characterId } = req.params

  if (isNaN(characterId)) {
    return res.status(400).json({ error: 'No se encontraron parametros o no es valido' })
  }

  if (Number(characterId) > 826) {
    return res.status(400).json({ error: 'No hay mas personajes que buscar!' })
  }

  try {
    const newCharacter = await getNewCharacter(characterId)

    const isCharacterFound = await Character.findOne({
      where: {
        id: characterId
      },
      attributes: ['id', 'name', 'image', 'favorite']
    })

    const isFavoritesFound = await Favorite.findOne({
      where: { id: characterId }, attributes: ['favorite']
    })

    if (isCharacterFound) {
      return res.status(200).json(isCharacterFound)
    }

    if (isFavoritesFound) {
      newCharacter.favorite = true
    }

    // Almaceno el nuevo personaje y lo muestro
    const { id, name, image, favorite } = await Character.create(newCharacter)
    return res.status(200).json({ id, name, image, favorite })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

async function getCharacterDetail (req, res) {
  const { characterId } = req.params

  if (!characterId || isNaN(characterId)) {
    return res.status(400).json({ error: 'No se encontraron parametros o no es valido' })
  }

  if (Number(characterId) > 826) {
    return res.status(400).json({ error: 'No hay mas personajes que buscar!' })
  }

  try {
    const newCharacter = await getNewCharacter(characterId)

    const isCharacterFound = await Character.findOne({
      where: {
        id: characterId
      }
    })

    if (isCharacterFound) {
      return res.status(200).json(isCharacterFound)
    }
    // Almaceno el nuevo personaje y lo muestro
    const result = await Character.create(newCharacter)
    return res.status(200).json(result)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

async function getAllCharacters (req, res) {
  try {
    const result = await Character.findAll()
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

async function deleteCharacter (req, res) {
  const { characterId } = req.params

  if (!characterId || isNaN(characterId)) {
    return res.status(400).json({ error: 'No se encontraron parametros o no es valido' })
  }

  if (Number(characterId) > 826) {
    return res.status(400).json({ error: 'No hay mas personajes que buscar!' })
  }

  try {
    await Character.destroy({
      where: { id: characterId }
    })

    res.status(201).json({ message: 'Personaje Eliminado!' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  getCharacter,
  getCharacterDetail,
  getAllCharacters,
  deleteCharacter
}
