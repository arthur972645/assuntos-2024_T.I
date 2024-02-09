//  //ARRAY 
 
//  let array = [5, 8, 9,3,4,56,]

//  //ARRAY -> MÉTODOS COMUNS
//  //Inserir dados:

//  array.push(5) //adiciona um numero entre () no final do array
//  console.log(array)

//  array.unshift(3) //adicionar um numero entre () no comeco do array
//  console.log(array)

//  //Remover dados:

//  array.pop() //vai remover um dado no final, com isso não precisa colocar nenhum parametro entre os ()
//  console.log(array)

//  array.shift()//vai remover um dado no começo do array 
//  console.log(array)

//  //como chamar cade elemento do array com FOR
 
//  let num1 = [ 2,3,4,5,6,7,]
//  for(let i = 0; i <= num1.length;i++ ){
//     console.log(num1[i])     
//  }
//  //como chamar cada elemento do array - forma reduzida
 
//  let num2 = [3,34,3,34,34,34,3]
//  for(let i in num2){
//     console.log(num2[i])
//  }

//  //Listar os Dados -> array.forEach ->forma global

//  const arrayListarDados = [21 ,6, 84, 24 ,86 ,11, 39, 59, 96, 53]
 
//  const listarDados = (dados, indice) => console.log(dados+" - "+indice)
//  arrayListarDados.forEach(listarDados) //chamando a função

// - array.forEach é uma função nativa do JS que vai listar os dados do array
// - ela utiliza até 3 parametros( o que ta dentro dos parenteses), sendo um obrigatorio para a funcao funcionar
// - dessa forma apresentada estamos usando um arrow funcao que serve de forma global
// - Os "dados" são se referindo aos elementos do array -> obrigatorio
// - Os "indice" são os indices do array (0, 1, 2, 3...) -> opciopnar

//Listar os Dados e Modifica-lós -> array.map -> forma global

const arrayListarDadosModificar = [21 ,6, 84, 24 ,86 ,11, 39, 59, 96, 53]

const listarDadosModificar = (dados, indice) => console.log(dados+" x "+indice+"="+dados *2)
arrayListarDadosModificar.map(listarDadosModificar)

// - o array.map, vai permitir que vc liste os dados e os modifique
// - O array.map vai preservar o array original, copiando ele e a partir da copia vai modificar
// - Dessa forma apresentada, estamos usando um arrow funcao, podendo chamar ela depois
// - em geral ele é bem parecido com o array.forEach

//Encontrar dados -> array.find ->forma global

const arrayEncontrarDados = [21 ,6, 84, 24 ,86 ,11, 39, 59, 96, 53]

const maiorQue30 = arrayEncontrarDados.find((dados) => {
   return dados > 30
})
console.log(maiorQue30)

// - O array.find vai encontrar e apresnetar o primeiro dado que se encaixa na condição apresentada
// - utilizou o return DEVE usar as {}

//Encontrar dados -> array.filter ->forma global

 const encontrarVariosDados =  [21 ,6, 84, 24 ,86 ,11, 39, 59, 96, 53]

 const maioresQue30 = encontrarVariosDados.filter((dados) => {
   return  dados > 30
 })
 console.log("Maiores que 30: "+maioresQue30)
// - o array.filter vai encontar e mostrar todos os dados que se encaixa na confição apresentada
// - utilizou o return DEVE usar as {}

