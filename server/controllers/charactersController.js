const characters = require('../data.json')

const { filter } = require('../data.json')

let newId = characters[characters.length - 1].id + 1

const character = { id: 0, first_name: "", last_name: "", position: "", birthday: "" }

module.exports = {
    getCharacters: (req, res) => {
        console.log(req.query)
        if (req.query.search) {
            const filteredCharacters = characters.filter(element => element.id == req.query.search || element.first_name === req.query.search || element.last_name === req.query.search || element.position === req.query.search || element.birthday === req.query.search)
            console.log(filteredCharacters)
            res.status(200).send(filteredCharacters)

        } else {
            res.status(200).send(characters)

        }
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