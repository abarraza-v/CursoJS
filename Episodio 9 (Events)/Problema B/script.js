alumnos = [{
    nombre: "Alejandro Barraza",
    email: "abarraza.pk@gmail.com",
    materia: "Matemática"
},{
    nombre: "Sergio Diaz",
    email: "sdiaz@gmail.com",
    materia: "Programación"
},{
    nombre: "Ignacio Castillo",
    email: "icastillo@gmail.com",
    materia: "Cálculo 1"
},{
    nombre: "Matias Fernandez",
    email: "mfernandez@gmail.com",
    materia: "Lenguaje"
},{
    nombre: "Jehovanna Asuaje",
    email: "jasuaje@gmail.com",
    materia: "Programación"
}];

let botonConfirmar = document.querySelector(".btn-confirmar");

let htmlCode = "";

for (let alumno in alumnos){
    let dato = alumnos[alumno];
    let nombre = dato["nombre"];
    let email = dato["email"];
    let materia = dato["materia"];
    htmlCode += `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        </select>
    </div>`
    document.querySelector(".grid-container").innerHTML = htmlCode;
}

botonConfirmar.addEventListener("click", ()=> {
    let confirmación = confirm("¿Estás seguro que quieres confirmar?");
    if (confirmación) {
        document.body.removeChild(botonConfirmar);
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for (elemento in elementos) {
            semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value;
        }
    }
    
})
