document.addEventListener('DOMContentLoaded' , () => { //Sempre que a aplição for aberta, vai garantir que todo o elemento HTML esteja disponivel primeiro que o js, que vai procurar esses elementso
    const url = "https://api.chucknorris.io/jokes/categories"
    //vai consumir uma api, o fetch é uma promise
    fetch(url) //vai solicitar a API, ou seja, chamar os dados que ela apresenta e a partir dai vamos trabalahr com eles 
    .then((response) => {
        //Essa parte é uma verificação dos dados da API
        //O .ok é em relação ao codigo 200( se esta tudo bem )
        //essa parte funciona assim, se for diferenet de "tudo bom" vai aparecer tal dado
        //se estiver tudo bem, quero que retorne os dados em formato JSON( Forma de notação de um objeto, ou seja, vai deixar mais legivel, mais calro)
        if(!response.ok){  
            throw new Error('Erro a ao receber dados')
        }
        
        return  response.json ()
    })
    //O then() vai servir para manipularmos os dados, ou seja, quando tivermos os dados no formato json, o then vai decidir o que vai fazer com esses dados
    //Nesse caso, quando os dados estiverem prontos, quero que vc chame a função (gerarCategorias)
    //não é aconselhado fazer a lógica dentro dessa parte
    //O cath() funciona de uma forma semelhamte, mas aposta é caso se algo de errado, me avise
    //console.error(err) = mostre o erro no console
    .then((data) => {
        gerarCategorias(data)
    })
    .catch((err) => console.error(err))
})

function gerarCategorias(categorias){
    //Essa função vai ser rsponsavel por preencehr as o menu suspenspo( parte que vc  escolhe a categorai)
    //Associar que "categorias" = date, ou seja, são os dados no formato json
    //primeiro a gente vai pegas esses dados e "colocar" no elemento HTML select
    //em seguida, como esses dados vão ser apresentados com aum array. podemos listar eles
    //Depois vamos tornar essses dados listados, opções para o usuario posas escolher 
    //criou-se opcoes document.createElement('option'), apresentando elas no html com o innerHTML
    //Entretanto nos associamos as optons com as "categoria" que é o array listado, com isso vai ser mostrado cada categoria ( o nome )
    //em seguida associamos de fato que dependendo da opcao selecionada é referente a tal categoria( selecionou a opcao 3 = categoria "dev")
    //por fim finalmente é adcionado ao selector as opcoes, ou seja, nessa parte colocamos de fato a api categoria dentro do select
    const select = document.getElementById('select')
    categorias.map((categoria) => {
        const options = document.createElement('option')
        options.innerHTML = `${categoria}`
        options.value = categoria

        select.appendChild(options)
    })
}
//Inicalemte, ele vai precisar chamar esse butao, ou seja , clicou no botao o que vai acontencer?
//Ao clicar no botao, a primeira coisa que vai acontecer é pegar o valor da opcao escolhida( exemplo: dev)
//Em seguida ele vai na API que tem todas as categorias com todas as piadas, e seleciona a categoria que foi escolhida
//Depois ele vai solicitar a essa parte da api, as piadas de tal categoria, e vai trabalhar com eles
//se tiver tudo certo transformar essa parte da api em formato JSON
//em seguida criasse o then() que é nele que vai ser decidido o que vaamos fazer com os dados, todas as piadas da categoria
//O cath() caso der algo de errado na manipulação dos dados, pegar e informar que ta errado
// Não é aconselhado fazer a lógica no then, entao ciamos uma função pra atribuir essa logica depois é so cahamar
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
    //Como sempre o "piada" = date que são os dados do API piadas na categoria escolhida
    //Vamos pegar a parte onde essa piada vai ser mostrada no HTML, O "resultado da piada"
    //Pegamos essa parte e coloca nela um  "piada" aletatoria, ou seja, um dado da API na categoria dev, que ta na formad e array
    //por isso nos  colocamos o .value, pra mostrar a piada em forma de texto" o valor que ela reprenta" , ser mais especifico e ficar mais intuitivo 
    const joke = document.getElementById('joke')
    joke.innerHTML = piada.value
}
