const array = [21 ,6, 84, 24 ,86 ,11, 39, 59, 96, 53]
// //LISTAR DADOS - array.forEach

// // Forma individual 
// array.forEach((elemento, indice) => {   //O array.forEach é uma função que vai listas os dados do array e com isso ela usar uma funcao de callback como parametro
//     console.log(indice+"-"+elemento)   //  função callback vai analisar cada dado do array, e possui 3 dados, sendo 1 obrigatorio, o indice vai listar o indice
// }) 

// //Forma global - caso vc tenha uma estrtura que vai listar dados varias vezes
// const listarDados = (elemento, indice) => console.log(elemento+"-"+indice) //Isso aqui tbm é uma funcção callback
// array.forEach(listarDados) // para listar os elementos em todo codigo é so chamar o nome da função

//LISTAR DADOS E MODIFICAR - array.map
//Vai prezervar o array original, criando outro array para modificar os dados, em geral essa é unica diferença do array.forEatch
//Forma individual
// console.log(array)
// array.map((elemento) => { 
//     console.log(elemento * 3)
// })

//Forma global
// const listarDados = (elemento) => console.log(elemento)
// array.map(listarDados)

//ENCONTRAR DADOS - array.find

//Forma individaul
const maiorQue30 = array.find ((elemento) => { //No array.find ele vai pegar o primeiro dado que se encixa na condição
    return elemento > 30
}) 
console.log(maiorQue30)

//ENCONTRAR DADOS - array.filter 

//Forma individaul
const maiorQue31 = array.filter((elemento) => { //NO array.filter, ele  vai pegar todos os dados que se encaixa em determinada condição
    return elemento > 31 // so vai usar as chaves, quando for utilizado condicoes
})
console.log(maiorQue31)
