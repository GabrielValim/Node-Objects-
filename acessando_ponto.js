const cliente = {
    nome: "gabriel",
    idade: 32,
    cpf: "11111111111",
    email: "test@gmail.com"
}

console.log(`Nome do meu cliente é: ${cliente.nome}`)
console.log(`Os tres priemiros digitos do cpf são: ${cliente.cpf.substring(0, 3)}`)