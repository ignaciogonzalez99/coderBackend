
//funciones
const mostrar =function(params){
    console.log(params);
};

mostrar('hola mundo');


const mostararFlecha = (param1)=>{
console.log(`${param1}`);
}

mostararFlecha('hola');

const a= 2**9;
console.log(a);

//callbacks
const ejecutar =unfunacion =>unfunacion();
const saludar=()=>console.log ('saludos');

ejecutar(saludar);

const ejecutarr =(unafuncion,param)=> unafuncion(param);
const saludarr =nombre=>console.log(`saludos, ${nombre}`);

ejecutarr(saludarr,'gabriel');


