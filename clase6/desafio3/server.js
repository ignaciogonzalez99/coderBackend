const express =require('express');
const app=express();
const Contenedor =require('./Contenedor.js');

async function verproductos(){
    const product = new Contenedor(`./productos.txt`);
    return await product.getAll();
}
app.get('/productos',async (req,res)=>{
    res.send(await verproductos());
});
async function Random(){
    const rand =verproductos();
    const randlength= parseInt.rand;
     const alazar = math.Random(randlength);
    const byId= nuevo.getbyId(randomNumber);
    let randomNumber = Math.ceil(Math.random() * randlength);
      console.log(randomNumber)
  return await randomNumber;
}




app.get('/productoRandom',async (req,res)=>{
    res.send(await randomNumber());
});

const server =app.listen(8080, ()=>{
    console.log(`esta esuchando correctamente ${server.address().port}`)
})
