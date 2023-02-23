const morgan = require('morgan')
const app = require('./app.js')
const cors = require('cors')
const { db } = require('./database/index.js')
const PORT = process.env.PORT || 3001

app.use(morgan('dev'))
app.use(cors())
app.get('/', (req, res) => {
  res.status(200).json({
    charactersbyId: 'http://localhost:3001/character/1',
    charactersDetail: 'http://localhost:3001/character/detail/1',
    charactersFavorites: 'http://localhost:3001/characters/favorites'
  })
})

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`)
  db.sync()
})
