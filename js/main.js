//EJERCICIO 1

let entrada = parseInt(prompt("Ingrese un número entero"));

for (let i = 0; i <= entrada; i++) {
    let operacion = entrada + i;
    alert(entrada + "+" + i + "=" + operacion);
}

//EJERCICIO 2

let producto = prompt("Ingrese el nombre de un producto");
let stock = "";
while (producto != "ESC") {
    stock = stock + producto + "\n";
    alert("el producto seleccionado es " + producto); 
    producto = prompt("Ingrese un nuevo producto");  
}
alert(stock) 

//EJERCICIO 3

let ingreso =  prompt("Seleccionar el número de modelo de estufa en stock");
    switch (ingreso) {
        case "1":
            alert("Seleccionaste Estufa de 7500 Calorías");
            break;
        case "2":
            alert("Seleccionaste Estufa de 7500 Calorías con Visor");
            break;
        case "3":
            alert("Seleccionaste Estufa de 9500 Calorías Mediana");
            break;
        case "4":
            alert("Seleccionaste Estufa de 9500 Calorías con Horno");
            break;
        default:
            alert("Error");
            break;
    }
    

