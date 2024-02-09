//PROMESSA -> .then()
// const promessa = Promise.resolve(5 + 3)
// console.log("logica que foi desenvolvida")

// promessa.then(function(value){
//     console.log(`A soma = ${value}`)
//     return value
// })
// .then(function(value){
//     console.log(`A subtracao  -1 = ${value - 1}`)
//     return value
// })
// .then(function(value){
//     console.log(`A multiplicação = ${value * 2}`)
//     return value
// })
// console.log("Código extra")

//PROMESSA -> .catch()
// Promise.resolve("Ola ," * 4)
// .then((value) => {
//     if(Number.isNaN(value)){
//         throw new Error('valores invalidos')
//     }
// })
// .catch((erro)=>{
//     console.log("Um erro ocorreu "+erro)
// })

//PROMESSA .CATH E .THEN JUNTAS
// function checkNumber(n){
//     return new Promise((resolve,reject) => {
//         if(n > 20){
//             resolve('O numero é maior que 20')
//         }else{
//             reject(new Error('O numero invalido') )
//         }
//     })
// }
// const numero1 = checkNumber(25)
// const numero2 = checkNumber(10)

// numero1.then((value) => {
//     console.log(`O resultado ${value}`)
// }).catch((Error) => {
//     console.log(`Error: ${Error}`)
// })
// numero2.then((value)=>{
//     console.log(`O resultado ${value}`)
// }).catch((Error)=>{
//     console.log(`Error: ${Error}`)
// })
// console.log('teste Asynic')

//async await - jeito mais simples de trabalhar com promessa
//PRIMEIRA FORMA
// async function cauculaComDeLay(x,  y){
//     return x * y
// }
// cauculaComDeLay(3, 3)
// .then((value)=>{
//     console.log(value)
// }).catch((erro)=>{
//     console.log(`${erro}`)
// })

//async await - jeito mais simples de trabalhar com promessa
//SEGUNDA FORMA
function respostaComDeLey(){
    return new Promise((resolva)=>{
        setTimeout(()=>{
            resolva("reoslva a promessa")
        }, 3000)
    })
}
async function chamadaDeLay(){
    console.log('chamadaa promisse, e esperando o resultado')
    const resultado = await respostaComDeLey()
    console.log(`O resultado chegou ${resultado}`)
}
chamadaDeLay()


