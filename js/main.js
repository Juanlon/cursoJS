

let carritoDeCompras = []
const contenedorProducto = document.querySelector(".contenedorProducto")
const contenedorCarrito = document.querySelector(".contenedorCarrito")
const selectCalorias = document.querySelector(".selectCalorias")
const volver =  document.getElementById("volver")

const estufas = [
    {id:1, nombre: "estufa eco", calorias: 7500, precio: 29000, img: "media/img1.jpg"},
    {id:2, nombre: "estufa eco con visor", calorias: 7500, precio: 35000, img: "media/img2.jpg"},
    {id:3, nombre: "estufa mediana", calorias: 9500, precio: 43000, img: "media/img3.jpg"},
    {id:4, nombre: "estufa grande con horno", calorias: 9500, precio: 60000, img: "media/img4.jpg"},
]

function mostrarProducto(lista){


for (const estufa of lista) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<div class="card" style="width: 18rem;">
                                <img src="${estufa.img}" class="card-img-top" alt="...">
                                <div class="card-body"> 
                                    <h3> Producto: ${estufa.nombre.toUpperCase()} </h3>
                                    <p> Calorías: ${estufa.calorias} </p>
                                    <b> Precio: $ ${estufa.precio} </b>
                                    <a href="html/carrito.html"><button id= "boton${estufa.id}"><i class="fa-solid fa-cart-shopping"></i></button></a>
                                </div>
                            </div>`;
    contenedorProducto.appendChild(contenedor);

    let botonAgregar = document.getElementById(`boton${estufa.id}`)
        
    botonAgregar.addEventListener("click",()=>{
        agregarAlCarrito(estufa.id);
        limpiarLista();
    })

}
}

mostrarProducto(estufas);



selectCalorias.addEventListener("change", () => {
    limpiarLista();
    if(selectCalorias.value == "todas"){
        mostrarProducto(estufas);
    }else if (selectCalorias.value === "7500"){
        let filtroCalorias = estufas.filter(estufa => estufa.calorias === 7500);
        mostrarProducto(filtroCalorias);
    }else {
        let filtroCalorias2 = estufas.filter(estufa => estufa.calorias === 9500)
        mostrarProducto(filtroCalorias2)
    }
})


function agregarAlCarrito(id){
    let producto = estufas.find(estufas => estufas.id === id)
    carritoDeCompras.push(producto);   
    mostrarCarrito(producto);
}

function mostrarCarrito(producto){
    let carrito = document.createElement("div");
    carrito.innerHTML = `<div class="card" style="width: 18rem;">
                            <img src="${producto.img}" class="card-img-top" alt="...">
                            <div class="card-body"> 
                                <h3> Producto: ${producto.nombre.toUpperCase()} </h3>
                                <p> Calorías: ${producto.calorias} </p>
                                <b> Precio: $ ${producto.precio} </b>
                                <a href="https://www.facebook.com/marketplace/item/437276831497443/"><button id= "boton${producto.id}"><i class="fa-solid fa-cart-shopping"></i></button></a>
                            </div>
                        </div>`
    contenedorCarrito.appendChild(carrito);
}

function limpiarLista() {
    contenedorProducto.innerHTML = "";
}


const guardarProductos = (clave, valor) => {localStorage.setItem(clave, valor)}
for (const estufa of estufas){
    guardarProductos("listado", JSON.stringify(estufas))
}

const arrayGuardado = JSON.parse(localStorage.getItem("listado"))

console.log(arrayGuardado)

volver.addEventListener("click",()=>{
    mostrarProducto(estufas);
    limpiarLista();
})
