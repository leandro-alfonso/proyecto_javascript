let arrayLogin = []

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
console.log(arrayLogin)
console.log  (nombre)
console.log  (email)
console.log  (pass)
//probando el desestructurado con alias 
const {nombre:name, pass:passw}=usuario1
console.log(name)
console.log(passw)

// utilizando operador logico and con las variables creadas en la desestructuracion
email === emailInput && localStorage.setItem(`registro`,JSON.stringify(arrayLogin))
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
console.log(ingresarEmail)
console.log(ingresarPassword)
    const resultado = arrayLogin.find (usuario=> usuario.email == ingresarEmail && usuario.pass == ingresarPassword)
    console.log(resultado)
// operador ternario
    resultado ? location.href = `../pages/compra.html` : alert(`error`)
}

