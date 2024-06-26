"use strict";
const user = {
    name: "Eduardo",
    status: true,
};
const newUser = ({ name, email, status }) => {
    console.log(`Você se chama ${name}!`);
    console.log(email === undefined ? "Você não possui email registrado!" :
        `Seu email é: ${email}`);
    console.log(status ? "Você é usuário(a) VIP!" : "Seu plano não é VIP!");
};
newUser({ name: "Mario", status: true });
