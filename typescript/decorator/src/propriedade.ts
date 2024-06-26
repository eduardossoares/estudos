const nameIsValid = (size: number) => {
	return (target: any, key: string) => {
		let value = target[key];

		const getter = () => value;

		const setter = (value: string) => {
			if (value === "") {
				console.log("Você não pode deixar em branco!");
			} else if (value.length < size) {
				console.log("Mínimo de caracteres: 5.");
			} else {
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
	@nameIsValid(5)
	name: string;

	constructor(name: string) {
		this.name = name;
	}
}

const firstGame = new Game("FarCry 4");

console.log(firstGame.name);
