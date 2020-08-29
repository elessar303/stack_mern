//Desestructuración

const persona = {
    nombre : 'Tony',
    edad: 45,
    clave: 'Iron Man',
}

//const { nombre, edad, clave } = persona

//console.log(persona.nombre)
//console.log(persona.edad)
//console.log(persona.clave)

//console.log(nombre)
//console.log(edad)
//console.log(clave)

//const retornaPersona = (usuario) => {
const useContext = ({nombre,clave, edad, rango = 'Capitan'}) => {
    //console.log(usuario)

    //const { edad, clave, nombre} = usuario

    //console.log(edad, clave, nombre)

    return {
        nombreClave :clave,
        anios:edad,
        latlng:{
            lat:14.123654,
            lng: -12.3563
        }
    }
}

const {nombreClave,anios,latlng:{lat,lng}} = useContext(persona)

console.log(nombreClave,anios)
console.log(lat,lng)