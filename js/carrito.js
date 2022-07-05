
let carritoDeCompras = []
const contenedorProducto = document.querySelector(".contenedorProducto")
const contenedorCarrito = document.querySelector(".contenedorCarrito")
const selectCalorias = document.querySelector(".selectCalorias")
const volver =  document.getElementById("volver")

const estufas = [
    {id:1, nombre: "estufa eco", calorias: 7500, precio: 29000, img: "../media/img1.jpg"},
    {id:2, nombre: "estufa eco con visor", calorias: 7500, precio: 35000, img: "../media/img2.jpg"},
    {id:3, nombre: "estufa mediana", calorias: 9500, precio: 43000, img: "../media/img3.jpg"},
    {id:4, nombre: "estufa grande con horno", calorias: 9500, precio: 60000, img: "../media/img4.jpg"},
]


const productoCarrito = JSON.parse(localStorage.getItem("producto"))




function mostrarCarrito(productoCarrito){
    let {id, nombre, calorias, precio, img} = productoCarrito

    let carrito = document.createElement("div");
    carrito.innerHTML = `<div class="card" id="cardCarrito" style="width: 18rem;">
                            <div class="card-body"> 
                                <h3> Producto: ${nombre.toUpperCase()} </h3>
                                <p> Calorías: ${calorias} </p>
                                <b> Precio: $ ${precio} </b>
                                <a href="https://www.facebook.com/marketplace/item/437276831497443/"><button id= "boton${id}"><i class="fa-solid fa-cart-shopping"></i></button></a>
                            </div>
                        </div>`
                        
    contenedorCarrito.appendChild(carrito);
}
mostrarCarrito(productoCarrito)


