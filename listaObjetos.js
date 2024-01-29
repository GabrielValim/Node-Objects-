const cliente = {
    nome: "Valim",
    idade: 22,
    email: "teste@hotmail.com",
    telefone: ["11111111", '22222222']
}

cliente.enderecos = [{
    rua: 'Ruatal',
    numero: 71,
    apartamento: true,
    complemento: 'ap 934'
}];

cliente.enderecos.push({
    rua: 'da mae zoana',
    numero: 69,
    apartamento: false
})

const listaApartamentos = cliente.enderecos.filter(
        (endereco) =>  endereco.apartamento === true
    )


console.log(cliente.enderecos)
console.log(listaApartamentos)