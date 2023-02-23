require('dotenv').config()
const { Sequelize } = require('sequelize')
const { DB_DEPLOY } = process.env
// const { DB_USER, DB_PASSWORD, DB_HOST } = process.env
const modelCharacter = require('../models/Character.js')
const modelFavorites = require('../models/Favorites.js')

// const db = new Sequelize(
//     `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
//     { logging: false, define: { timestamps: false } }
// )

const db = new Sequelize(
  DB_DEPLOY,
  { logging: false, define: { timestamps: false } }
)

// Modelos
modelCharacter(db)
modelFavorites(db)

module.exports = {
  ...db.models,
  db
}
