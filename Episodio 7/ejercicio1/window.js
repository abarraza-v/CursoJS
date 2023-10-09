let windowHeight = window.screen.height;
let windowWidth = window.screen.width;

let respuesta = confirm(`La pantalla de este computador es de ${windowWidth}x${windowHeight}. Deseas comprarla?`);

if (respuesta) {
    alert("Felicidades, compraste el computador full HD")
} else {
    alert("Tranquilo amigo, ya habrá un computador que se acomode a tus gustos");
}