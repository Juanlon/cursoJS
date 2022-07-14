
let carritoDeCompras = []
const contenedorProducto = document.querySelector(".contenedorProducto")
const contenedorCarrito = document.querySelector(".contenedorCarrito")
const contenedorSeleccion = document.querySelector(".contenedorSeleccion")
const selectCalorias = document.querySelector(".selectCalorias")
const volver =  document.getElementById("volver")


const productoCarrito = JSON.parse(localStorage.getItem("producto"))




function mostrarCarrito(productoCarrito){
    let {id, nombre, calorias, precio, img} = productoCarrito

    let carrito = document.createElement("div");
    carrito.innerHTML = `<div class="card" id="cardCarrito" style="width: 18rem;">
                            <div class="card-body"> 
                                <h3> Producto: ${nombre.toUpperCase()} </h3>
                                <p> Calorías: ${calorias} </p>
                                <b> Precio: $ ${precio} </b>
                                <a class="botonComprar" href="https://www.facebook.com/marketplace/item/437276831497443/"><button id= "boton${id}"><i class="fa-solid fa-cart-shopping"></i></button></a>
                            </div>
                        </div>`
                        
    contenedorCarrito.appendChild(carrito);
}
mostrarCarrito(productoCarrito)

let botonComprar = document.querySelector(".botonComprar")
        
    botonComprar.addEventListener("click",()=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tu compra se completa en Marketplace',
            showConfirmButton: false,
            timer: 1500
            })
    })


