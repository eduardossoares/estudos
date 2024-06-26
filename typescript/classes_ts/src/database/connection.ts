type Connection = {
	ip: string;
	name: string;
};

export const connection = (info: Connection): boolean => {
	console.log(`Conexão realizada com sucesso ao servidor ${info.ip}.`);
	return true;
};

export const statusConnection = (info: Connection): void => {
    console.log(`Servidor ${info.name} funcionando 100%.`);
};