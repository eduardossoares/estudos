"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apply_mixin_1 = require("./mixin/apply_mixin");
class Automobile {
    turnOn() {
        console.log("Automóvel ligado com sucesso!");
    }
    turnOff() {
        console.log("Automóvel desligado com sucesso!");
    }
}
class Specification {
    constructor(description) {
        this.description = description;
    }
}
class Car {
    constructor(name) {
        this.name = name;
    }
}
(0, apply_mixin_1.applyMixins)(Car, [Automobile, Specification]);
const gol = new Car("Gol");
gol.description = "Gol Bolinha.";
gol.turnOn();
gol.turnOff();
console.log(gol);
