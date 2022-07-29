let carritoDeCompras = []
const DOMProductos = document.getElementById("productos")
const DOMCarrito = document.getElementById("carrito")
/*
const contenedorSeleccion = document.querySelector(".contenedorSeleccion")
const selectCalorias = document.querySelector(".selectCalorias")
const listaProductos = document.querySelector("#productos");
const contadorCarrito = document.querySelector("#contadorCarrito")
const precioTotal = document.querySelector("#precioTotal")
*/

const url = "js/estufas.json"; 

const traerDatos = async ()=>{
    let respuesta = await fetch(url)
    return respuesta.json()
}

const renderizarDOM = async()=>{
    let productos = await traerDatos()
    let productosPanelVista = ""
    productos.forEach(producto => {
        const {id, nombre, calorias, precio, img} = producto
        {
            productosPanelVista +=
            `<div class="card" style="width: 18rem;">
                <img src="${img}" class="card-img-top" alt="...">
                <div class="card-body"> 
                    <h3> Producto: ${nombre.toUpperCase()} </h3>
                    <p> Calorías: ${calorias} </p>
                    <b> Precio: $ ${precio} </b>
                    <button data-id="${id}" id="mybtn"><i class="fa-solid fa-cart-shopping"></i>Comprar</button>
                </div>
            </div>`
            
        }
        
    });
    DOMProductos.innerHTML = productosPanelVista
}

renderizarDOM()

DOMProductos.addEventListener("click", (e)=>{
    if(e.target.id === "mybtn"){
      guardarProductos(e.target.dataset.id)
    }
})

const guardarProductos = async (id) =>{
    let productos = await traerDatos()
    let productoEncontrado = productos.find(producto => producto.id === parseInt(id))
    let productoStorage = JSON.parse(localStorage.getItem(id))
    if(productoStorage === null){
        localStorage.setItem(id, JSON.stringify({...productoEncontrado, cantidad: 1}))
        recorrerStorage()
    }else{
        let productoExiste = JSON.parse(localStorage.getItem(id))
        productoExiste.cantidad = productoExiste.cantidad + 1
        productoExiste.precio = productoExiste.precio + productoEncontrado.precio
        localStorage.setItem(id, JSON.stringify(productoExiste))
        recorrerStorage()
    }
}

const recorrerStorage = ()=>{
    carritoDeCompras.length = 0
    for(let index = 0; index < localStorage.length; index ++){
        const element = localStorage.key(index)
        carritoDeCompras.push(JSON.parse(localStorage.getItem(element)))
    }
    renderCarrito()
}

const renderCarrito = () =>{
    if(carritoDeCompras.length > 0){
    DOMCarrito.innerHTML = ""
    carritoDeCompras.forEach(producto => {
        const {id, nombre, calorias, precio, img, cantidad} = producto
            DOMCarrito.innerHTML +=
            `<div class="card" style="width: 18rem;">
                <img src="${img}" class="card-img-top" alt="...">
                <div class="card-body"> 
                    <h3> Producto: ${nombre.toUpperCase()} </h3>
                    <p> Calorías: ${calorias} </p>
                    <p> Cantidad: ${cantidad} </p>
                    <b> Precio: $ ${precio} </b>
                    <button data-id="${id}" id="mybtn"><i class="fa-solid fa-cart-shopping"></i>Comprar</button>
                </div>
            </div>`
            
        });
    }else{
        DOMCarrito.innerHTML +=
            `<div class="card" style="width: 18rem;">
                <div class="card-body"> 
                    <h3> El carrito está vacío </h3>
                    <p> Seleccione el modelo de estufa que más le convenga </p>
                </div>
            </div>`
    }
}
    
    
