const { Favorite } = require('../database/index.js')

async function addFavorite (req, res) {
  const { id, name, image, favorite, status, gender, species } = req.body

  if (!id || !name || !image || !favorite || !status || !gender || !species) {
    return res.status(400).json({ error: 'No estan los datos requeridos!' })
  }

  try {
    const newFavorite = {
      id,
      name,
      image,
      status,
      gender,
      species,
      favorite
    }

    const result = await Favorite.create(newFavorite)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

async function getFavorites (req, res) {
  const { status, species, gender } = req.query

  const where = {}

  if (status) where.status = status
  if (species) where.species = species
  if (gender) where.gender = gender

  try {
    const result = await Favorite.findAll({
      where
    })

    res.status(200).json(result)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

async function deleteFavorite (req, res) {
  const { favoriteId } = req.params

  if (!favoriteId || isNaN(favoriteId)) {
    return res.status(400).json({ error: 'Parametros no encontrados o no cumplen con lso requisitos!' })
  }

  if (Number(favoriteId) > 826) {
    return res.status(400).json({ error: 'No hay personajes que mostrar!' })
  }

  try {
    await Favorite.destroy({ where: { id: favoriteId } })

    res.status(200).json({ message: 'Personaje eliminado de favoritos!' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  addFavorite,
  getFavorites,
  deleteFavorite

}
