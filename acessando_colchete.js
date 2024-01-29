const cliente = {
    nome: "gabriel",
    idade: 32,
    cpf: "11111111111",
    email: "test@gmail.com"
}

console.log(`Nome do meu cliente é: ${cliente['nome']}`)
console.log(`Os tres priemiros digitos do cpf são: ${cliente['cpf'].substring(0, 3)}`)


const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor: ${cliente[chave]}`);
})