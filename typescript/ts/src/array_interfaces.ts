// interface TechProps {
//     id: string;
//     name: string;
//     slug: (string | number)[];
// }

// const firstTec: TecnologiaProps = {
//     id: "1",
//     name: "Typescript",
//     slug: [5, "typescript do zero"],
// }

interface TechProps {
	id: string;
	name: string;
	description?: string;
}

interface NameProps {
	tech: TechProps[];
}

const frontEnd: NameProps = {
	tech: [
		{ id: "12", name: "ReactJS", description: "Biblioteca" },
		{ id: "43", name: "VueJS", description: "Framework Frontend" },
	],
};

console.log(frontEnd.tech[0]);
