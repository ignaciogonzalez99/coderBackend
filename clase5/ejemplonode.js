const personas = [
    {
        nombre: 'Alex',
        edad: 27
    },
    {
        nombre: 'Fernando',
        edad: 24
    },
    {
        nombre: 'Facundo',
        edad: 18
    }
];
const regresarNombre = (persona) => {
   return persona.nombre; 
}
const nombreDePersonas = personas.map((persona) =>persona.nombre);
console.log(nombreDePersonas);