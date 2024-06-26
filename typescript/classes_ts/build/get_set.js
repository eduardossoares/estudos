"use strict";
class Game {
    constructor(servidor) {
        this.id = "123";
        this.serverIP = servidor;
    }
    get getIPServer() {
        console.log("Método Get");
        return this.serverIP;
    }
    set setIPServer(newIP) {
        if (this.serverIP === newIP) {
            throw new Error("O novo IP deve ser diferente do IP antigo!");
        }
        else {
            this.serverIP = newIP;
        }
    }
}
const gtaV = new Game("192.168.5.1");
try {
    gtaV.setIPServer = "192.168.5.5";
}
catch (error) {
    console.log(error.message);
}
console.log(gtaV.getIPServer);
