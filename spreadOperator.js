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

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
  console.log(`Ligando para ${telefoneComercial}`);
  console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone)

const encomenda = {
  destinario: cliente.nome,
  ...cliente.enderecos[0]
}

console.log(encomenda);