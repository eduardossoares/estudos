// Primeiro Modo

interface PropsCurse {
	id: string;
	name: string;
	price: number;

	promo: (price: number) => void;
}

const newCurse: PropsCurse = {
	id: "1",
	name: "Typescript e ReactJS",
	price: 199.99,
	promo: (price: number): void => {
		console.log(`Preço com promoção: R$${price}.`);
	},
};

const declarateUser = (newCurse: PropsCurse, promo: number): void => {
	console.log(`ID do curso ${newCurse.id}.`);
	console.log(`Nome do Curso ${newCurse.name}.`);
    console.log(`Preço do Curso: R$${newCurse.price}.`);
    newCurse.promo(promo)
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
