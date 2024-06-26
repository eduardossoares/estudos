import { checkPerson } from './decorators/check_person'

class Person {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    @checkPerson(18)
    registerPerson() {
        console.log(`Bem vindo ao sistema, ${this.name}.`);
    }
}

const firstPerson = new Person("Eduardo");
firstPerson.registerPerson();