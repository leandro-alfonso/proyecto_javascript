// creo objetos con class
class cables {
    constructor (id, tipo, diametro, color, precio,imagen,cantidad){
        this.id=id
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

class Otros {
    constructor (id, tipo, diametro, precio,imagen,cantidad){
        this.id=id
        this.tipo=tipo,
        this.diametro=diametro,
        this.precio=precio
        this.imagen=imagen
        this.cantidad=cantidad
    }
    datosCano(){
        alert(`${this.tipo} de ${this.diametro} numero de id es  ${this.id} \n PRECIO : ${this.precio}`)
    }
}

// OBJETO CABLES
const elemento1 =new cables (1,"unipolar",4+"mm","marron",2000,"img/rolloMarron.jpg",1)

const elemento2 =new cables (2,"unipolar",4+"mm","celeste",2000,"img/rolloCeleste.jpg",1)

const elemento3 =new cables (3,"unipolar",4+"mm","verde",2000,"img/rolloVerde.jpg",1)

// OBJETOS CAÑOS

const elemento4 =new Otros (4,"caño corrugado", "3/4",1500,"img/rolloCaño.jpg",1)

const elemento5 =new Otros (5,"caño corrugado", "7/8",1500,"img/rolloCaño.jpg",1)

const elemento6 =new Otros (6,"caño corrugado", "1",1500,"img/rolloCaño.jpg",1)

// OBJETO termica

const elemento7 =new Otros (7,"termica",10,1000,"img/termica4.jpg",1)

const elemento8 =new Otros (8,"termica",15,1000,"img/termica3.jpg",1)

const elemento9 =new Otros (9,"termica",20,1000,"img/termica2.jpg",1)

// objeto modulos

const elemento10 =new Otros (10,"modulo","10x5cm",500,"img/llave1.jpg",1)

const elemento11 =new Otros (11,"modulo","10x5cm",500,"img/llave2.jpg",1)

const elemento12 =new Otros (12,"modulo","10x5cm",500,"img/llave3.jpg",1)

//creo arrays
const catalogoCables = [elemento1,elemento2,elemento3]
const catalogoCano = [elemento4,elemento5,elemento6]
const catalogoTermica = [elemento7,elemento8,elemento9]
const catalogoModulos = [elemento10,elemento11,elemento12]
// array vacio de Carrito
let arrayCarrito = []



// capturo id para la creacion de plantillas
let articleElemento = document.getElementById("productos1")
let sectionCaño = document.getElementById("productos2")
let sectionTermica = document.getElementById("productos3")
let sectionModulos = document.getElementById("productos4")

// CREANDO PLANTILLAS
// plantilla cable
function verCatalogo(){
    articleElemento.innerHTML = ""
    catalogoCables.forEach((elemento)=>{let cablesStock = document.createElement("div")
    cablesStock.innerHTML = `<article id="${elemento.id}"class="card">
                                    <h3 class="tituloCard">CABLES</h3>
                                    <img class="img__catalogo" src=${elemento.imagen} alt="cable color ${elemento.color}">
                                    <div class="content">
                                        <p class="tipoElemento">Cable ${elemento.tipo} de 4mm color ${elemento.color} </p>
                                        <p class="precio">$ ${elemento.precio}</p>
                                        <button id=agregar${elemento.id} class="comprar">comprar</button>
                                    </div>    
                                </article>`
    articleElemento.appendChild(cablesStock)
        // evento para agregar al carrito
    const boton = document.getElementById(`agregar${elemento.id}`)   
    boton.addEventListener(`click`, ()=> {
    agregarAlCarrito(elemento.id)
})
    })
                 
    // plantilla caño
    sectionCaño.innerHTML = ""
    catalogoCano.forEach((elementoCano)=>{
        let canoStock = document.createElement("div")
        canoStock.innerHTML = `<article id="${elementoCano.id}"class="card">
                                    <h3 class="tituloCard">CAÑOS</h3>
                                    <img class="img__catalogo" src=${elementoCano.imagen} alt="caño ${elementoCano.diametro}">
                                    <div class="content">
                                        <p class="tipoElemento">${elementoCano.tipo} de ${elementoCano.diametro} </p>
                                        <p class="precio">$ ${elementoCano.precio}</p>
                                        <button id=agregar${elementoCano.id} class="comprar">comprar</button>
                                    </div>    
                                </article>`
    sectionCaño.appendChild(canoStock)
        // evento para agregar al carrito
    const boton = document.getElementById(`agregar${elementoCano.id}`)   
    boton.addEventListener(`click`, ()=> {
    agregarCarritoCano(elementoCano.id)
})
    })
    
    // plantilla termica 
    sectionTermica.innerHTML = ""
    catalogoTermica.forEach((elementoTermica)=>{
        let termicaStock = document.createElement("div")
        termicaStock.innerHTML = `<article id="${elementoTermica.id}"class="card">
                                        <h3 class="tituloCard">TERMICA  </h3>
                                        <img class="img__catalogo" src=${elementoTermica.imagen} alt="TERMICA DE ${elementoTermica.diametro}">
                                        <div class="content">
                                            <p class="tipoElemento">${elementoTermica.tipo} de ${elementoTermica.diametro} </p>
                                            <p class="precio">$ ${elementoTermica.precio}</p>
                                            <button id=agregar${elementoTermica.id} class="comprar">comprar</button>
                                        </div>    
                                    </article>`
    sectionTermica.appendChild(termicaStock)  
        // evento para agregar al carrito
    const boton = document.getElementById(`agregar${elementoTermica.id}`)   
    boton.addEventListener(`click`, ()=> {
    agregarCarritoTermica(elementoTermica.id)
})                        
    })
    // plantilla modulos
    sectionModulos.innerHTML = ""
    catalogoModulos.forEach((elementoModulos)=>{
        let moduloStock = document.createElement("div")
        moduloStock.innerHTML = `<article id="${elementoModulos.id}"class="card">
                                        <h3 class="tituloCard">MODULOS</h3>
                                        <img class="img__catalogo" src=${elementoModulos.imagen} alt="MODULO DE ${elementoModulos.diametro}">
                                        <div class="content">
                                            <p class="tipoElemento">${elementoModulos.tipo} de ${elementoModulos.diametro} </p>
                                            <p class="precio">$ ${elementoModulos.precio}</p>
                                            <button id=agregar${elementoModulos.id} class="comprar">comprar</button>
                                        </div>    
                                    </article>`
    sectionModulos.appendChild(moduloStock)

    // evento para agregar al carrito
    const boton = document.getElementById(`agregar${elementoModulos.id}`)   
    boton.addEventListener(`click`, ()=> {
    agregarCarritoModulos(elementoModulos.id)
})
    })
}
// cuando se oprime comprar , hago una busqueda del catalogo correspondiente y hago un push a mi array carrito
const agregarAlCarrito = (prodId) =>{
    const item = catalogoCables.find((prod) => prod.id === prodId)
    arrayCarrito.push(item)
    localStorage.setItem("carrito",JSON.stringify(arrayCarrito))
    actualizarCarrito()
}

const agregarCarritoCano = (prodId) =>{
    const item = catalogoCano.find((prod) => prod.id === prodId)
    arrayCarrito.push(item)
    localStorage.setItem("carrito",JSON.stringify(arrayCarrito))
    actualizarCarrito()
}

const agregarCarritoTermica = (prodId) =>{
    const item = catalogoTermica.find((prod) => prod.id === prodId)
    arrayCarrito.push(item)
    localStorage.setItem("carrito",JSON.stringify(arrayCarrito))
    actualizarCarrito()
}

const agregarCarritoModulos = (prodId) =>{
    const item = catalogoModulos.find((prod) => prod.id === prodId)
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


// funcion para el carrito donde se crea el elemento elegido
const actualizarCarrito = ()=> {
    contenedorCarrito.innerHTML = ""
    arrayCarrito.forEach((prod)=>{
        const div = document.createElement(`div`)
        div.className = (`productoEnCarrito`)
        div.innerHTML = `<p>${prod.tipo}</p>
        <p>$ ${prod.precio}</p>
        <p>cantidad: <span id "cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})"><img class="logo" src="./img/delete.png"></button>`
        contenedorCarrito.appendChild(div)
return actualizarCarrito
    })
    // reduce que me va ir haciendo un total de los elementos elegidos
    precioTotal.innerText = arrayCarrito.reduce((acumulador, prod) => acumulador + prod.precio, 0)

}

function ocultarCatalogo(){
    articleElemento.innerHTML =""
    sectionCaño.innerHTML =""
    sectionModulos.innerHTML =""
    sectionTermica.innerHTML =""
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

// localStorage para mi arrayCarrito
if(localStorage.getItem("carrito")){
    arrayCarrito = JSON.parse(localStorage.getItem("carrito"))
    actualizarCarrito()
    console.log(arrayCarrito)
}else {
    console.log(`primera vez`)
    localStorage.setItem("carrito",[])
    console.log(arrayCarrito)
}


