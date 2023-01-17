// Funcion para obtener el texto ingresado por el usuario
function getValueTextArea() {
    let text = document.getElementById("floatingTextarea2").value;
    return text;
};

// Funcion para encriptar el texto, se le debe dar el texto a esta funcion
function encriptar(text) {

    let mensajeEncriptado = '';

    if(text.length) {
        let arr = [];

        for(let i = 0; i < text.length; i++) {

           arr.push(text[i]);

           for(let i =0; i < arr.length; i++) {
                if(arr[i] === 'e') {
                    arr[i] = 'enter';
                } else if(arr[i] === 'i') {
                    arr[i] = 'imes';
                } else if(arr[i] === 'a') {
                    arr[i] = 'ai';
                } else if(arr[i] === 'o') {
                    arr[i] = 'ober';
                } else if(arr[i] === 'u') {
                    arr[i] = 'ufat';
                }
            }
        }
        mensajeEncriptado = arr.join('');
    } else {
        throw Error("Se debe introducir al menos un caracter.");
    }
    
    return mensajeEncriptado;
}

// Funcion para desencriptar el texto, se debe ingresar el texto
function desencriptar(text) {

    let mensajeDesencriptado = '';

    if(text.length) {
        let arr = text.split(' '); // se separa el texto ingresado por palabras gracias a los espacios.
        let textDesencryp = [];

        // se recorre el arr para poder analizar cada palabra.
        for(let i = 0; i < arr.length; i++) {
            let string = arr[i];
            // Se recorre cada palabra, letra por letra, para poder identificar donde se deben sustituir.
            for(let i = 0; i < string.length; i++) {
                if(string[i] === 'e') {
                    string = string.replace('enter', 'e');
                } else if(string[i] === 'i') {
                    string = string.replace('imes', 'i');
                } else if( string[i] === 'a') {
                    string = string.replace('ai', 'a');
                } else if(string[i] === 'o') {
                    string = string.replace('ober', 'o');
                } else if(string[i] === 'u') {
                    string = string.replace('ufat', 'u');
                }
            }
            textDesencryp.push(string);
        }

        mensajeDesencriptado = textDesencryp.join(' ');
    } else {
        throw Error("El texto debe tener al menos un caracter.")
    }

    return mensajeDesencriptado;
}

// Funcion para mostrar el mensaje encriptado o desencriptado 
function showMessage(message) {
    if(message.length) {
        let image = document.getElementById("protectImage");
        image.style.display = 'none';

        let display = document.getElementById('display');
        display.textContent = message;
        display.style.visibility = 'visible';
    } else {
        throw Error('No se encontro ningun mensaje.');
    }
}

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