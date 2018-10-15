var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1234,
    bairro: "Pinheiros",
    cidade: "São Paulo",
    uf: "SP"
};

function exibeMsg(value) {
    return "O usuário mora em " +value.cidade+ " / " +value.uf+ ", no bairro " +value.bairro+ " na rua "+ value.rua +" com nº "+ value.numero;
}

console.log(exibeMsg(endereco));