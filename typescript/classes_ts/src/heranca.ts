class User {
    protected id: number;
    name: string;
    email: string;

    constructor(id: number, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

class Admin extends User {
    access: boolean;

    constructor(id: number, name: string, email: string, access: boolean) {
        super(id, name, email);
        this.access = access;
    }

    isAdmin(): void{
        const isAdmin = this.access === true ? `${this.name} é admin.` : `${this.name} não é admin.`;
        console.log(isAdmin);
    }
}

const user3219 = new Admin(123, "Eduardo", "eduardo@teste.com", true);
console.log(user3219);
user3219.isAdmin();