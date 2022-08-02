

const express =require('express');
const app=express();
const Contenedor =require('./Contenedor.js');
const product = new Contenedor(`./productos.txt`)


app.get('/productos',async (req,res)=>{
    const item =await product.getAll()
    res.send(item);
});

app.get('/productoRandom',async (req,res)=>{
    const items = await product.getAll();
    const randomCheto = items[Math.floor(items.length*Math.random())]
    res.send(randomCheto);
});

const server =app.listen(8080, ()=>{
    console.log(`esta esuchando correctamente ${server.address().port}`)
})


