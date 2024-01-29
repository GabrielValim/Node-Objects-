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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto)

if (!chavesDoObjeto.includes("enderecos")){
    console.log("Error. é necessario ter um endereço cadastrado.");
}