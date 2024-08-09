var btnEncriptar = document.querySelector("#encriptar");
var btnDesencriptar = document.querySelector("#desencriptar");
var header = document.querySelector("#headerresultado");
var mensaje = document.querySelector("#mensajeresultado");
var mensajeFinal = document.querySelector("#resultado");
var btnCopiar = document.querySelector("#copiar");
var muneco = document.querySelector("#imagen");
var textoEncriptado = "";
var textoaEncriptar = document.querySelector("#textousuario").value;



function setInitialValues(){
    muneco.classList.remove("hidden");
    header.innerHTML = "Ningún mensaje fue encontrado";
    mensaje.innerHTML = "Ingresa el texto que deseas encriptar o desencriptar";
    mensajeFinal.innerHTML = "";
}
setInitialValues();

btnEncriptar.addEventListener("click", function (event){
    event.preventDefault();
    showResults();
});
function replaceLetters(textoaEncriptar){
    switch(textoaEncriptar){
        case "e":
            return "enter";
        case "i":
            return "imes";
        case "a":
            return "ai";
        case "o":
            return "ober";
        case "u":
            return "ufat";
        default:
            return textoaEncriptar;
    }

}
function encriptar() {
    textoaEncriptar = document.querySelector("#textousuario").value;

    if(containsUppercase(textoaEncriptar) || containsNumber(textoaEncriptar) || containsSpecialCharacter(textoaEncriptar)){
        alert("El texto no debe contener mayusculas, numeros o caracteres especiales");

    }
    else{
        console.log("Encriptando...");
        var textoValidoParaEncriptar = textoaEncriptar
        var textoEncriptado = textoValidoParaEncriptar.replace(/a|e|i|o|u/g, replaceLetters);
        console.log(textoEncriptado);
        return textoEncriptado;
    }
}
function showResults(){
    muneco.classList.add("hidden");
    header.innerHTML = "Tu mensaje fue encriptado";
    mensaje.innerHTML = "Tu mensaje encriptado es:";
    mensajeFinal.classList.remove("hidden");
    mensajeFinal.innerHTML = encriptar();
    btnCopiar.classList.remove("hidden");

}
function containsUppercase(textoaEncriptar) {
    return /[A-Z]/.test(textoaEncriptar);
}
function containsNumber(textoaEncriptar) {
    return /[0-9]/.test(textoaEncriptar);
}
function containsSpecialCharacter(textoaEncriptar) {
    return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(textoaEncriptar);
}