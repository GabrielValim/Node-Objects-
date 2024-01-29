const cliente = {
    nome: "Valim",
    idade: 22,
    email: "teste@hotmail.com",
    telefone: ["11111111", '22222222'],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if(valor > this.saldo) {
            console.log("Saldo insuficiente");
        } else {
            this.saldo -= valor;
            console.log(`Pagamento Realizado.Seu novo saldo é: ${this.saldo}`);
        }
    },
}

cliente.efetuaPagamento(250)