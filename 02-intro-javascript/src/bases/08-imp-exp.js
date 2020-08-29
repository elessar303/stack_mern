//import {heroes} from './data/heroes'
//import heroes from './data/heroes'
//import arrHeroes, {owners} from '../data/heroes'

import arrHeroes from '../data/heroes'
//const { heroes } = require("./data/heroes")
//console.log(arrHeroes)
//console.log(owners)

const getHeroeById = (id) => {
    return arrHeroes.find( (heroe) => heroe.id === id)
}

//console.log( getHeroeById(2))

//Tarea filter
const getHeroesByOwner = (owner) => arrHeroes.filter( (heroe) => heroe.owner === owner)

//console.log( getHeroesByOwner('DC') )
//console.log( getHeroesByOwner('Marvel') )

export {
    getHeroeById,
    getHeroesByOwner
};