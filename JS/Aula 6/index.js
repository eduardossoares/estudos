const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const alturaEmMetros = 1.80;
const peso = 84;
let imc = peso / (alturaEmMetros * alturaEmMetros);
let anoNascimento = 2023 - idade;


console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} kg;`);
console.log(`Tem ${alturaEmMetros} de altura e seu IMC é de ${imc};`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);