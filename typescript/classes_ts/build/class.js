"use strict";
class Store {
    constructor(name, adress, category) {
        this.name = name;
        this.adress = adress;
        this.category = category;
    }
    createStore() {
        console.log(`Loja: ${this.name}, categoria: ${this.category}, endereço: ${this.adress}.`);
    }
    issueOrder(id, customer, mesa, ...orders) {
        console.log(`ID do pedido: ${id}.`);
        console.log(`Nome do cliente: ${customer}.`);
        orders.map((order) => {
            console.log(`Pedido: ${order}.`);
        });
        console.log(`Mesa: ${mesa}.`);
    }
    changeStatus(status) {
        const statusStore = status === "Opened" ? "Loja Aberta!" : "Loja Fechada!";
        console.log(statusStore);
    }
}
const myBurguer = new Store("Red Burguer", "Avenida 10", "Lanchonete");
myBurguer.changeStatus("Closed");
myBurguer.createStore();
myBurguer.issueOrder(28, "Eduardo", 20, "Suco gelado", "Coca-cola", "Hamburguer duplo");
