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

export default encriptar;