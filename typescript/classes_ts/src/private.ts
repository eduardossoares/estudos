class Account {
	private limit: number = 450;
	private increaseLimit(quantity: number) {
		if (quantity < 1000) {
			this.limit = quantity;
			console.log(`Seu limite foi alterado para ${this.limit}.`);
		}
	}

    increaseRequest(isAuthenticated: boolean, quantity: number) {
        return isAuthenticated ? this.increaseLimit(quantity) : console.log('Pedido recusado!');
    }
}

const myAccount = new Account()

myAccount.increaseRequest(true, 900);