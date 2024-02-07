// //ATIVIDADE 1 - Combinar Propriedades de Objetos:

// let produtos = [    
//      { nome: 'Camiseta', categoria: 'Roupas' },
//      { nome: 'Celular', categoria: 'Eletrônicos' }
//  ];
//  let precos = [
//      { nome: 'Camiseta', preco: 20 }, 
//      { nome: 'Celular', preco: 500 },
//  ];

//   function combinarProdutosPreco(produtos, precos){ //vai receber dois paramentros, o produto e o preco     
//          return produtos.map((produtos) => { //o map vai listar todos  os produtos
//          //Encontrar o objeto igual do array de preco
//          let precoProduto = precos.find((preco) => preco.nome === produtos.nome)
//          return{
//             nome: produtos.nome,
//              categoria: produtos.categoria,
//             preco: precoProduto.preco
//          }
                
//     }
// )}

// let combinarProduto = combinarProdutosPreco ( produtos, precos)
// console.log(combinarProduto)
 



// //ATIVIDADE 2 - Filtrar Produtos por Categoria:

// function buscarDadosCategoria(arrayDeProdutos, categoria){
//     return arrayDeProdutos.filter((produto) => produto.categoria === categoria);

// }
// const categoriaProduto = buscarDadosCategoria(combinarProduto, 'Roupa')
// console.log(categoriaProduto)

//ATIVIDADE 3  - Calcular Preço Total de Compras:

let produtos = [
    {nome: 'Camiseta', categoria: 'Roupas', preco: 20},
    { nome: 'Celular', categoria: 'Eletrônicos', preco: 500 }
];
let quantidade = [3, 1]

function precoTotal ( produtos, quantidade){
    return produtos.map((produtos, index) => {
        let precoVendas = produtos.preco * quantidade[index]

        return{
            nome: produtos.nome,
            preco: produtos.preco,
            valorTotal: precoVendas
        }
    })
}
const precoVendaProduto = precoTotal(produtos, quantidade)
console.log(precoVendaProduto)

//ATIVIDADE 4 - Encontrar Produtos com Preço Mínimo:

let mercadoria = [
    { nome: 'Camiseta', preco: 20 },
    { nome: 'Celular', preco: 500 },
    { nome: 'Caneca', preco: 10 }
  ];

 function precoMinimo(arrayProduto, valorMinimo){
    return arrayProduto.filter((produto) => produto.preco >= valorMinimo)
 }
 const produtoAcimaDoMinimo = precoMinimo(mercadoria, 500)
 console.log(produtoAcimaDoMinimo)