const fs=require('fs');

const crearArchivo= async (base = 5, listar = false, hasta = 3) => {
    try {

    
       

        let salida='';

        for(let i=1; i<=hasta; i++){
        salida +=`${base} X ${i} = ${base*i}\n`;
        }

        if ( listar ) {

            console.log("===============================".rainbow);
            console.log(`Tabla  del ${base}`.green);
            console.log("===============================".rainbow);
            console.log(salida.rainbow);
        }
        

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

            return (`tabla del ${base} creado`);

    } catch (err) {
        throw err;
    }

    

      

    }
   

module.exports = {
     crearArchivo 
}