const express =require('express');

const app=express();
let visitas=0;
app.get('/',(req,res)=>{
    res.send(`<h1 style="color:blue;">hola mundo</h1>`);
});

app.get('/visitas',(req,res)=>{
    visitas+=1;
    res.send(`la cantidad de visitas es:${visitas}`);
});
app.get('/fyh',(req,res)=>{
    const date=new date
    res.send(date.toLocaleString());
});

const server =app.listen(8080, ()=>{
    console.log(`esta esuchando correctamente ${server.address().port}`)
})

server.on('error',error=>console.log('error en servidor ${error}'));