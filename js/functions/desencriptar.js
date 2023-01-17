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

export default desencriptar;