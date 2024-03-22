
// let number = prompt("Numero a cambiar : ")

// function convierteString(num) {
//     if(typeof num === "number"){
//         let string = num.toString()
//         return string
//     }else{
//         return "Debo ser ejecutada con un numero"
//     }
// }

// console.log(convierteString(+number))



// let par = prompt("Dime un numero : ")


// function esPar(par){
//     if(par % 2 === 0){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(esPar(par));

function resta(a, b) {
    return a - b;
}

console.log(resta(2,1))


function Saynota(nota) {
    switch (nota) {
        case 0:
            return "Insuficiente"
        case 1:
            return "Insuficiente"
        case 2:
            return "Insuficiente"
        case 3:
            return "Insuficiente"    
        case 4:
            return "Insuficiente"  
        case 5:
            return "Suficiente"
        case 6:
            return "Suficiente"
        case 7:
            return "Notable"
        case 8:
            return "Notable"    
        case 9:
            return "Sobresaliente"
        case 10:
            return "Sobresaliente"
        default:
            return "No me has pasado una nota entre (0-10)"
    }
}

console.log(Saynota(8))


function duplicaNumero(number){
    if(typeof number === "number"){
        return number * 2
    }else{
        return "Debo ser ejecutada con un numero"
    }
}

console.log(duplicaNumero("8"))


function caracterInicial(string){
    if(string.length === 0){
        return "Debo ser ejecutada con un string no vacio"
    }if(typeof string === "string"){
        return string.charAt(0)
    }else {
        return "Debo ser ejecutada con un string"
    }
}

console.log(caracterInicial(""))

function ultimoCaracter(ultimocaracter) {
    if(ultimocaracter.length === 0){
        return "Debo ser ejecutada con un string no vacio"
    }else if(typeof ultimocaracter === "string"){
        return ultimocaracter.charAt(ultimocaracter.length -1)
    }else{
        return "Debo ser ejecutada con un string"
    }
}

console.log(ultimoCaracter("hola"))

function cuentaCaracteres(cuentacaracteres){
    if(typeof cuentacaracteres === "string"){
        return cuentacaracteres.length
    }else{
        return "Debo ser ejecutada con un string"
    }
}

console.log(cuentaCaracteres("caray"))

function esPalidromo(espalidromo){
    let contrario= ""
    if(typeof espalidromo === "string" && espalidromo != ""){
        for (let i = espalidromo.length; i >= 0; i--) {
            if(espalidromo[i]){
                contrario += espalidromo[i]
            }
        }
        if (contrario === espalidromo){
            return "Es palindromo"
        }else{
            return "No lo es"
        }
        
    }else{
        return "no es un formato correcto"
    }
}

console.log(esPalidromo("eye"))

function getPrecioMostrar (decimales) {
    if(typeof decimales === "number"){
        return decimales.toFixed(2) + "€"
    }else{
        return "no es un formato correcto"
    }
}

console.log(getPrecioMostrar(5))

function division (c,d){
    return c / d
}

console.log(division(4,2))

function arrayNumeros(array){
    let newarray = []
    for (let i = 0; i < array.length; i++) {
        if(array[i] >= 5){
            newarray.push(array[i])
        }
    }
    return newarray
}

console.log(arrayNumeros([1,2,3,4,5,6,7]))

// let primito = +prompt("Dime un numero primo o no primo")
let primito = 8
function primos(primo){
    for (let i = 2; i < primo; i++) {
        if (primo % i === 0) {
          return "No es primo";
        }
      }
      return "Es primo";
}

console.log(primos(primito))

function obtenerImpares(array){
    let newarray = []
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 !== 0){
            newarray.push(array[i])
        }
    }
    return newarray
}

console.log(obtenerImpares([1,2,3,4,5,6]))

function sumarArray(array){
    let suma = 0
    for (let i = 0; i < array.length; i++) {
        suma += array[i]
    }
    return suma
}

console.log(sumarArray([1,2,3]))

function multArray(array){
    let mult = 1
    for (let i = 0; i < array.length; i++) {
        mult = mult * array[i]
    }
    return mult
}

console.log(multArray([2,3,5]))

function checkPassword(){
    let contraseña = "12345"
    let prueba
    for (let i = 3; i >= 0; i--) {
        prueba = prompt(`Intento nº ${i}`)
        if(prueba == contraseña){
           return alert("Enhorabuena")
        }
    }
}

console.log(checkPassword())