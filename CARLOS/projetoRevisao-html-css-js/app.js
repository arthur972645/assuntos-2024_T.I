const inNumero = document.querySelector('#inNumero')
let outTabuada = document.getElementById('outTabuada')
const btnMostrar = document.querySelector('#btnMostrar')

btnMostrar.addEventListener('click', () =>{ //Uma função onde ao clicar no botao alguma coisa acontece. IMPORTANTE
    let numero = Number(inNumero.value)

    if(numero === 0 || isNaN(numero)){
        alert("Digite  um numero valido")
        inNumero.focus();
        return
    }
    
    let resposta = ''
    for(let i = 1; i<=10; i++){
        console.log(numero * i)
        resposta = resposta + numero+ "x"+ i +"="+numero*i
    }
    outTabuada.innerHTML = `${resposta}`

})