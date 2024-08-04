

function encriptarTexto() {
    let textoaEncriptar = document.getElementById("textousuario").value;
    console.log(textoaEncriptar);
    console.log(containsUppercase(textoaEncriptar));
    console.log(containsNumber(textoaEncriptar));
    console.log(containsSpecialCharacter(textoaEncriptar));
    if(containsUppercase(textoaEncriptar) || containsNumber(textoaEncriptar) || containsSpecialCharacter(textoaEncriptar)){
        alert("El texto no debe contener mayusculas, numeros o caracteres especiales");

    }
    else{
        alert("El texto es válido");
    }

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