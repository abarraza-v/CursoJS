
class Materia {
    constructor(profesor, nombre){
        let listaEstudiantes = [];
        this.cupo = 2;
        this.nombre = nombre;
        this.profesor = profesor;
        this.listaEstudiantes = listaEstudiantes;
    }

    mostrarProfesor(){
        return document.write(`<br> El profesor de ${this.nombre} es ${this.profesor}.`)
    }

    inscribirse(){
        if (this.cupo !== 0){
            let nuevoEstudiante = prompt(`Bienvenido a la clase de ${this.nombre}, Ingresa tu nombre porfavor.`);
            this.listaEstudiantes.push(nuevoEstudiante);
            this.cupo -= 1
            alert(`Quedan ${this.cupo} cupos`)
        } else {
            alert(`Lo siento, ya no hay cupo en ${this.nombre}.`)
        }
    }

    mostrarEstudiantes(){
        document.write(`Estudiantes de ${this.nombre}: <br>`)
        for (let estudiante in this.listaEstudiantes) {
            document.write(`${this.listaEstudiantes[estudiante]} <br>`);
        } 
    }
}


lenguaje = new Materia("Juan Carlos","Lenguaje");
matematicas = new Materia("Sergio Arias","Matemáticas");

lenguaje.inscribirse()
lenguaje.inscribirse()
lenguaje.inscribirse()

lenguaje.mostrarEstudiantes();

lenguaje.mostrarProfesor();

