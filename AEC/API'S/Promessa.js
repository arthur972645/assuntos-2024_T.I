//PROMISE: 
//Vai permitir que seja executado duas partes do código ao mesmo tempo, chamado de processamento assincrono
//COMO FAZER MA PROMISE: 
// let p = new Promise((resolve, reject) => { //A partir daqui vira uma funcção, ou seja, elabore a lógica
//     let a = 1 + 1
//     if(a == 2){ // essa é a situação correta, então, ou seja, ,then
//         resolve('sucesso')
//     }else{      // essa é a sitauçaõ incorreta, ou seja, .catch
//         reject('falaha')
//     }
// })
// //chamar a promise
// p.then((mesage) => { //O .then vai ser sempre pro resolve, ou seja, pra situação correta
//     console.log(mesage)
// }).catch((erro) => { //O .catch sempre será pro reject, ou seja, pra situação incorreta
//     console.log(erro)
// })

const nome = 'Arthur'

let promisse = new Promise((resolve, reject) => {
    if(nome != 'Arthur' && nome != 'vitoria'){
        resolve({
            nome: 'sucesso',
            mensage: 'nome é diferente, pois é '+nome
        })
    }else{
        reject({
            nome: 'Falha',
            mensage: 'nome é igual, pois é '+nome
        })
    }
})

promisse.then((sucesso) => {
    console.log(sucesso.nome+' / '+sucesso.mensage)
}).catch((erro) => {
    console.log(erro.nome+' / '+erro.mensage)
})
//Funcionamento: ele vai pegar avariaver nome e vai ver se encaixa na condição ou não, se enxaica o resultado é certo(RESOLVE), se não encaixar o restultado é errado(REJECT)
//Tanto no resolve e no rejet tem um objeto so pra mostar que isso pode acontecer, mas em geral, essas duas partes esão dentro da lógica da função 
//Ao mesmto tempo, por causa da promise já esta sendo trabalhado a opcao de erro( se a variavel for igual) ea opcao de sucesso( se a variavel for diferente)
//O JS entende que o ,then já é para opcao sucesso da sua aplicacao, e o .catch para a opcao de erro da aplicacao
//
 