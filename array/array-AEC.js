 // como fazer um array: 
 
 let num = [5, 8, 9,3,4,56,]
 console.log(num.length) // apresentar a qauntidade de elemntos do array
 num.push(6) // acrescentar um elemento no final do arary
 num[2] = 5 //vai substituir o valor do elementos que ta no indice 5
 num.sort() //organiza os elementos de um array em ordem crescente
 num.indexOf(5) //procuira o elementos 5 e devolve o index desse elementos
 console.log(num) // Apresntar todos os elemtnos do array

 //como chamar cade elemento do array com FOR
 let num1 = [ 2,3,4,5,6,7,]
 for(let i = 0; i <= num1.length;i++ ){
    console.log(num1[i])     
 }
 //como chamar cada elemento do array - forma reduzida
 let num2 = [3,34,3,34,34,34,3]
 for(let i in num2){
    console.log(num2[i])
 }