
let carritoDeCompras = []
const listaProductos = document.querySelector("#productos");
const contenedorSeleccion = document.querySelector(".contenedorSeleccion")
const contadorCarrito = document.querySelector("#contadorCarrito")
const precioTotal = document.querySelector("#precioTotal")
const botonCarrito = document.querySelector("#botonCarrito")
const contenedorCarrito = document.querySelector(".contenedorCarrito")
const contenedorProducto = document.querySelector(".contenedorProducto")
const finalizarCompra = document.querySelector(".finalizarCompra")
const botonCompra = document.querySelector("#botonCompra")


const url = "js/estufas.json"; 

const pedirProductos = async ()=>{
    const respuesta = await fetch(url)
    return respuesta.json()
}

const renderizarDom = async() => {
    let estufas = await pedirProductos()
    estufas.forEach(estufa => {
        const div = document.createElement("div");
        const {id, nombre, calorias, precio, img} = estufa;
        div.innerHTML = `<div class="card" style="width: 18rem;">
                          <img src="${img}" class="card-img-top" alt="...">
                          <div class="card-body"> 
                              <h3> Producto: ${nombre.toUpperCase()} </h3>
                              <p> Calorías: ${calorias} </p>
                              <b> Precio: $ ${precio} </b>
                              <button class="botonSeleccion" id= "boton${id}"><i class="fa-solid fa-cart-shopping"></i></button>
                          </div>
                      </div>`;
        
        listaProductos.append(div);

        let botonAgregar = document.getElementById(`boton${id}`)
        
        botonAgregar.addEventListener('click',()=>{
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
            let yaExiste = carritoDeCompras.find(elemento => elemento.id == id)

            if(yaExiste){
                yaExiste.cantidad = yaExiste.cantidad + 1
                document.getElementById(`cantidad${yaExiste.id}`).innerHTML = `<p id="cantidad${yaExiste.id}">cantidad: ${yaExiste.cantidad}</p>`
                actualizarCarrito() 
            }else{
                let producto = estufas.find(estufas => estufas.id === id)
                producto.cantidad = 1 
                carritoDeCompras.push(producto);
                actualizarCarrito();   
                mostrarCarrito(producto);
            }              
            
        } 
           
}

renderizarDom()

function mostrarCarrito(producto){
    let carrito = document.createElement("div");
    carrito.innerHTML = `<div class="card" id= "cardCarrito" style="width: 18rem;">
                            <div class="card-body"> 
                                <h3> Producto: ${producto.nombre.toUpperCase()} </h3>
                                <p> Calorías: ${producto.calorias} </p>
                                <b> Precio: $ ${producto.precio} </b>
                                <p id="cantidad${producto.id}">cantidad: ${producto.cantidad}</p>
                                <button class="botonTacho" id= "eliminar${producto.id}"><i class="fa-solid fa-trash"></i></button>
                            </div>
                        </div>`
    contenedorSeleccion.appendChild(carrito);

    let botonEliminar = document.getElementById(`eliminar${producto.id}`)
        botonEliminar.addEventListener('click',()=>{
            if(producto.cantidad > 0){
            producto.cantidad = producto.cantidad - 1 
            document.getElementById(`cantidad${producto.id}`).innerHTML = `<p id="cantidad${producto.id}">cantidad: ${producto.cantidad}</p>`
            actualizarCarrito()
            }else{
                actualizarCarrito()
        }       
    })

    botonCarrito.addEventListener("click", ()=>{
        const guardarProducto = JSON.stringify(producto);   
        localStorage.setItem(producto.id, guardarProducto)  
        const productoCarrito = JSON.parse(localStorage.getItem(producto.id))
        listaProductos.innerHTML = ""
        contenedorSeleccion.innerHTML = ""
        contenedorProducto.innerHTML = "" 
        comprarCarrito(productoCarrito)
        document.getElementById("botonCompra").style.display = "block"
        document.getElementById("botonCarrito").style.display = "none"
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tu compra se completa en Marketplace',
            showConfirmButton: false,
            timer: 1500
            })
        
    })

}


function actualizarCarrito() {
    contadorCarrito.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.cantidad, 0)
    precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + (el.precio * el.cantidad) , 0)          
}

function comprarCarrito(productoCarrito){
    let {id, nombre, calorias, precio, img, cantidad} = productoCarrito
    
    let comprar = document.createElement("div");
    comprar.innerHTML = `<div class="card" id="cardCompra" style="width: 18rem;">
                            <div class="card-body"> 
                                <h3> Producto: ${nombre.toUpperCase()} </h3>
                                <p> Calorías: ${calorias} </p>
                                <p> Cantidad: ${cantidad} </p>
                                <b> Precio: $ ${precio} </b>
                            </div>
                        </div>`
                        
    contenedorCarrito.appendChild(comprar);

}





