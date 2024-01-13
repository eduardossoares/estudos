const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',
  idade: 30
}

for (let key in pessoa) {
  console.log(key, pessoa[key])
}

// For clássico - Geralmente com iteráveis (arrays ou strings)
// For in - Retorna o indice ou chave (setring, array ou obj)
// for of - retorna o valor em si (iteráveis, arrays ou strings)


// for (let i = 0; i < nome.length; i ++) {
//   console.log(nome[i]);
// }

// for (let i in nome) {
//   console.log(nome[i]);
// }

// for (let valor of nome) {
//   console.log(valor);
// }