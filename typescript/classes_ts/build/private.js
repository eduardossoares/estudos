"use strict";
class Account {
    constructor() {
        this.limit = 450;
    }
    increaseLimit(quantity) {
        if (quantity < 1000) {
            this.limit = quantity;
            console.log(`Seu limite foi alterado para ${this.limit}.`);
        }
    }
    increaseRequest(isAuthenticated, quantity) {
        return isAuthenticated ? this.increaseLimit(quantity) : console.log('Pedido recusado!');
    }
}
const myAccount = new Account();
myAccount.increaseRequest(true, 900);
