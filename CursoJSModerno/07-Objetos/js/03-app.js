// fuera de los objetos ya no se usa doble punto ":"
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}


producto.imagen="imagen.jpg"
delete producto.disponible;

console.log(producto);