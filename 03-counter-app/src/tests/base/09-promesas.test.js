const { getHeroeByIdAsync } = require("../../base/09-promesas");
const { default: heroes } = require("../../data/heroes");

describe('Pruebas con promesas', () => {

    test('getHeroesByIdAsync debe retornar un Heroe Async', ( done ) => {
        
        const id = 1;

        getHeroeByIdAsync(id)
        .then( heroe =>{

            expect(heroe).toBe(heroes[0])
            done()

        })
        
    })

    test('Debe obtener error si el heroe no existe', (done) => {

        const id = 10

        getHeroeByIdAsync(id)
        .catch( error =>{

            expect(error).toBe('No se pudo encontrar el héroe')
            done()
 
        })
        
    })
    

})
