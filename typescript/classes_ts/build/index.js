"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./database/connection");
const app_1 = __importDefault(require("./database/app"));
const acessSystem = (ip, name) => {
    (0, connection_1.connection)({
        ip: ip,
        name: name,
    });
    (0, connection_1.statusConnection)({
        ip: ip,
        name: name,
    });
};
acessSystem("192.1.1", "Typescript");
(0, app_1.default)();
