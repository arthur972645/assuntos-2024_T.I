// //COMO DECLARAR UMA FUNÇÃO 
//     //EXEMPLO 1
//     function soma ( a, b ) {
//         const soma = a + b
        
//         if( soma > 5){
//             console.log('Valor nao permitido'+soma)
//         } else{
//             return soma
//         }
//     }
//     console.log(soma(2,2)) // funcao funcionou pq a funcao pede 2 valores e vc entrega 2 valores. 0K 
//     console.log(soma(2)) //a funcao espera 2 valores, e vc so entrega apenas um ou nenhum, dando assim NaN
//     console.log(soma(2,2,2,2,2,4,5,6))  // como a funcao so aceita dois numeros, ela vai pegar apenas os 2 primeiros numeros
//     console.log(soma(2,5)) // nao tem como fazer isso dessa forma, dando NaN

    //EXEMPLO2

    // function multiplicacao(){
    //     let multi = 1
    //     for( i in arguments){
    //         multi *= arguments[i]
    //     }
    //     return multi
    // }

    // console.log(multiplicacao())
    // console.log(multiplicacao(5))
    // console.log(multiplicacao(5,5))

    //EXEMPLO3

    // let triplo = function(x){
    //     return 3 * x
    // }

    // // Arrow Functions:

    // triplo = (x) => {
    //     return 3 * x  //se criou o arrow functins e usou a chave usa o return
    // }
    // triplo = (x) => 3 * x;
    // console.log(triplo(3))
    
     //EXEMPLO3
     const soma = function(x,y){
        return x + y
    }
    
    const resultado = function(a, b, operacao = soma){
        console.log(operacao(a, b))
    }
    resultado(5, 5)
    resultado(5, 5, soma)
    resultado(5, 5, (x, y) => x * y)
    resultado(3, 3, (x, y) => x / y)