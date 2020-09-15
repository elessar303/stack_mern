import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 10}) =>{

    //Hook
    const [counter, setCounter] = useState(value);
   
    //HandleAdd
    const handleAdd = (e) =>{
        setCounter(counter + 1)
        //setCounter( (c) => c+1)
    }

    //handleSubstract
    const handleSubstract = (e) =>{
        setCounter(counter - 1)
    }

    //handleReset
    const handleReset = () => setCounter(value)

    return(
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value:PropTypes.number
}

export default CounterApp