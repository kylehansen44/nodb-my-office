const characters = require ('../data.json')

const { filter } = require ('../data.json')

let newId = characters[characters.length - 1].id + 1

const character = { id: 0, first_name: "", last_name: "", position: "", birthday: ""}

module.exports = {
    getAllCharacters: (req, res) => {
        console.log('hit get all character')
        res.status(200).send(characters)
    },
    searchCharacters: (req, res) => {
        const { id } = req.params
        const { first_name, last_name, position, birthday } = req.body
        const { input } = req.query

        const filteredCharacter = characters.filter(element => input === id || input === first_name)

        console.log(filteredCharacter)
        res.status(200).send(filteredCharacter)
    },
    addCharacter: (req, res) => {
        console.log(req.body)
    const { first_name, last_name, position, birthday } = req.body

    const newCharacter = {
      id: newId,
      first_name,
      last_name,
      position,
      birthday
    }

    characters.push(newCharacter)

    newId++

    res.status(200).send(characters)
    }
}