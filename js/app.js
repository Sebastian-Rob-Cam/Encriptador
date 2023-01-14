import getValueTextArea from "./functions/textArea.js";
import encriptar from "./functions/encriptar.js";
import showMessage from "./functions/showMenssage.js";

let buttonEncriptar = document.getElementById('encriptar');
let desencriptar = document.getElementById("desencriptar");

buttonEncriptar.addEventListener('click', () => {
    let value = getValueTextArea();
    let mensajeEncriptado = encriptar(value);
    
    showMessage(mensajeEncriptado);
})