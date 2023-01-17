import getValueTextArea from "./functions/textArea.js";
import encriptar from "./functions/encriptar.js";
import desencriptar from "./functions/desencriptar.js";
import showMessage from "./functions/showMenssage.js";

let buttonEncriptar = document.getElementById('encriptar');
let buttonDesencriptar = document.getElementById("desencriptar");

buttonEncriptar.addEventListener('click', () => {
    let value = getValueTextArea();
    let mensajeEncriptado = encriptar(value);
    
    showMessage(mensajeEncriptado);
})

buttonDesencriptar.addEventListener('click', () => {
    let value = getValueTextArea();
    let mensajeDesencriptado = desencriptar(value);

    showMessage(mensajeDesencriptado);
})