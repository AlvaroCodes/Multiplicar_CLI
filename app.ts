
import { crearArchivo } from './helpers/multiplicar';
import { argv } from './config/yargs'

const {base, listar, hasta} = argv;
crearArchivo(base, listar, hasta).then(nombreArcio => console.log(nombreArcio, 'creado'))

