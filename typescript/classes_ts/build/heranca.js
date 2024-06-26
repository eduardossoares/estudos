"use strict";
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
class Admin extends User {
    constructor(id, name, email, access) {
        super(id, name, email);
        this.access = access;
    }
    isAdmin() {
        const isAdmin = this.access === true ? `${this.name} é admin.` : `${this.name} não é admin.`;
        console.log(isAdmin);
    }
}
const user3219 = new Admin(123, "Eduardo", "eduardo@teste.com", true);
console.log(user3219);
user3219.isAdmin();
