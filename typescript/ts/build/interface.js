"use strict";
// const loja: object = {
//   name: "BK",
//   adress: "Avenida 10",
//   status: true
// };
const burguerKing = {
    name: "Burguer King",
    adress: "Avenida 10",
    status: true,
    productPromo: "Duplo Cheddar",
};
console.table(burguerKing);
const newStore = ({ name, adress, productPromo, status }) => {
    console.log(`Loja ${name} criada com sucesso!`);
    console.log(`Endereço da Loja: ${adress}`);
    console.log(`O produto em promoção do dia é: ${productPromo}`);
    console.log(status ? "A loja está aberta!" : "A loja está fechada!");
};
newStore({
    name: "Subway",
    adress: "Avenida 10",
    productPromo: "Banana",
    status: false,
});
