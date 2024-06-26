interface newProduct<T extends number | string> {
	name: string;
	price: T;

	format(value: T): string;
}

const rice: newProduct<number> = {
	name: "Arroz Branco",
	price: 29.9,
	format(value: number): string {
		let formatedValue = value.toLocaleString("pt-BR", {
			style: "currency",
			currency: "BRL",
		});
		return formatedValue;
	},
};

console.log(rice);
console.log(rice.format(rice.price))
