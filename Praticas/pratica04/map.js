// const array = [1, 2, 3, 4, 5]



// array.forEach(item => {
//     console.log(item)
// })

// const novoArray = array.map(item =>{
//     return item*2;

// })

// console.log(novoArray)

//===== filter ====

// const novoArray = array.filter(item => 
//     item%2 != 0).map(item => item*10)
// console.log(novoArray)

//===== every =======

// const todosItensSaoNumeros = array.every(item => {
//     return typeof item === "number"
// }
// );
// console.log(todosItensSaoNumeros)

//=== some ======
// const peloMenosUmItemNaoEUmNumero = array.some(item => {
//     return typeof item != "number";
// })

//======= find ======
// const par = array.find(item => item % 2 == 0)
// findIndex e amesma coisa a diferenca e que retorna o indice e nao  o valor

// =============== reduce =======

// const soma = array.reduce((acc,item) => {
// return acc + item
// }, 0)

// async function buscaDadosGitHub() {
//     const response = await fetch(`https://api.github.com/users/gusstavow`)
//     const data = await response.json()
//     return data.name
// }

// buscaDadosGitHub().then(name => {
//     console.log(name)
// })

import { soma } from "./lib/math.js";

import * as math from "./lib/math.js"

//renomenado a funcao importada
import {soma as sum} from "./lib/math.js"

 console.log(sum(1,3))