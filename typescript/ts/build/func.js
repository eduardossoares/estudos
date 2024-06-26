"use strict";
// Primeiro Modo
const newCurse = {
    id: "1",
    name: "Typescript e ReactJS",
    price: 199.99,
    promo: (price) => {
        console.log(`Preço com promoção: R$${price}.`);
    },
};
const declarateUser = (newCurse, promo) => {
    console.log(`ID do curso ${newCurse.id}.`);
    console.log(`Nome do Curso ${newCurse.name}.`);
    console.log(`Preço do Curso: R$${newCurse.price}.`);
    newCurse.promo(promo);
};
declarateUser(newCurse, 99.99);
// Segundo Modo
// interface SomeProps {
// 	(firstValue: number, secondValue: number): number;
// }
// const newSome: SomeProps = (
// 	firstValue: number,
// 	secondValue: number
// ): number => {
//     console.log(`O resultado da soma de ${firstValue} e ${secondValue} é: ${firstValue + secondValue}.`)
// 	return firstValue + secondValue;
// };
// newSome(15, 20);
