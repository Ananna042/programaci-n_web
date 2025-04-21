//lenguaje de programacion de

//variable
var miVariable = "hola soy una varianle con var"; //no se usa
let miVariable2 = "variable con let"; //solo vive en el scope de clarado
const miVariable3 = "constante no cambian los valores";

const hola = "hola fede";
console.log(hola); //es el equivalente a print

//funciones
function myFunction(variable) {
  //la funcion tienen una declaracion
  //en los parentesis van los parametros
  console.log(variable);
  return variable; // en  general las funciones van a retornar algo
}
//funcion flecha
const myArrowFunction = (variable) => variable; // no usamos este sino q el anterior xq esto devuelve un retorno inplicito

//ejecucion de una funcion
myFunction(8);

const variable = true;
//condiconal con if
if (variable) {
    console.log(true);
} else{
    console.log(false);
}

//condicional ternario sirve solo para 2 clausulas

variable ? console.log(true) : console.log(false);

//arreglos o arrays
//son listas de pyhton

const arr =  [1,true,"hola q onda", 0, 1, 2]

console.log(`la posicion 1 del arreglo es, ${arr[1]}`);

//obejtos
//los objetos son como los diccionarios de python
const objeto = {
    clave: "valor",
};
//los obejtps estan compuestos x clave valor
//accedemos al valor de la clave x medio del punto
console.log(objeto.clave)

