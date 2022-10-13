"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multiplicar_1 = require("./helpers/multiplicar");
const yargs_1 = require("./config/yargs");
const { base, listar, hasta } = yargs_1.argv;
(0, multiplicar_1.crearArchivo)(base, listar, hasta).then(nombreArcio => console.log(nombreArcio, 'creado'));
//# sourceMappingURL=app.js.map