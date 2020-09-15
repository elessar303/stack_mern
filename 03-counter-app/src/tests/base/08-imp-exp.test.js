const { getHeroeById, getHeroesByOwner } = require("../../base/08-imp-exp");
const { default: heroes } = require("../../data/heroes");

describe('Pruebas en funciones de Heroes', () => {
    
    test('Debe de retornar un heroe por id', () => {
        
        const id = 1;
        const heroe = getHeroeById(id)

        const heroeData = heroes.find(h => h.id === id);
        
        expect(heroe).toEqual(heroeData);
    })

    test('Debe de retornar undefined si heroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById(id)
        
        expect(heroe).toBe(undefined);
    })

    test('Debe retornar un arreglo con los heroes de DC', () => {
        
        const owner = 'DC';

        const arrHeroes = getHeroesByOwner(owner)

        const heroesDC = heroes.filter( h => h.owner === owner)
        
        expect(arrHeroes).toEqual(heroesDC)
    })

    test('Debe de retornar un arreglo con los heroes de Marvel', () => {
        
        const heroesMarvel = getHeroesByOwner('Marvel')
        
        expect(heroesMarvel.length).toBe(2);
    })
    
    
})
