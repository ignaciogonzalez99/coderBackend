class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [10];
    this.mascotas = [10];
  }
  GetFullName() {
    return this.nombre + " " + this.apellido;
  }
  countMascotas() {
    return this.mascotas.length;
  }
}
// function countMascotas() {
//   //retorna la cantidad de mascotas que tiene
//   const largo = length(Usuario.mascotas);
//   return largo;
// }
// function getBookNames() {
//   const largo = length(Usuario.libros);
//   const lista = new string[largo]();
//   for (let i = 0; i < largo; i++) {
//     lista[i] = Usuario.libros[i].name;
//   }
//   return console.log(lista);
// }
// void addBook() {}

let usuario1 = new Usuario(
  "ignacio",
  "gonzalez",
  { nombre: "juego", autor: "jorge" },
  ["gato"]
);
console.log(usuario1.GetFullName());
console.log(usuario1.countMascotas());
