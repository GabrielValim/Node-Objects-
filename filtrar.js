const clientes = require('./clientes.json');

function filtarApartamentoSemComplemento(clintes) {
  return clientes.filter((cliente) => {
    return ( 
      cliente.endereco.apartamento &&
      !cliente.endereco.hasOwnProperty("complemento")     
    );
  });
}

const filtados = filtarApartamentoSemComplemento(clientes)

console.log(filtados);