
//ls cs, a la carpeta nombre y para ejecutar con node y pomner name del archiv en especifico

const array = [1,2,3,4,5,6]
//metodos
//(valor)push(igual q append de python) ---> agrega un elemento al final del arreglo
arrayNumeros.push(10);
console.log(arrayNumeros[6]);
//pop elimina el ultimo elemento de un arreglo y lo guarda en una variable
const ultimo =arrayNumeros.pop();
console.log("ultimo", ultimo);

console.log(arrayNumeros);

//shift elimina el 1er valor de un arreglo, tmb lo guarda en una variable
const primero = arrayNumeros.shift();
console.log(primero);

//unshift(valor)agrea un elemento al principio del arreglo
arrayNumeros.unshift("anana");
console.log(arrayNumeros);

//map(funcion) crea un nuevo arreglo aplicando una funcion
//a cada elemento

const nuevoArreglo = arrayNumeros.map((item) => {
    console.log(index);
    return item +1;
});
console.log(nuevoArreglo);

// filter crea un nuevo arraycon los elemenots q cumplen la condicion
const pares= arayNumeros.filter((n)=> n %2 ===2);





//forEach solamente recorre un arreglo
//podemoscer item, index y array completo

arrayNumeros.forEach((item, index, array))
