"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const check_person_1 = require("./decorators/check_person");
class Person {
    constructor(name) {
        this.name = name;
    }
    registerPerson() {
        console.log(`Bem vindo ao sistema, ${this.name}.`);
    }
}
__decorate([
    (0, check_person_1.checkPerson)(18)
], Person.prototype, "registerPerson", null);
const firstPerson = new Person("Eduardo");
firstPerson.registerPerson();
