let trabajoPT = "240 minutos para dedicar a trabajo PartTime.";
let tareas = "100 minutos para tareas de la Universidad.";
let estudio = "100 minutos para estudiar.";
let aseo = "100 minutos para tareas de la casa.";
let descanso = "10 minutos de descanso.";

console.log("TAREAS");

for (let i = 0 ; i < 14 ; i++) {
    if (i == 0) {
        console.group("Semana 1");
    }
    console.groupCollapsed("Día " + (i+1));
    console.log(trabajoPT);
    console.log(descanso);
    console.log(tareas);
    console.log(descanso);
    console.log(estudio);
    console.log(descanso);
    console.log(aseo);
    console.groupEnd();

    if (i == 6) {
        console.groupEnd();
        console.groupCollapsed("Semana 2")
    }
}