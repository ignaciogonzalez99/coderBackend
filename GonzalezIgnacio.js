class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }
  addMascota(pet) {
    this.mascotas.push(pet);
  }
  countMascotas() {
    return this.mascotas.length;
  }
  addBook(nombre, autor) {
    this.libros.push({ nombre, autor });
  }
  getBookNames() {
    let booknames = [];
    this.libros.map((libro) => booknames.push(libro.nombre));
    return booknames;
  }
}
const usuario1 = new Usuario(
  "ignacio",
  "gonzalez",
  [{ nombre: "GoT", autor: "George R. R. Martin" }],
  ["perro", "gato", "coballo"]
);

console.log(usuario1);
console.log(usuario1.getFullName());
console.log(usuario1.countMascotas());
console.log(usuario1.addMascota("hamster"));
console.log(usuario1.mascotas);
console.log(usuario1.countMascotas());
usuario1.addBook("El Principito", "Antoine de Saint-Exupéry");
console.log(usuario1.getBookNames());
