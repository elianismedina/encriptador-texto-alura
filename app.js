

function encriptar() {
    let textoaEncriptar = document.getElementById("textousuario").value;
    console.log(textoaEncriptar);
    
    if(containsUppercase(textoaEncriptar) || containsNumber(textoaEncriptar) || containsSpecialCharacter(textoaEncriptar)){
        alert("El texto no debe contener mayusculas, numeros o caracteres especiales");

    }
    else{
        console.log("Encriptando...");
        const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
        const textoValidoParaEncriptar = textoaEncriptar
        for(let i=0; i < matrizCodigo.length; i++){
            if(textoValidoParaEncriptar.includes(matrizCodigo[i][0])){
                textoEncriptado = textoValidoParaEncriptar.replace(matrizCodigo[i][0], matrizCodigo[i][1]);

            }

        }
        console.log(textoEncriptado);
        return textoEncriptado;
        

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