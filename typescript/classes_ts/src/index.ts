import { connection, statusConnection } from "./database/connection";
import status from './database/app'

const acessSystem = (ip: string, name: string): void => {
	connection({
		ip: ip,
		name: name,
	});

    statusConnection({
        ip: ip,
        name: name,
    })
};

acessSystem("192.1.1", "Typescript");
status();