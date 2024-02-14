//OBEJETO:
//O objeto é tudo aquilo que tem ponto, exemplo: array.map é uma obejeto, exemplo: console.log tambêm é um obejto 
// Como declarar o Objeto:
let informacao = {
    //Isso é um objeto formado por propiedades, que é quando valor/ dado já vem prontinho ou métodos, que é quando retorna uma função
    //Lembrar que no objeto pode ter função dentro de funcção, array, outros objetos...
    //Cuidado com as vírgulas

    Nome:'arthur', 
    altuta: 1.80,
    peso: 80,
    array2: [
        {
            rua: 'Rua A',
            Condominio: 'Allegro',
        },
        {
            carro: 'Ford Ka',
            moto: 'honda',
        }
    ],
    saudacao(){
        return console.log('ola, mundo')
    }
    
}
//para chamar um objeto você usar o nome do objeto e para chamar uma determinada parte o nome do objeto.a propriedade ou método que você quer
console.log(informacao)
console.log(informacao.Nome)
console.log(informacao.altuta)
console.log(informacao.peso)
console.log(informacao.array2)
console.log(informacao.array2[0].rua) //acessar um determnado dado, onde o dado esta dentro de um objeto, que ta dentro de um array, que ta dentrod e um obejeto

const lsitar = informacao.array2.forEach((dados) => {
    return console.log(dados)
})
console.log(lsitar)
console.log(informacao.saudacao())