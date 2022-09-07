let arrayLogin = []
let arrayCarrito = []

function finalizado(){

    location.href = "../index.html";
    arrayCarrito.length = 0
    localStorage.setItem("carrito",JSON.stringify(arrayCarrito))
    // actualizarCarrito()
}

function crear (){
    let nameInput = document.getElementById(`input__name`).value;
    let emailInput = document.getElementById(`input__email`).value;
    let passwordInput = document.getElementById(`input__password`).value
    
    class Usuario {
        constructor (nombre,email,pass){
            this.nombre=nombre
            this.email = email
            this.pass=pass
        }
    }
    
    const usuario1 = new Usuario (nameInput,emailInput,passwordInput)
// desestructuracion trayendo a variables los atributos
const {nombre,email,pass}=usuario1
arrayLogin.push(usuario1)

//probando el desestructurado con alias 
const {nombre:name, pass:passw}=usuario1
console.log(name)
console.log(passw)

// utilizando operador logico and con las variables creadas en la desestructuracion
email === emailInput && localStorage.setItem(`registro`,JSON.stringify(arrayLogin))
Toastify({
    text: "Registrando",
    duration: 1500,
    gravity: 'top',
    position: 'left'
}).showToast();
// utilizando setTimeout
setTimeout(()=> {
    Toastify({
        text: "Registrado!",
        duration: 2500,
        gravity: 'top',
        position: 'left'
    }).showToast();
}, 2000)

}

// capturando id y agregando eventos
const btnLogins = document.getElementById ("btn__registrarse")
btnLogins.addEventListener("click",crear);

const ingreso = document.getElementById (`btnIngreso`)
ingreso.addEventListener("click",ingresar);


// function para ingresar
function ingresar(){
    let ingresarEmail = document.getElementById(`iniciar__email`).value;
    let ingresarPassword = document.getElementById(`iniciar__password`).value;
    let registros =JSON.parse(localStorage.getItem(`registro`))
        for (const datos of registros){
            let contraseña = datos.pass
            let correo = datos.email
            if(contraseña == ingresarPassword && correo == ingresarEmail){
                Swal.fire({
                    title: 'Compra realizada!',
                    icon: 'success',
                    text: 'Su compra estara llegando en las proximas 48hs.',
                    imageUrl: '../img/repartt.png',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                    confirmButtonText: "aceptar",
                   }).then((result)=>{
                            if(result.isConfirmed){
                      finalizado()
                            }
                          })
            }else{
                Swal.fire({
                    title: 'usuario no encontrado',
                    text: 'Registrarse antes de ingresar',
                    icon: 'question',
                    confirmButtonText: 'aceptar'
                }) 
            }
        }

}
