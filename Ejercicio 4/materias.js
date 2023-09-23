const obtenerInformacion = (materia)=> {
    let materias = {
        Lenguaje: ["Juan Carlos","Alejandro", "Pedro", "Robertonto"],
        Matematicas: ["Sergio Arias","Cofla", "Robertonto"],
        Ciencias: ["Paulo Diaz","Pedro"],
        Historia: ["Paola Moraga","Pedro", "Cofla", "Robertonto"]
    }
    
    if (materias[materia] !== undefined) {
        return [materias[materia],materia];
    } else {
        return materias;
    }
}

const mostrarInformacion = (materia)=> {
    let informacion = obtenerInformacion(materia);
    
    if (informacion !== undefined) {
        let profesor = informacion[0][0];
        let alumnos = informacion[0];
        alumnos.shift();
        document.write(`El profesor de <b>${informacion[1]}</b> es <b style='color:red'>${profesor}</b> <br> 
        y sus alumnos son: <b style="color:green">${alumnos}</b> <br> <br>`)  
    }
}

const contadorDeClases = (alumno)=> {
    let contador = 0;
    let informacion = obtenerInformacion();
    let clasesTotales = [];

    for (info in informacion){
        if (informacion[info].includes(alumno)) {
            clasesTotales.push(" " + info);
            contador++;
        }
    }

    document.write(`${alumno} está en ${contador} clases, las cuales son: <b style="color:blue">${clasesTotales}</b> <br>`)
    return contador;
}

const inscribir = (alumno, materia)=>{
    lista = obtenerInformacion();
    alumnosInscritos = lista[materia]
    if (alumnosInscritos.length >= 21) {
        document.write(`Lo siento ${alumno}, ya no hay más cupos en ${materia} <br> <br>`)
    } else {
        alumnosInscritos.push(alumno);
        document.write(`Felicitaciones ${alumno}! te inscribiste a ${materia} correctamente. <br>`);
        if (materia == "Lenguaje") {
            materias = {
                Lenguaje: alumnosInscritos,
                Matematicas: lista["Matematicas"],
                Ciencias: lista["Ciencias"],
                Historia: lista["Historia"]
            }
            let temp = alumnosInscritos.shift();
            document.write(`Esta es la lista de alumnos de la clase en la que te inscribiste: ${alumnosInscritos} <br> <br>`)
            alumnosInscritos.unshift(temp);

        } else if (materia == "Matematicas"){
            materias = {
                Lenguaje: lista["Lenguaje"],
                Matematicas: alumnosInscritos,
                Ciencias: lista["Ciencias"],
                Historia: lista["Historia"]
            }
            let temp = alumnosInscritos.shift();
            document.write(`Esta es la lista de alumnos de la clase en la que te inscribiste: ${alumnosInscritos} <br> <br>`)
            alumnosInscritos.unshift(temp);

        } else if (materia == "Matematicas"){
            materias = {
                Lenguaje: lista["Lenguaje"],
                Matematicas: lista["Matematicas"],
                Ciencias: alumnosInscritos,
                Historia: lista["Historia"]
            }
            let temp = alumnosInscritos.shift();
            document.write(`Esta es la lista de alumnos de la clase en la que te inscribiste: ${alumnosInscritos} <br> <br>`)
            alumnosInscritos.unshift(temp);

        } else if (materia == "Matematicas"){
            materias = {
                Lenguaje: lista["Lenguaje"],
                Matematicas: lista["Matematicas"],
                Ciencias: lista["Ciencias"],
                Historia: alumnosInscritos
            }
            let temp = alumnosInscritos.shift();
            document.write(`Esta es la lista de alumnos de la clase en la que te inscribiste: ${alumnosInscritos} <br> <br>`)
            alumnosInscritos.unshift(temp)

        }
    }
}

inscribir("Ignacio","Lenguaje");

inscribir("Marito","Matematicas");

contadorDeClases("Alejandro");

