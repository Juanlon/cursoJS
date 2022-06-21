
//SIMULADOR INTERACTIVO


let precio = 0

function opcionPago(){

    if ((modoPago == "efectivo") || (modoPago == "EFECTIVO")){
        alert("El precio no tiene interés");
        alert("El precio final es " + precio);
    } else if((modoPago == "tarjeta") || (modoPago == "TARJETA")){
        alert("El precio tiene un interés del 15%");
        let precioInteres = calcularInteres(precio);
        alert("El precio final es " + precioInteres);
    } else {alert("ERROR");}
}

function calcularInteres(valor){
    return(valor * 1.15)
}

let ingreso = prompt("Seleccionar el número de modelo de estufa en stock");

let modoPago = prompt("Ingrese tarjeta o efectivo");
    switch (ingreso) {
        case "1":
            alert("Seleccionaste Estufa de 7500 Calorías");
            console.log(precio = parseInt(29000));
            opcionPago(modoPago);
            break;
        case "2":
            alert("Seleccionaste Estufa de 7500 Calorías con Visor");
            console.log(precio = parseInt(35000));
            opcionPago(modoPago);
            break;
        case "3":
            alert("Seleccionaste Estufa de 9500 Calorías Mediana");
            console.log(precio = parseInt(43000));
            opcionPago(modoPago);
            break;
        case "4":
            alert("Seleccionaste Estufa de 9500 Calorías con Horno");
            console.log(precio = parseInt(60000));
            opcionPago(modoPago);;
            break;
        default:
            alert("Error");
            break;
    }

let cantidad = parseInt(prompt("Ingrese Cantidad"))

function descuento(){
    if(cantidad == 1){
        alert("No aplica descuento")
    } else if((cantidad > 1) && (cantidad <=3)){
        alert("El precio final con descuento del 5% por unidad es " + (precio / 1.05));
    } else if ((cantidad >3) && (cantidad <=5)){
        alert("El precio final con descuento del 10% por unidad es " + (precio / 1.10));
    } else {alert("El precio final con descuento del 15% por unidad es " + (precio / 1.15))}
}

descuento(precio);


const estufas = [
    {id:1, nombre: "estufa eco", calorias: 7500, precio: 29000},
    {id:2, nombre: "estufa eco con visor", calorias: 7500, precio: 35000},
    {id:3, nombre: "estufa mediana", calorias: 9500, precio: 43000},
    {id:4, nombre: "estufa grande con horno", calorias: 9500, precio: 60000},
]

for (const estufa of estufas) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> ID: ${estufa.id} </h3> 
                           <p> Producto: ${estufa.nombre} </p>
                           <p> Calorías: ${estufa.calorias} </p>
                           <b> Precio: $ ${estufa.precio} </b>`;
    document.body.appendChild(contenedor);
}

const producto = estufas.find(estufa => {
    return estufa.id == ingreso});

let carrito = []

carrito.push(producto);

console.log(carrito);


