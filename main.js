// empezamos dando nuestro dato
let nombre = prompt(`Para comenzar ingrese su nombre`)
alert (`Hola ${nombre.toUpperCase()} voy acompañarte a lo largo de tu compra`)

// creo funciones
function cañoCorrugado (){
    let cantidad = parseInt(prompt(`ingrese la cantidad de rollos de caño corrugado estandar deseada`))
    let total = cantidad * 1500
    alert (`${nombre} tu total es $${total}`)

}
function cable (){
    let cantidad = parseInt(prompt(`ingrese la cantidad de rollos de cables estandar deseada`))
    let total = cantidad * 2000
    alert (`${nombre} tu total es $${total}`)
}
function termica (){
    let cantidad = parseInt(prompt(`ingrese la cantidad de termica estandar deseada`))
    let total = cantidad * 1000
    alert (`${nombre} tu total es $${total}`)
}
function modulos (){
    let cantidad = parseInt(prompt(`ingrese la cantidad de modulos estandar deseada`))
    let total = cantidad * 500
    alert (`${nombre} tu total es $${total}`)
}

function abrirMenu (menu){
    let opcion = prompt (`Que elemento electrico desea comprar. \ \n1 .caño corrugado \n2 .cable \n3 .termica \n4 .modulos`)
    return opcion
}
// seguimos con un menu de opciones 

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
// terminamos con una funcion con ciclo que nos permita finalizar el proceso

function continuar (){
    let continuar = prompt (`deseas continuar?. *"NO" para terminar tu compra`)
    while (continuar.toUpperCase() != "NO"){
        elementos();
        continuar = prompt (`deseas continuar?. *"NO" para terminar tu compra`);
    }
}
// invoco funciones
elementos();
continuar();

