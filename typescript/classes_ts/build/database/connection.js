"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusConnection = exports.connection = void 0;
const connection = (info) => {
    console.log(`Conexão realizada com sucesso ao servidor ${info.ip}.`);
    return true;
};
exports.connection = connection;
const statusConnection = (info) => {
    console.log(`Servidor ${info.name} funcionando 100%.`);
};
exports.statusConnection = statusConnection;
