interface GameProps {
	readonly id: string;
	title: string;
	description: string;
	platform: string[];
    dlc?: DLC;
}

interface DLC extends GameProps {
	newMap: string[];
}

const leftForDeadDLC: DLC = {
	id: "90",
	title: "First DLC",
	description: "New Maps Releases",
	platform: ["PS4", "Xbox One", "PC"],
    newMap: ["Catalunia Map"],
};

const leftForDead: GameProps = {
	id: "1",
	title: "Left4Dead",
	description: "Shooter and zombies game",
	platform: ["PS4", "Xbox One", "PC"],
    dlc: leftForDeadDLC
};

console.log(leftForDead);
