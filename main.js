// creo objetos con class
class cables {
    constructor (id, titulo, tipo, diametro, color, precio,imagen,cantidad){
        this.id=id
        this.titulo=titulo
        this.tipo=tipo,
        this.diametro=diametro,
        this.color=color,
        this.precio=precio
        this.imagen=imagen
        this.cantidad=cantidad
    }
    // metodo de la clase
    mostrarDatos(){
        alert(`cable ${this.tipo} ${this.color} de ${this.diametro} numero de id es ${this.id} \n PRECIO : ${this.precio}`)
    }
    
}

//creo arrays
let estanteria = []

// incorporando fetch 
fetch("catalogo.json")
.then(response => response.json())
.then(data=>{
    for(let catalogo of  data){
        let catalogoNuevo = new cables(catalogo.id,catalogo.titulo, catalogo.tipo, catalogo.diametro, catalogo.color, catalogo.precio, catalogo.imagen,catalogo.cantidad)
        estanteria.push(catalogoNuevo)
    }
})

// array vacio de Carrito
let arrayCarrito = []

// capturo id para la creacion de plantillas
let articleElemento = document.getElementById("productos1")

// CREANDO PLANTILLAS
// plantilla cable
function verCatalogo(){
    articleElemento.innerHTML = ""
    estanteria.forEach((elemento)=>{let cablesStock = document.createElement("div")
    cablesStock.innerHTML = `<article id="${elemento.id}"class="card">
                                    <h3 class="tituloCard">${elemento.titulo} </h3>
                                    <img class="img__catalogo" src=${elemento.imagen} alt="cable color ${elemento.color}">
                                    <div class="content">
                                        <p class="tipoElemento">${elemento.tipo} de ${elemento.diametro} </p>
                                        <p class="precio">$ ${elemento.precio}</p>
                                        <button id=agregar${elemento.id} class="comprar">comprar</button>
                                    </div>    
                                </article>`
    articleElemento.appendChild(cablesStock)
        // evento para agregar al carrito
    const boton = document.getElementById(`agregar${elemento.id}`)   
    boton.addEventListener(`click`, ()=> {
    agregarAlCarrito(elemento.id)
    Toastify({
        text: "Agregado!",
        duration: 3000,
        gravity: 'top',
        position: 'left',
        className: `toastify`
    }).showToast();
})
    })
}                

// cuando se oprime comprar , hago una busqueda del catalogo correspondiente y hago un push a mi array carrito
const agregarAlCarrito = (prodId) =>{
    const item = estanteria.find((prod) => prod.id === prodId)
    arrayCarrito.push(item)
    localStorage.setItem("carrito",JSON.stringify(arrayCarrito))
    actualizarCarrito()
}

// constante que elimina productos del carrito 
const eliminarDelCarrito = (prodId)=>{
    const item = arrayCarrito.find((prod)=>prod.id=== prodId)
    const indice = arrayCarrito.indexOf(item)
    arrayCarrito.splice(indice,1)
    localStorage.setItem("carrito",JSON.stringify(arrayCarrito))
    actualizarCarrito()
}
// constante para llevar mis compras al modal
const contenedorCarrito = document.getElementById(`modal`)

// constante para hacer un total de compra
const precioTotal = document.getElementById("Total")


// funcion para el carrito ,donde se crea el elemento elegido
const actualizarCarrito = ()=> {
    contenedorCarrito.innerHTML = ""
    arrayCarrito.forEach((prod)=>{
        const div = document.createElement(`div`)
        div.className = (`productoEnCarrito`)
        div.innerHTML = `<p>${prod.tipo}</p>
        <p>$ ${prod.precio}</p>
        <p>cantidad: <span id "cantidad">${prod.cantidad}</span></p>
        <button class="btnBo"onclick="eliminarDelCarrito(${prod.id})"><img class="logo" src="./img/remove.png"></button>`
        contenedorCarrito.appendChild(div)
return actualizarCarrito
    })
    // reduce que me va ir haciendo un total de los elementos elegidos
    precioTotal.innerText = arrayCarrito.reduce((acumulador, prod) => acumulador + prod.precio, 0)
}

function ocultarCatalogo(){
    articleElemento.innerHTML =""
}

// creo eventos
// evento que me muestra catalogo
const mostrarCatalogoBtn = document.getElementById("verCatalogo");
mostrarCatalogoBtn.addEventListener("click",verCatalogo);

// evento que me oculta catalogo
let ocultarCatalogoBtn = document.getElementById("ocultarCatalogo");
ocultarCatalogoBtn.onclick = ocultarCatalogo

// capturo id para boton vaciar carrito
const botonVaciar = document.getElementById(`vaciarCarrito`)

// evento que vacia carrito
botonVaciar.addEventListener(`click`, ()=> {
    arrayCarrito.length = 0
    localStorage.setItem("carrito",JSON.stringify(arrayCarrito))
    actualizarCarrito()
})

// // capturo id para comprar
 const botonComprar = document.getElementById ("comprar")
//  evento que me envia al html comprar
botonComprar.addEventListener("click",verCompra);

// funcion que me envia al html comprar , con OPERADOR TERNARIO
function verCompra(){
    arrayCarrito == 0 ? Swal.fire({
        position: 'top-end',
        title: 'Carrito vacio!',
        text: 'agregue productos al carrito',
        icon: 'error',
        confirmButtonText: 'aceptar'
    }) : location.href = "./pages/login.html"
}

// OPERADOR LOGICO OR
arrayCarrito =JSON.parse(localStorage.getItem("carrito")) || []
actualizarCarrito()
