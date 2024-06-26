type Status = "Opened" | "Closed";

class Store {
	name: string;
	adress: string;
	category: string;

	constructor(name: string, adress: string, category: string) {
		this.name = name;
		this.adress = adress;
		this.category = category;
	}

	createStore(): void {
		console.log(
			`Loja: ${this.name}, categoria: ${this.category}, endereço: ${this.adress}.`
		);
	}

	issueOrder(
		id: number,
		customer: string,
		mesa: number,
		...orders: string[]
	): void {
		console.log(`ID do pedido: ${id}.`);
		console.log(`Nome do cliente: ${customer}.`);
		orders.map((order) => {
			console.log(`Pedido: ${order}.`);
		});
		console.log(`Mesa: ${mesa}.`);
	}

	changeStatus(status: Status): void {
		const statusStore = status === "Opened" ? "Loja Aberta!" : "Loja Fechada!";
		console.log(statusStore);
	}
}

const myBurguer = new Store("Red Burguer", "Avenida 10", "Lanchonete");

myBurguer.changeStatus("Closed");
myBurguer.createStore();
myBurguer.issueOrder(
	28,
	"Eduardo",
	20,
	"Suco gelado",
	"Coca-cola",
	"Hamburguer duplo"
);
