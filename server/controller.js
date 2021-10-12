
const houses = require("./db.json")
let houseId = 4

module.exports = {
    getAllHouses: (req, res) => {
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        console.log(req.body)
        const {adress, price, imageURL} = req.body
        const newHouse = {
            adress,
            price,
            imageURL,
            id: houseId
        }

        houses.push(newHouse)
        res.status(200).send(houses)
        houseId++
    },
    updateHouse: (req, res) => {
        const {id} = req.params
        const {type} = req.body

        let index = houses.findIndex(elem => elem.id === +id)

        if (type === "plus"){
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if (type === "minus"){
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else {
            res.status(400).send("Something went wrong")
        }

        res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {
        // const {id} = req.params

        let index = houses.findIndex(elem => elem.id === +req.params.id)

        houses.splice(index, 1)

        res.status(200).send(houses)
    },
}