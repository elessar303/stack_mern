// Functional Components
//import React, { Fragment } from 'react';
import React from 'react';

const PrimeraApp = () =>{

    // return (
    //     <Fragment>
    //         <h1>Hola Mundo</h1>
    //         <p>Mi primera aplicación</p>
    //     <Fragment/>
    // );

    const saludo = 'Hola Mundo';
    
    return (
        <>
            <h1>{ saludo }</h1>
            {/* <pre>{JSON.stringify(saludo,null,3)}</pre> */}
            <p>Mi primera aplicación</p>
        </>
    );
    
}

export default PrimeraApp;