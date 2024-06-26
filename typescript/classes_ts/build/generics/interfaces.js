"use strict";
const rice = {
    name: "Arroz Branco",
    price: 29.9,
    format(value) {
        let formatedValue = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
        return formatedValue;
    },
};
console.log(rice);
console.log(rice.format(rice.price));
