//setTimeout()
//recibe x parametros una funcion y un valor númerico en 

const button = document.getElementById("boton");
button.addEventListener("click", ()=>{
    setTimeout(() => {
        alert("fuui presionado durante 3 seg");
    },3000);
})
//arrow function (una sola linea) y function regular (multiples si o si)
//anonima ()=> {""}, 3000 
// en resumen : se ejecuta el codigo despues de 3 segundos 

//setInterval()
let contador = 0;
setInterval(() => {
  contador++;
  console.log("contador: ", contador);
}, 1000); //miliseg

//asincronia
//metodos para consumir una api
//get, post, put, delete (para interactuar con api)

//fetch 
//lo vamos  a usar para contactarnos/consumir api
//fetch (url, opciones)
//opciones es un opcional para pensar un objetoq le diga q tipo de metodo utiliza, encabezado, cuerpo, etc

//fetch('https://rickandmortyapi.com/api/character') //promesa //me lo convierte en dato amigable para la maquina
 // .then((data) => data.json()) 
 // .then((response) => console.log(response.results));
//como acceder a las propiedades de un obj?
//como recorro results y la coroo en una variable?

//array.map((item)=> {
//    console.log(item);
//});


const array = fetch ('https://rickandmortyapi.com/api/character') 
   .then((data) => data.json()) 
   .then((response) => console.log(response.results));


async function getCharacters(){
    try{
        const response = await fetch ('https://rickandmortyapi.com/api/character')
        const data = await response.json()

        data.results.map((item)=>{
            console.log(item);
        });
    } catch (error) {
        console.log(error);
    }
}
getCharacters();