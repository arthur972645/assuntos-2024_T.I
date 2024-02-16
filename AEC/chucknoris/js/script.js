document.addEventListener('DOMContentLoaded' , () => {
    const url = "https://api.chucknorris.io/jokes/categories"
    //vai consumir uma api, o fetch é uma promise
    fetch(url) //vai solicitar a api
    .then((response) => {
        if(!response.ok){ //o ok é em realação ao cosigo 200 de erro(Indica que a requisição foi bem-sucedida.) 
            throw new Error('Erro a ao receber dados') //se não vinher do jeito desejado, gerar um erro
        }
        //se vim da fomra certa, quero transformar a responde em formato json
        return  response.json ()
    })
    .then((data) => {
        gerarCategorias(data)
    })
    .catch((err) => console.error(err))
})
//vai receber as dados de data, ou seja, uma lista de categorias
function gerarCategorias(categorias){
    //Parametro categoria = array e categora
    // console.log(categorias)
    const select = document.getElementById('select')
    categorias.map((categoria) => {
        const options = document.createElement('option')
        options.innerHTML = `${categoria}`
        options.value = categoria

        select.appendChild(options)
    })
}
const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
    const select = document.getElementById("select").value
    // console.log(select)
    const url = `https://api.chucknorris.io/jokes/random?category=${select}`
    fetch(url)
    //não entendi essa parte
    .then((response) => {
        if(!response.ok){
            throw new Error('Erro ao selecioanr piada')
        } //ate aqui
        return response.json()
    }) //não etendi essa parte
    .then((date) => {
        gerarPiadoca(date)
    })
    .catch((err) => console.error(err))
    //ate aqui 
})
function gerarPiadoca(piada){
    // console.log(piada)
    const joke = document.getElementById('joke')
    joke.innerHTML = piada.value 
}
