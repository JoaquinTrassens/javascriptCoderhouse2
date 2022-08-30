// Primer Pre-Entrega Proyecto final por TRASSENS JOAQUIN ELIAS
// Proyecto basado en el ingreso de productos de skins al carrito.

class Producto {
    constructor(id, arma, precio, tipo, skin) {
        this.id = id;
        this.arma = arma;
        this.precio = precio;
        this.tipo = tipo;
        this.skin = skin;
        this.cantidad = 0;
    }
    // venta = function (cantidad) {
    //     if (this.cantidad >= 0) {
    //         this.cantidad -= cantidad;
    //     } else {
    //         alert('No hay suficientes productos en stock');
    //     }
    // }
    // reposicion = function (cantidad) {
    //     this.cantidad += cantidad;
    // }
}

const producto1 = new Producto(01, "Pistola", 200, "USP", "Cortex");
const producto2 = new Producto(02, "Pistola", 200, "Glock","Fade");
const producto3 = new Producto(03, "Pistola", 300, "Dual-Berettas","Aladas");
const producto4 = new Producto(04, "Rifle", 2700, "AK-47","Elite");
const producto5 = new Producto(05, "Sub-fusil", 1200, "UMP","Cortex");

// producto1.reposicion(parseFloat(prompt("Ingresar cantidad a reponer de " + producto1.arma + " " + producto1.tipo + " " + producto1.skin)))
// producto1.venta(50)
// console.log(producto1);

// producto2.reposicion(parseFloat(prompt("Ingresar cantidad a reponer de " + producto2.arma + " " + producto2.tipo + " " + producto2.skin)))
// producto2.venta(50)
// console.log(producto2);

// producto3.reposicion(parseFloat(prompt("Ingresar cantidad a reponer de " + producto3.arma + " " + producto3.tipo + " " + producto3.skin)))
// producto3.venta(50)
// console.log(producto3);

// producto4.reposicion(parseFloat(prompt("Ingresar cantidad a reponer de " + producto4.arma + " " + producto4.tipo + " " + producto4.skin)))
// producto4.venta(50)
// console.log(producto4);

// producto5.reposicion(parseFloat(prompt("Ingresar cantidad a reponer de " + producto5.arma + " " + producto5.tipo + " " + producto5.skin)))
// producto5.venta(50)
// console.log(producto5);


let agregarAlCarrito = prompt(`Indicar numero de ID de los productos que desea agregar al carrito, 
PARA TERMINAR DE AGREGAR ESCRIBA"ESC"
\n LOS ID SON : 
\n  01 Pistola USP Cortex 
\n  02 Pistola Glock Fade 
\n  03 Pistola Dual-Berettas Aladas
\n  04 Rifle AK-47 Elite 
\n  05 Sub-fusil UMP Cortex`);

const productosEnCarrito = [];

while (agregarAlCarrito != "ESC") {
    switch (agregarAlCarrito) {
        case "01":
            productosEnCarrito.push(producto1.precio);
            break;
        case "02":
            productosEnCarrito.push(producto2.precio);
            break;
        case "03":
            productosEnCarrito.push(producto3.precio);
            break;
        case "04":
            productosEnCarrito.push(producto4.precio);
            break;
        case "05":
            productosEnCarrito.push(producto5.precio);
            break;
        default:
            alert('Ingrese un ID válido. LOS ID SON 01 02 03 04 05');
    }
    agregarAlCarrito = prompt ('Indicar numero de ID de los productos que desea agregar al carrito, PARA TERMINAR DE AGREGAR ESCRIBA"ESC"\n LOS ID SON : \n 01 Pistola USP Cortex \n  02 Pistola Glock Fade \n  03 Pistola Dual-Berettas Aladas \n  04 Rifle AK-47 Elite \n  05 Sub-fusil UMP Cortex');
}
console.log(productosEnCarrito);

let total = 0;
for (let i of productosEnCarrito) total += i;

alert ("Precio total a pagar: $" + total);
console.log (total);
