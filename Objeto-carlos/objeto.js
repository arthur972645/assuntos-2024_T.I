let pessoa = {
    nome: 'Arthur',
    idade: 17,
    altura: 1.84,
    endereco: [ //LEMBRE-SE array é [], Objeto é {}, entao endereco é cum array
        {
            tipo: 'Residencial',
            rua: 'Rua A',
            Cidade: 'Maceio',
        },
        {
            tipo: 'Residencial',
            rua: 'Rua B',
            Cidade: 'Salvador',
        },
    ],
    saudacao(){
        return 'Ol, mundo'
    }
}
const endereco = (elementos) => console.log(elementos)
pessoa.endereco.map(endereco) // pessoa. endereco é tipo vc chamando o array 