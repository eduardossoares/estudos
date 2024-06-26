type Uuid = number | string | null;

const acess = (uuid: Uuid, name: string): void => {
	console.log(`ID: ${uuid} - Bem Vindo ${name}.`);
};

const userLogin = (uuid: Uuid): void => {
	console.log(`Conta referente ao ID ${uuid}.`);
};

acess(123, "Eduardo");
acess(55, "Matheus");
userLogin("54");

type Moedas = "BRL" | "EUR" | "USD";

const buyItems = (coin: Moedas) => {
	console.log(`Você utilizou a moeda: ${coin}.`);
};

buyItems("USD");
