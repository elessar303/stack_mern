const persona = {
    nombre:'Junior',
    apellido:'Ayala',
    edad:32,
    direccion:{
        ciudad:'CABA',
        zip:1040,
        lat: 1545.5566,
        lng: 34.5695528
    }
}

//console.table( persona )

//OJO importante!! Copiar un objeto
const persona2 = {...persona}
persona2.nombre = 'Peter'

console.log( persona )
console.log( persona2 )