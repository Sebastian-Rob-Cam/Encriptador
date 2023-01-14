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

export default showMessage;