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

for(let chave in cliente) {
    let tipo = typeof cliente[chave];
    if(tipo != 'object' && tipo != 'function'){
        console.log(`A chave ${chave} tem o valor: ${cliente[chave]}`);
    }
}