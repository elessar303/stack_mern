//Funciones

const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola, Mundo`;

console.log(saludar('Junior'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

const getUser = () => ({
        uuid:'ABD321',
        username:'elessar303'
})

const user = getUser();
console.log(user)

//Tarea 

// 1. Transformar a una funcion de flecha
// 2. Tiene que retornar un objeto implicito

/*
function getUsuarioActivo(nombre) {
    return {
        uuid:'ABC123',
        username:nombre
    }
}
*/

const getUsuarioActivo = (nombre) => ({
    uuid:'ABC123',
    username:nombre
});

const usuarioActivo = getUsuarioActivo('Junior')
console.log(usuarioActivo)