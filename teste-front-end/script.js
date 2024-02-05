function caucular(altura, peso){
    let altura = window.document.getElementById("altura").value
    let peso = window.document.getElementById("peso").value
    let imc = (peso / altura ) * 2
    
    if (imc < 16.9){
        console.log('Muito abixo do peso')
    }
    else if(imc >= 17 && imc <= 18.5){
        console.log('Abaixo do peso')
    }
    else if( imc >= 18.5 && imc <= 24.9){
        console.log('Peso normal')
    }
    else if( imc >= 25 && imc <= 29.9 ){
        console.log('acima do peso')
    }
    



}