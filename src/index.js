const morgan = require('morgan')
const app = require('./app.js')

const { db } = require('./database/index.js')
const PORT = process.env.PORT || 3001

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.status(200).json({
    getAllCharacters: 'https://rym-backend-production.up.railway.app/character/all/characters',
    charactersbyId: 'https://rym-backend-production.up.railway.app/character/yourId',
    charactersDetail: 'https://rym-backend-production.up.railway.app/character/detail/yourId',
    charactersFavorites: 'https://rym-backend-production.up.railway.app/favorites'
  })
})

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`)
  db.sync()
})
