"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const nameIsValid = (size) => {
    return (target, key) => {
        let value = target[key];
        const getter = () => value;
        const setter = (value) => {
            if (value === "") {
                console.log("Você não pode deixar em branco!");
            }
            else if (value.length < size) {
                console.log("Mínimo de caracteres: 5.");
            }
            else {
                value = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
};
class Game {
    constructor(name) {
        this.name = name;
    }
}
__decorate([
    nameIsValid(5)
], Game.prototype, "name", void 0);
const firstGame = new Game("FarCry 4");
console.log(firstGame.name);
