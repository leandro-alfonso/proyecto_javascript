// creo funciones
function canoCorrugado (){
    let cantidad = parseInt(prompt(`ingrese la cantidad de rollos de caño corrugado estandar deseada`))
    let total = cantidad * 1500
    alert (`${nombre} tu total es $${total}`)
    continuar()
}
function cable (){
    let cantidad = parseInt(prompt(`ingrese la cantidad de rollos de cables estandar deseada`))
    let total = cantidad * 2000
    alert (`${nombre} tu total es $${total}`)
    continuar()
}
function termica (){
    let cantidad = parseInt(prompt(`ingrese la cantidad de termica estandar deseada`))
    let total = cantidad * 1000
    alert (`${nombre} tu total es $${total}`)
    continuar()
}
function modulos (){
    let cantidad = parseInt(prompt(`ingrese la cantidad de modulos estandar deseada`))
    let total = cantidad * 500
    alert (`${nombre} tu total es $${total}`)
    continuar()
}

// creo funciones de busqueda

function busqueda(){
    let buscar = prompt (`ingrese el id del elemento cable que desea buscar`)
    // aplicando .find
    let buscado = catalogoCables.find((electrico)=>electrico.id == buscar)
    console.log(buscado)
    if (buscar == 1){
        alertaConsola()
    }else if (buscar==2){
        alertaConsola()
    }else if(buscar==3){
        alertaConsola()
    }else {
        alert(`no hay coincidencias intente otro ID`)
    }
}
function busquedaCano(){
    let buscarCano = prompt (`ingrese el id del elemento caño que desea buscar`)
    // aplicando metodo .find
    let busquedadeCano = catalogoCano.find((caneria)=>caneria.id == buscarCano)
    console.log(busquedadeCano)
    if (buscarCano == 4){
        alertaConsola()
    }else{
        alert(`no hay coincidencias intente otro ID`)
    }
}

function opcionBusqueda (){
    let opcionesBusqueda = prompt (`desea realizar una busqueda de :\n1 cables \n2 caños `)
    if (opcionesBusqueda == 1){
        busqueda()
    }else if (opcionesBusqueda == 2){
        busquedaCano()
    }else{
        alert(`no hay coincidencias intente nuevamente`)
    }
}
// menu secundario de opciones 

function elementos(){
    let listaMenu = abrirMenu()
    if (listaMenu == 1){
        canoCorrugado();
        
    }else if (listaMenu == 2){
        cable();
    }else if (listaMenu == 3){
        termica()
    }else if (listaMenu == 4) {
        modulos()
    }else {
        alert (`selecciona una opcion valida`)
    }

}
// funcion con condicional que nos permite seguir comprando o volver a el menu principal

function continuar (){
    let continuar = prompt (`deseas continuar?. *"NO" para terminar tu compra`)
    if(continuar.toUpperCase() == "SI"){
        elementos()
    }else if (continuar.toUpperCase == "NO"){
        return salir
    }else {
        alert (`gracias por su compra`)
    }
}
 
// creo objetos con class
class cables {
    constructor (id, tipo, diametro, color, precio,imagen){
        this.id=id
        this.tipo=tipo,
        this.diametro=diametro,
        this.color=color,
        this.precio=precio
        this.imagen=imagen
    }
    // metodo de la clase
    mostrarDatos(){
        alert(`cable ${this.tipo} ${this.color} de ${this.diametro} numero de id es ${this.id} \n PRECIO : ${this.precio}`)
    }
    
}

class Otros {
    constructor (id, tipo, diametro, precio,imagen){
        this.id=id
        this.tipo=tipo,
        this.diametro=diametro,
        this.precio=precio
        this.imagen=imagen
    }
    datosCano(){
        alert(`${this.tipo} de ${this.diametro} numero de id es  ${this.id} \n PRECIO : ${this.precio}`)
    }
}
// OBJETO CABLES
const elemento1 =new cables (1,"unipolar",4+"mm","marron","$2000","img/rolloMarron.jpg")

const elemento2 =new cables (2,"unipolar",4+"mm","celeste","$2000","img/rolloCeleste.jpg")

const elemento3 =new cables (3,"unipolar",4+"mm","verde","$2000","img/rolloVerde.jpg")

// OBJETOS CAÑOS

const elemento4 =new Otros (4,"caño corrugado", "3/4","$1500","img/rolloCaño.jpg")

const elemento5 =new Otros (5,"caño corrugado", "7/8","$1500","img/rolloCaño.jpg")

const elemento6 =new Otros (6,"caño corrugado", "1","$1500","img/rolloCaño.jpg")

// OBJETO termica

const elemento7 =new Otros (7,"termica",10,"$1000","img/termica4.jpg")

const elemento8 =new Otros (8,"termica",15,"$1000","img/termica3.jpg")

const elemento9 =new Otros (9,"termica",20,"$1000","img/termica2.jpg")

// objeto modulos

const elemento10 =new Otros (10,"modulo","10x5cm","$500","img/llave1.jpg")

const elemento11 =new Otros (11,"modulo","10x5cm","$500","img/llave2.jpg")

const elemento12 =new Otros (12,"modulo","10x5cm","$500","img/llave3.jpg")

//creo arrays
const catalogoCables = [elemento1,elemento2,elemento3]
const catalogoCano = [elemento4,elemento5,elemento6]
const catalogoTermica = [elemento7,elemento8,elemento9]
const catalogoModulos = [elemento10,elemento11,elemento12]

// CREANDO PLANTILLAS
// plantilla cable

let articleElemento = document.getElementById("productos1")
catalogoCables.forEach((elemento)=>{let cablesStock = document.createElement("div")
cablesStock.innerHTML = `<article id="${elemento.id}"class="card">
                                <h3 class="tituloCard">CABLES</h3>
                                <img src=${elemento.imagen} alt="cable color ${elemento.color}">
                                <div class="content">
                                    <p class="tipoElemento">Cable ${elemento.tipo} de 4mm color ${elemento.color} </p>
                                    <p class="precio">${elemento.precio}</p>
                                    <a href="" target="blank"  class="comprar">comprar</a>
                                </div>    
                            </article>`
articleElemento.appendChild(cablesStock)
})
             
// plantilla caño

let sectionCaño = document.getElementById("productos2")
catalogoCano.forEach((elementoCano)=>{
    let canoStock = document.createElement("div")
    canoStock.innerHTML = `<article id="${elementoCano.id}"class="card">
                                <h3 class="tituloCard">CAÑOS</h3>
                                <img src=${elementoCano.imagen} alt="caño ${elementoCano.diametro}">
                                <div class="content">
                                    <p class="tipoElemento">${elementoCano.tipo} de ${elementoCano.diametro} </p>
                                    <p class="precio">${elementoCano.precio}</p>
                                    <a href="" target="blank"  class="comprar">comprar</a>
                                </div>    
                            </article>`
sectionCaño.appendChild(canoStock)
})

// plantilla termica 
let sectionTermica = document.getElementById("productos3")
catalogoTermica.forEach((elementoTermica)=>{
    let termicaStock = document.createElement("div")
    termicaStock.innerHTML = `<article id="${elementoTermica.id}"class="card">
                                    <h3 class="tituloCard">TERMICA  </h3>
                                    <img src=${elementoTermica.imagen} alt="TERMICA DE ${elementoTermica.diametro}">
                                    <div class="content">
                                        <p class="tipoElemento">${elementoTermica.tipo} de ${elementoTermica.diametro} </p>
                                        <p class="precio">${elementoTermica.precio}</p>
                                        <a href="" target="blank"  class="comprar">comprar</a>
                                    </div>    
                                </article>`
sectionTermica.appendChild(termicaStock)                           
})
// plantilla modulos
let sectionModulos = document.getElementById("productos4")
catalogoModulos.forEach((elementoModulos)=>{
    let moduloStock = document.createElement("div")
    moduloStock.innerHTML = `<article id="${elementoModulos.id}"class="card">
                                    <h3 class="tituloCard">MODULOS</h3>
                                    <img src=${elementoModulos.imagen} alt="MODULO DE ${elementoModulos.diametro}">
                                    <div class="content">
                                        <p class="tipoElemento">${elementoModulos.tipo} de ${elementoModulos.diametro} </p>
                                        <p class="precio">${elementoModulos.precio}</p>
                                        <a href="" target="blank"  class="comprar">comprar</a>
                                    </div>    
                                </article>`
sectionModulos.appendChild(moduloStock)
})

