// empezamos dando nuestro dato
let nombre = prompt(`Para comenzar ingrese su nombre`).toUpperCase();
alert (`Hola ${nombre} voy acompañarte a lo largo de tu compra`)

// creo funciones
function cañoCorrugado (){
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

// menu secundario de opciones 

function elementos(){
    let listaMenu = abrirMenu()
    if (listaMenu == 1){
        cañoCorrugado();
        
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
    let opcion = parseInt (prompt(`ingrese el numero de la opcion que desea
                                    1- ver catalogo disponible?
                                    2- Abrir menu de compra?
                                    0- salir`))
    menu(opcion)
}

// creo un objeto con class
class cables {
    constructor (id, tipo, diametro, color){
        this.id=id
        this.tipo=tipo,
        this.diametro=diametro,
        this.color=color
    }
    // metodo de la clase
    mostrarDatos(){
        alert(`cable ${this.tipo} ${this.color} de ${this.diametro} numero de id es ${this.id}`)
    }
}
// array
let catalogo = []
catalogo.push(new cables (1,"unipolar",4+"mm","marron"))

catalogo.push(new cables (2,"unipolar",4+"mm","celeste"))

catalogo.push(new cables (3,"unipolar",4+"mm","verde"))

// funcion que recorre array

function verCatalogo(){
    alert (`acontinuacion le mostraremos el catalogo disponible de cables`)
    for (let electricidad of catalogo){
        electricidad.mostrarDatos()
    }
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
                default:
                    alert(`ingrese una opcion valida`)
    }
}
// ciclo while que me permite salir 
let salir
while(salir != true){
    preguntandoOpcion()
}






