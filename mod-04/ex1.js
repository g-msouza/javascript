function checaIdade(idade) {
  return new Promise((resolve, reject) => {
    setTimeout(() => idade >= 18 ? resolve("maior de 18 anos") : reject("maior de 18 anos"), 2000);
  }) ;
}

checaIdade(18)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));