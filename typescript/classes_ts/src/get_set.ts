class Game {
	private serverIP: string;
	private id: string = "123";

	constructor(servidor: string) {
		this.serverIP = servidor;
	}

	get getIPServer() {
		console.log("Método Get");
		return this.serverIP;
	}

	set setIPServer(newIP: string) {
		if (this.serverIP === newIP) {
			throw new Error("O novo IP deve ser diferente do IP antigo!");
		} else {
			this.serverIP = newIP;
		}
	}
}

const gtaV = new Game("192.168.5.1");

try {
    gtaV.setIPServer = "192.168.5.5";
} catch(error: any) {
    console.log(error.message);
}



console.log(gtaV.getIPServer);
