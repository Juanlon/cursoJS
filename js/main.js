let carritoDeCompras = []
const contenedorSeleccion = document.querySelector(".contenedorSeleccion")
const selectCalorias = document.querySelector(".selectCalorias")
const listaProductos = document.querySelector("#productos");
const contadorCarrito = document.querySelector("#contadorCarrito")
const precioTotal = document.querySelector("#precioTotal")


const url = "js/estufas.json"; 

const pedirProductos = async ()=>{
    const respuesta = await fetch(url)

    const estufas = await respuesta.json()

    estufas.forEach((estufas) => {
      const div = document.createElement("div");
      const {id, nombre, calorias, precio, img} = estufas;
      div.innerHTML = `<div class="card" style="width: 18rem;">
                        <img src="${img}" class="card-img-top" alt="...">
                        <div class="card-body"> 
                            <h3> Producto: ${nombre.toUpperCase()} </h3>
                            <p> Calorías: ${calorias} </p>
                            <b> Precio: $ ${precio} </b>
                            <button id= "boton${id}"><i class="fa-solid fa-cart-shopping"></i></button>
                        </div>
                    </div>`;

      listaProductos.append(div);

    let botonAgregar = document.getElementById(`boton${id}`)
        
    botonAgregar.addEventListener("click",()=>{
        agregarAlCarrito(id);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Seleccionaste el producto',
            showConfirmButton: false,
            timer: 1500
          })
    })

    });
    function agregarAlCarrito(id){
        let producto = estufas.find(estufas => estufas.id === id)
        carritoDeCompras.push(producto);
        actualizarCarrito();
        const guardarProducto = JSON.stringify(producto);   
        mostrarCarrito(producto);
        localStorage.setItem("producto", guardarProducto)    
    }
   
}

pedirProductos()


function mostrarCarrito(producto){
    let carrito = document.createElement("div");
    carrito.innerHTML = `<div class="card" id= "cardCarrito" style="width: 18rem;">
                            <div class="card-body"> 
                                <h3> Producto: ${producto.nombre.toUpperCase()} </h3>
                                <p> Calorías: ${producto.calorias} </p>
                                <b> Precio: $ ${producto.precio} </b>
                                <button id= "boton${producto.id}"><i class="fa-solid fa-trash"></i></button>
                            </div>
                        </div>`
    contenedorSeleccion.appendChild(carrito);

}

function actualizarCarrito() {
    contadorCarrito.innerText = carritoDeCompras.length
    precioTotal.innerText = carritoDeCompras.reduce((acc, estufas)=> acc + estufas.precio, 0)
}

/*
selectCalorias.addEventListener("change", (estufas) => {
    limpiarLista();
    if(selectCalorias.value == "todas"){
        pedirProductos();
    }else if (selectCalorias.value === "7500"){
        let filtroCalorias = estufas.filter(estufas => estufas.calorias === 7500);
        pedirProductos(filtroCalorias);
    }else {
        let filtroCalorias2 = estufas.filter(estufas => estufas.calorias === 9500)
        pedirProductos(filtroCalorias2)
    }
})
*/

function limpiarLista() {
    listaProductos.innerHTML = "";
}



