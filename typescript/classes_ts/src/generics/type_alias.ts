type novoProduto<T extends number> = {
	name: string;
	price: T;
};

const arroz: newProduct<number> = {
    name: "Arroz Branco",
    price: 29.90,
}

console.log(rice);