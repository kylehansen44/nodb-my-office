let characters = require ('../data.json')

let character = { id: 0, first_name: "", last_name: "", position: "", birthday: ""}

module.exports = {
    editCharacter: (req, res) => {
    const { first_name, last_name, position, birthday } = req.body

    const existingCharacter = characters

    let modifiedCharacter = {
      id: existingCharacter.id,
      first_name: first_name || existingCharacter.first_name,
      last_name: last_name || existingCharacter.last_name,
      position: position || existingCharacter.position,
      birthday: birthday || existingCharacter.birthday
    }

    characters = modifiedCharacter

    res.status(200).send(characters)
    },
    deleteCharacter: (req, res) => {
        character.first_name = ""
        character.last_name = ""
        character.position = ""
        character.birthday = ""

        res.status(200).send(character)
    },
}