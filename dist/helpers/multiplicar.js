"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearArchivo = void 0;
const fs = require('fs');
const crearArchivo = (base = 5, listar = false, hasta = 10) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let salida = '';
        // Tabla de multiplicar 
        for (let i = 0; i <= hasta; i++) {
            salida += `${i} x ${base} = ${i * base}\n`;
        }
        if (listar) {
            // console.clear();
            console.log('===============');
            console.log(`Tabla del ${base}`);
            console.log('===============');
            console.log(salida);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `table-${base}.txt`;
    }
    catch (error) {
        console.log(error);
    }
});
exports.crearArchivo = crearArchivo;
//# sourceMappingURL=multiplicar.js.map