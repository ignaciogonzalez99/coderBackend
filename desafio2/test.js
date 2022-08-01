<<<<<<< HEAD
const Contenedor = require("./Contenedor");

async function main() {
  const product = new Contenedor("./productos.txt");
  const obj = {
    Nombre: "Harina",
    Marca: "Molino",
  };
  await product.save(obj);
  console.log("Muestro todos los productos");
  let allProducts = await product.getAll();
  console.log(allProducts);

  const idToSearch = 1;
  console.log(`Muestro el producto con id ${idToSearch}`);
  let productById = await product.getbyId(idToSearch);
  console.log(productById);
  //await product.deleteById(1); // comentar para agregar una lista considerable de elementos y luego descomentarlo para probarlo
  //await product.deleteAll();
}

main();
=======
const Contenedor = require("./Contenedor");

async function main() {
  const product = new Contenedor("./productos.txt");
  const obj = {
    Nombre: "Harina",
    Marca: "Molino",
  };
  await product.save(obj);
  console.log("Muestro todos los productos");
  let allProducts = await product.getAll();
  console.log(allProducts);

  const idToSearch = 1;
  console.log(`Muestro el producto con id ${idToSearch}`);
  let productById = await product.getbyId(idToSearch);
  console.log(productById);
  await product.deleteById(1); // comentar para agregar una lista considerable de elementos y luego descomentarlo para probarlo
}

main();
>>>>>>> 3c1c7d8d059f0abf4a42728503bf8f90b7f3d617
