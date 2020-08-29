//Arreglos en Javascript

//const arreglo = new Array( 100 );
const arreglo = [1,2,3,4];

//OJO Para agregar valores a un arreglo no usar push sino spread
//arreglo.push(1)
//arreglo.push(2)
//arreglo.push(3)
//arreglo.push(4)

let arreglo2 = [...arreglo,5]

const arreglo3 = arreglo2.map(function(number) {
    return number*2;
})

console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)