const express = require ('express')
const app = express()
const charactersCtrl = require ('./controllers/charactersController')
const listCtrl = require ('./controllers/listControllers')

const SERVER_PORT = 4444

app.use(express.json())

app.get('/api/characters', charactersCtrl.getAllCharacters)
app.get('/api/characters', charactersCtrl.searchCharacters)
app.post('/api/characters', charactersCtrl.addCharacter)
app.put('/api/characters', listCtrl.editCharacter)
app.delete('/api/characters', listCtrl.deleteCharacter)

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port: ${SERVER_PORT}`)
})