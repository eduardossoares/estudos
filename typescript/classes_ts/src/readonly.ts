class Person {
    readonly id: string = "300"
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}

const eduardo = new Person("Eduardo", 21);

console.log(eduardo);