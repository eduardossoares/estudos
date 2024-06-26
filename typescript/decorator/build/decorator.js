"use strict";
// const logInfo = (message: any) => {
//     return(target: any) => {
//         console.log(`${message}, ${target}.`)
//     }
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @logInfo("Servidor Online!")
// class Sitema {
// }
const setIP = (newIP) => {
    return (target) => {
        return class extends target {
            constructor() {
                super(...arguments);
                this.ip = newIP;
            }
        };
    };
};
let Server = class Server {
};
Server = __decorate([
    setIP("192.1.1.1")
], Server);
const firstServer = new Server();
console.log(firstServer);
