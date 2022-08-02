// empezamos dando nuestro dato
let nombre = prompt(`Para comenzar ingrese su nombre`).toUpperCase();
alert (`Hola ${nombre} voy acompañarte a lo largo de tu compra`)

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

function abrirMenu (menu){
    let opcion = prompt (`Que elemento electrico desea comprar. \ \n1 .caño corrugado \n2 .cable \n3 .termica \n4 .modulos`)
    return opcion
}

function alertaConsola(){
    alert(`Por consola vera el resultado de la busqueda realizada`)
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
 
function preguntandoOpcion (){
    let opcion = parseInt (prompt(`ingrese el numero de la opcion que desea : \n(Para busqueda por ID consulte antes el catalogo)\n
                                    1- ver catalogo disponible?
                                    2- Abrir menu de compra?
                                    3- iniciar busqueda por ID
                                    4- ver catalogo completo por consola?
                                    0- salir`))
    menu(opcion)
}

// creo objetos con class
class cables {
    constructor (id, tipo, diametro, color, precio){
        this.id=id
        this.tipo=tipo,
        this.diametro=diametro,
        this.color=color,
        this.precio=precio
    }
    // metodo de la clase
    mostrarDatos(){
        alert(`cable ${this.tipo} ${this.color} de ${this.diametro} numero de id es ${this.id} \n PRECIO : ${this.precio}`)
    }
}

class cano {
    constructor (id, tipo, diametro, precio){
        this.id=id
        this.tipo=tipo,
        this.diametro=diametro,
        this.precio=precio
    }
    datosCano(){
        alert(`${this.tipo} de ${this.diametro} numero de id es  ${this.id} \n PRECIO : ${this.precio}`)
    }
}
//creo arrays
let catalogoCano = []
let catalogoCables = []


catalogoCables.push(new cables (1,"unipolar",4+"mm","marron","$2000"))

catalogoCables.push(new cables (2,"unipolar",4+"mm","celeste","$2000"))

catalogoCables.push(new cables (3,"unipolar",4+"mm","verde","$2000"))

catalogoCano.push(new cano (4,"caño corrugado", "3/4","$1500" ))


// funcion que recorre array

function verCatalogo(){
    alert (`acontinuacion le mostraremos el catalogo disponible de cables`)
    for (let electricidad of catalogoCables){
        electricidad.mostrarDatos()
    }
    verCatalogoCaño()
}

function verCatalogoCaño(){
    alert(`acontinuacion le mostraremos el catalogo disponible de caños`)
    for (let canosDisponible of catalogoCano){
        canosDisponible.datosCano()
    }
}
// aplicando metodo .forEach
function recorrer(){
    alert(`Por consola vera todo el catalogo completo por el momento`)
    catalogoCables.forEach ((cables)=>console.log(cables))
    catalogoCano.forEach ((cano)=>console.log(cano))
}


// menu principal

function menu(opcionSeleccionada){
    switch(opcionSeleccionada){
        case 0:
            salir = true
            alert (`gracias por visitarnos`)
            break
            case 1:
                verCatalogo()
            break
            case 2:
                elementos()
            break
            case 3:
                // recorrer()
                opcionBusqueda()
            break
            case 4:
                recorrer()
            break
                default:
                    alert(`ingrese una opcion valida`)
    }
}
// ciclo while que me permite salir 
let salir
while(salir != true){
    preguntandoOpcion()
}





