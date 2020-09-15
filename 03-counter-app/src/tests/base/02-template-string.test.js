import '@testing-library/jest-dom'
import { getSaludo } from '../../base/02-template-string'

describe('Prueba en 02-template-string.js', () => {

    test('prueba en el metodo getSaludo', () => {
        
        const nombre = 'Fernando';

        const saludo = getSaludo(nombre);

        expect( saludo ).toBe('Hola '+ nombre)
    })
    
    test('getSaludo debe retornar Hola Junior si no hay argumento nombre', () => {
        
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Junior');
    })
    
})
