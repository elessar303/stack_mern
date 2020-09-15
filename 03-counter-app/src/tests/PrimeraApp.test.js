import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
import React from 'react';
const { default: PrimeraApp } = require("../PrimeraApp");

describe('Pruebas en <PrimeraApp />', () => {

    /*test('Debe de mostrar el mensaje "Hola, soy Goku"', () => {
        
        const saludo = "Hola, soy Goku";

        //const wrapper = render( <PrimeraApp saludo={ saludo }/> )
        const { getByText } = render( <PrimeraApp saludo={ saludo }/> )

        expect( getByText(saludo) ).toBeInTheDocument();
    })*/

    test('Debe de mostrar el <PrimeraApp /> correctamente', () => {
        
        const saludo = "Hola, soy Goku";
        const wrapper = shallow(<PrimeraApp saludo={ saludo }/>)

        expect( wrapper ).toMatchSnapshot()
    })

    test('Debe de mostrar el subtitulo enviado por props', () => {

        const saludo = "Hola, soy Goku";
        const subtitulo = 'Soy un subtitulo'
        const wrapper = shallow(
                                <PrimeraApp 
                                saludo={ saludo }
                                subtitulo = { subtitulo }
                                />)
        const textoParrafo = wrapper.find('p').text();
        
        expect(textoParrafo).toBe(subtitulo)
        
    })
    
})
