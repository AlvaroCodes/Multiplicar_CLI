"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.argv = void 0;
const yargs_1 = __importDefault(require("yargs"));
exports.argv = yargs_1.default
    .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
})
    .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla por consola'
})
    .option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Muestra el número de resultados'
})
    .check((argv, options) => {
    if (isNaN(argv.b)) {
        throw 'La base tiene que ser un número';
    }
    if (isNaN(argv.h)) {
        throw 'Hasta tiene que ser un número';
    }
    return true;
})
    .argv;
//# sourceMappingURL=yargs.js.map