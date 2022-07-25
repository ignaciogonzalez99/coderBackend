const { promises: fs } = require("fs");

class Contenedor {
  constructor(Direccion) {
    this.Direccion = Direccion;
  }

  async save(obj) {
    try {
      let EstaEnProducto = await fs.readFile(this.Direccion, "utf-8");

      if (EstaEnProducto.length == 0) {
        obj.id = 1;
        const ArregloObjeto = [obj];
        const Objeto = JSON.stringify(ArregloObjeto);

        await fs.appendFile(this.Direccion, Objeto);
      } else {
        const ProductosObjeto = JSON.parse(EstaEnProducto);
        let LargoArreglo = ProductosObjeto.length;
        obj.id = LargoArreglo + 1;
        ProductosObjeto.push(obj);
        const Objeto = JSON.stringify(ProductosObjeto);
        await fs.writeFile(this.Direccion, Objeto);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getbyId(id) {
    const Producto = await this.getAll();
    const ProductoById = Producto.find((prod) => prod.id == id);
    return ProductoById;
  }
  async getAll() {
    try {
      const Producto = await fs.readFile(this.Direccion, "utf8");
      return JSON.parse(Producto);
    } catch (error) {
      console.log(error, "hubo un error en el getAll");
      return [];
    }
  }
  async deleteById(id) {
    const Producto = await this.getAll();
    const NuevoProducto = Producto.filter((prod) => prod.id !== id);
    NuevoProducto.forEach((prod) => {
      if (prod.id > id) {
        prod.id--;
      }
    });
    console.log(JSON.stringify(NuevoProducto));
    await fs.writeFile(this.Direccion, JSON.stringify(NuevoProducto));
  }

  async deleteAll() {
    const arrayVacio = [];
    await fs.writeFile(this.Direccion, arrayVacio);
  }
}

module.exports = Contenedor;
