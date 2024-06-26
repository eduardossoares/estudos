import { applyMixins } from "./mixin/apply_mixin";

class Automobile {
	turnOn(): void {
		console.log("Automóvel ligado com sucesso!");
	}

	turnOff(): void {
		console.log("Automóvel desligado com sucesso!");
	}
}

class Specification {
	description: string;

	constructor(description: string) {
		this.description = description;
	}
}

class Car {
	name: string;

	constructor(name: string) {
		this.name = name;
	}
}

interface Car extends Automobile, Specification {}

applyMixins(Car, [Automobile, Specification])

const gol = new Car("Gol");
gol.description = "Gol Bolinha.";
gol.turnOn();
gol.turnOff();
console.log(gol);