

let carritoDeCompras = []
const contenedorProducto = document.getElementById("contenedorProducto")
const contenedorCarrito = document.getElementById("contenedorCarrito")

const estufas = [
    {id:1, nombre: "estufa eco", calorias: 7500, precio: 29000, img: "media/img1.jpg"},
    {id:2, nombre: "estufa eco con visor", calorias: 7500, precio: 35000, img: "media/img2.jpg"},
    {id:3, nombre: "estufa mediana", calorias: 9500, precio: 43000, img: "media/img3.jpg"},
    {id:4, nombre: "estufa grande con horno", calorias: 9500, precio: 60000, img: "media/img4.jpg"},
]


for (const estufa of estufas) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<div class="card" style="width: 18rem;">
                                <img src="${estufa.img}" class="card-img-top" alt="...">
                                <div class="card-body"> 
                                    <h3> Producto: ${estufa.nombre.toUpperCase()} </h3>
                                    <p> Calorías: ${estufa.calorias} </p>
                                    <b> Precio: $ ${estufa.precio} </b>
                                    <button id= "boton${estufa.id}"><i class="fa-solid fa-cart-shopping"></i></button>
                                </div>
                            </div>`;
    contenedorProducto.appendChild(contenedor);

    let botonAgregar = document.getElementById(`boton${estufa.id}`)
        
    botonAgregar.addEventListener("click",()=>{
        agregarAlCarrito(estufa.id);
    })

}

function agregarAlCarrito(id){
    let producto = estufas.find(estufas => estufas.id === id)
    carritoDeCompras.push(producto);
    mostrarCarrito(producto);
}

function mostrarCarrito(producto){
    let carrito = document.createElement("div");
    carrito.innerHTML = `<div class="card" style="width: 18rem;">
                            <div class="card-body"> 
                                <h3> Producto: ${producto.nombre.toUpperCase()} </h3>
                                <b> Precio: $ ${producto.precio} </b>
                            </div>
                        </div>`
    contenedorCarrito.appendChild(carrito);
}


