//ATIVIDADE 01 
const arrayDadosDobro = [10, 20 ,30 ,40 ,50]

const dobroDados = (dados) => console.log("O dobre de "+dados+" = "+dados * 2)
arrayDadosDobro.map(dobroDados)

//ATIVIDADE 02
const arrayDadosPalavra = ["amor", "vivi", "arthur"]

const palavrasMaiusculo = (dados) => console.log(dados.toUpperCase()) // deixa os dado dentro do array maiculos. 
arrayDadosPalavra.map(palavrasMaiusculo)

//ATIVIDADE 03
const arrayDadosPares = [65,756,3,745,12,,45,23,8,2,7,]

const dadosPares = arrayDadosPares.find((dados) => { //vai identificar o primeiro numero par
    return dados%2 === 0
})
console.log("O primeiro numero par: "+dadosPares)

//ATIVIDADE 04
const produtos = [
    {nome: "produto1", preco: 30},
    {nome: "produto2", preco: 55},
    {nome: "produto3", preco: 20},

]
const produtoMaior50 = produtos.find((produtos) => produtos.preco>50)
console.log(produtoMaior50)

   

//ATIVIDADE 05
const arrayDadosPalavra5Caracteres = ["amor", "vivi", "arthur"]

const maiorQue5 = arrayDadosPalavra5Caracteres
.filter((dados) => dados.length > 5)
console.log(maiorQue5)

