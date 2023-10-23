const inputNombre = document.getElementById("inputNombre");
const inputEmail = document.getElementById("inputEmail");
const inputMateria = document.getElementById("inputMateria");
const botonEnviar = document.getElementById("btn-enviar");
const textoIndicador = document.querySelector(".textoIndicador");

botonEnviar.addEventListener("click", (e)=>{
    e.preventDefault();
    let error = validarCampos();

    if (error[0]) {
        textoIndicador.classList.remove("texto-verde");
        textoIndicador.classList.add("texto-rojo","padding");
        textoIndicador.innerHTML = error[1];
    } else {
        textoIndicador.classList.remove("texto-rojo");
        textoIndicador.classList.add("texto-verde","padding");
        textoIndicador.innerHTML = "Solicitud enviada correctamente";
    }
})

const validarCampos = ()=> {
    // Validaciones
     let error = [];
    if (inputNombre.value.length <= 1 || inputNombre.value.length >= 75) {
        error = [true, "El nombre válido porfavor."];
        return error;
    } else if (inputEmail.value.length <= 1 || inputEmail.value.length >=255 || !inputEmail.value.includes("@") || !inputEmail.value.includes(".com")) {
        error = [true, "El email válido porfavor."];  
        return error;   
    } else if (inputMateria.value.length < 4 || inputMateria.value.length >= 25) {
        error = [true, "Esa materia no existe."];
        return error;
    }
    
    // Retornar false si no hay errores.
    error = [false];
    return error;
}