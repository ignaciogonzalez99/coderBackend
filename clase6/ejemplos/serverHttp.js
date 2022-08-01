const http=require('http');

const server= http.createServer((peticion, respuesta)=>{
respuesta.end('holamundo');
});


const connectedServer = server.listen(8080,()=>{
    console.log('server hhtp escuchanmdo en el puerto ${connectedServer.address().port}')} );