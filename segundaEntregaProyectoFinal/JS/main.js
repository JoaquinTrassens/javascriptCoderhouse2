// VARIABLES
const productosCaninos = [
    {
        id: 1,
        nombre: `Shampoo pelaje blanco 300ml`,
        img: './multimedia/shampoo1.png'
    },
    {
        id: 2,
        nombre: `Shampoo jabon blanco cremoso 300ml`,
        img: './multimedia/shampoo2.png'
    },
    {
        id: 3,
        nombre: `Sampoo 2 en 1 300ml`,
        img: './multimedia/shampoo3.png'
    },
    {
        id: 4,
        nombre: `Shampoo neutro belleza 300ml`,
        img: './multimedia/shampoo4.png'
    },
    {
        id: 5,
        nombre: `Shampoo sensible canela y manzana 300ml`,
        img: './multimedia/shampoo5.png'
    },
    {
        id: 6,
        nombre: `Shampoo puppy 300ml`,
        img: './multimedia/shampoo6.png'
    },
    {
        id: 7,
        nombre: `Mordillo de goma cachorro`,
        img: './multimedia/mordillo.jpg'
    },
    {
        id: 8,
        nombre: `Juguete pato con sonido`,
        img: './multimedia/patito.jpg'
    }
]
const contenedorProductos = document.querySelector(".contenedorProductos");
const contenedorListado = document.querySelector(".contenedorListado");
// Array del carrito
const carrito = [];


// EVENTOS

document.addEventListener("DOMContentLoaded", function () {
    mostrarProductos();
})

// FUNCIONES

function mostrarProductos() {
    productosCaninos.forEach(function (productoCanino) {
        const divProducto = document.createElement("div");
        divProducto.classList.add("card");

        // creacion de la etiqueta imagen
        const imagenProducto = document.createElement("img");
        imagenProducto.src = productoCanino.img;
        imagenProducto.className = "imagenProductoCSS";

        // creacion de la etiqueta h2
        const tituloProducto = document.createElement("h2");
        tituloProducto.textContent = productoCanino.nombre;
        tituloProducto.className = "tituloProductoCSS";

        // creacion de la etiqueta button
        const botonProducto = document.createElement("button");
        botonProducto.textContent = "Agregar al carrito";
        botonProducto.className = "botonProductoCSS"
        // Agregue el evento para agregar el producto
        botonProducto.onclick = function () {
            agregarAlCarrito(productoCanino.id);
        }

        // Agregamos los elementos al card
        divProducto.appendChild(imagenProducto);
        divProducto.appendChild(tituloProducto);
        divProducto.appendChild(botonProducto);

        contenedorProductos.appendChild(divProducto);

    })
}

function agregarAlCarrito(id) {
    const productoEncontrado = productosCaninos.find(function
        (productoCanino) {
        return productoCanino.id === id
    })
    carrito.push(productoEncontrado);
    mostrarListadoCarrito(carrito);
}

function mostrarListadoCarrito(listado) {
    contenedorListado.innerHTML = "";

    listado.forEach(function (productoCanino) {
        const divProducto = document.createElement("div");
        divProducto.classList.add("card");

        // creacion de la etiqueta h2
        const tituloProducto = document.createElement("h2");
        tituloProducto.textContent = productoCanino.nombre;
        tituloProducto.className = "tituloProductoCSS";

        const botonProducto = document.createElement("button");
        botonProducto.textContent = "Eliminar del carrito";
        botonProducto.className = "botonProductoCSS"
        // Agregue el evento para eliminar el producto
        // botonProducto.onclick = function () {
        //     eliminarDelCarrito(productoCanino.id);
        // }

        // Agregamos los elementos al card
        divProducto.appendChild(tituloProducto);
        divProducto.appendChild(botonProducto);

        contenedorListado.appendChild(divProducto);

    })
}

// function eliminarDelCarrito(id) {
//     const productoEncontrado = productosCaninos.find(function
//         (productoCanino) {
//         return productoCanino.id === id
//     })
//     carrito.remove(productoEncontrado);
//     mostrarListadoCarrito(carrito);
// }