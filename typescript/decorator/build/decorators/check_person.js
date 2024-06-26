"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPerson = void 0;
const checkPerson = (age) => {
    return (target, key, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function () {
            if (age < 18) {
                console.log("Estamos cadastrando como menor de idade.");
            }
            else {
                console.log("Estamos cadastrando como maior de idade.");
                return originalMethod.apply(this);
            }
        };
    };
};
exports.checkPerson = checkPerson;
