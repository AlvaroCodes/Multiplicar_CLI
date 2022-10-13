const fs = require('fs');
export const crearArchivo = async (base: number = 5, listar = false, hasta = 10):Promise<string | undefined> => {

    try {
        let salida: string = '';

        // Tabla de multiplicar 
        for (let i: number = 0; i <= hasta; i++) {
            salida += `${i} x ${base} = ${i * base}\n`;
        }

        
        if(listar){
            // console.clear();
            console.log('===============');
            console.log(`Tabla del ${base}`);
            console.log('===============');
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `table-${base}.txt`;
    } catch (error) {
        console.log(error)
    }
}