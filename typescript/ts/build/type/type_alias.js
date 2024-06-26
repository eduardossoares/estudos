"use strict";
const acess = (uuid, name) => {
    console.log(`ID: ${uuid} - Bem Vindo ${name}.`);
};
const userLogin = (uuid) => {
    console.log(`Conta referente ao ID ${uuid}.`);
};
acess(123, "Eduardo");
acess(55, "Matheus");
userLogin("54");
const buyItems = (coin) => {
    console.log(`Você utilizou a moeda: ${coin}.`);
};
buyItems("USD");
