const materias = {
    matematica: [100, 10, 4, "Matemática"],
    historia: [40, 2, 0, "Historia"],
    lenguaje: [93, 8, 3, "Lenguaje"],
    programacion: [90, 10, 4, "Programación"],
    fisica: [90, 9, 4, "Física"],
    ciencias: [91, 5, 4, "Ciencias"]
}

const aprobar = () => {
    
    for (materia in materias) {
        let asistencia = materias[materia][0];
        let promedioNotas = materias[materia][1];
        let trabajosHechos = materias[materia][2];
        
        console.log(materias[materia][3])
        if (asistencia >= 90) {
            console.log("%c Asistencia Aprobada","color=green")
        } else {
            console.log("%c Asistencia Reprobada","color=red")
        }

        if (promedioNotas >= 7) {
            console.log("%c Notas Aprobadas","color=green")
        } else {
            console.log("%c Notas Reprobadas","color=red")
        }

        if (trabajosHechos >= 3) {
            console.log("%c Trabajos Aprobados","color=green")
        } else {
            console.log("%c Trabajos Insuficientes","color=red")
        }
    }
}

aprobar();