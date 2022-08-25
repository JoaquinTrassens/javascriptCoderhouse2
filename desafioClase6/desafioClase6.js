class Productos{
    constructor(producto,cantidad,precio,vendedor){
        this.producto = producto;
        this.cantidad = cantidad;
        this.precio = precio;
        this.vendedor = vendedor;    
        
    }
}

let listaProductos = [];

for(let i=0; i<4; i++){
    let producto = prompt(`Ingrese el producto`);
    let cantidad = prompt(`Ingrese la cantidad`);
    let precio = prompt(`Ingrese el precio`);
    let vendedor = prompt(`Ingrese el vendedor`);

    let nuevoProducto = new Productos(producto,cantidad,precio,vendedor);
    listaProductos.push(nuevoProducto);
}

console.log(listaProductos);

for(let producto of listaProductos){
    console.log(`-------------`)
    console.log(`Producto:`,producto.producto);
    console.log(`Cantidad:`,producto.cantidad);
    console.log(`Precio:`,producto.precio);
    console.log(`vendedor:`,producto.vendedor);
    console.log(`-------------`)
}