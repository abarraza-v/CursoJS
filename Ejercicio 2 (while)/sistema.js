let cantidad = prompt("¿Cuántos alumnos tiene el curso?")
let alumnosTotales = []

for (i = 0; i < cantidad; i++) {
    alumnosTotales[0] = [prompt(`Indique el nombre del alumno ${i+1}`), 0]
}

const tomarAsistencia = (nombre,posicion) => {
    presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[posicion][1]++;
    }
}

for (i = 0; i < 30; i++) {
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0],alumno)
    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}: <br>
    _____Presencias ${alumnosTotales[alumno][1]} <br> 
    _____Ausencias ${30 - parseInt(alumnosTotales[alumno][1])}`
    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado += `<b style= 'color:red'> REPROBADO POR INASISTENCIAS</b><br>`;
    }
    else {
        resultado += `<br></br>`;
    }
    document.write(resultado);
}