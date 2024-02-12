//Como Fazer os array.map / array.filter ... com função de uma unica forma

//Array.forEach
const array1 = [ 23,54,6,35,78]
//Arrow Functions
const listaDados = array1.forEach((dados, indice) =>{
    return console.log(dados +"-" +indice)
})
console.log(listaDados)

//Array.map
//Arrow Functions:
const listarModificar = array1.map((dado, indice) => {
    return dado * indice

})
console.log(listarModificar)

//Array.find 
//Arrow Functions:
const maiorQue34 = array1.find((dados) => {
    return dados > 30
})
console.log(maiorQue34)

//Array.filter
//Arrow Functions:
const maiorQue50 = array1.filter((dados) => {
    return dados > 50
})
console.log(maiorQue50)