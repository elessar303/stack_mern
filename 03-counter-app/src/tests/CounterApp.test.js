import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
import React from 'react';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach( () =>{
        wrapper = shallow(<CounterApp />);
    })

    test('Debe de mostrar el <CounterApp /> correctamente', () => {

        expect( wrapper ).toMatchSnapshot()

    })

    test('Debe de mostrar el valor por defecto de 100', () => {

        const wrapper = shallow( <CounterApp value={100} />)
        const valueCounter = wrapper.find('h2').text();
        
        expect(Number(valueCounter)).toBe(100);
        
    })

    test('Debe de incrementar con el boton de +1', () => {
        
        wrapper.find('button').at(0).simulate('click');
        const valueCounter = wrapper.find('h2').text();
        expect(Number(valueCounter)).toBe(11);
    })

    test('Debe de decrementar con el boton de -1', () => {
        
        wrapper.find('button').at(2).simulate('click');
        const valueCounter = wrapper.find('h2').text();
        expect(Number(valueCounter)).toBe(9);
    })

    test('Debe de colocar el valor por defecto con el boton reset', () => {
        
        const wrapper = shallow( <CounterApp value={105} />)

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const valueCounter = wrapper.find('h2').text();

        expect(Number(valueCounter)).toBe(105);

    })
    
    
  
})
