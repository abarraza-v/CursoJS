let freepass = false;

const validarCliente = (time) => {
    let edad = prompt("Antes de entrar, Dime, ¿Cuál es tu edad?");
    if (edad >= 18) {
        if (time >= 2 && time < 7 && freepass == false) {
            alert(`Son las ${time} am así que puedes pasar gratis amigo, bienvenido.`)
            freepass = true
        } else {
            alert("Puedes pasar, pero debes pagar la entrada de 2 dólares.")
        }
    } else {
        alert("Eres menor de edad; no puedes pasar, lo siento.");
    }
}


validarCliente(23);
validarCliente(24);
validarCliente(1);
validarCliente(2);
validarCliente(3);
validarCliente(4);
validarCliente(5);