class Calculadora {
    constructor(){
    }

    sumar(num1, num2){
        let numero1 = num1;
        let numero2 = num2;
        return numero1 + numero2;
    }

    restar(num1, num2){
        let numero1 = num1;
        let numero2 = num2;
        return numero1 - numero2;
    }

    multiplicar(num1, num2){
        let numero1 = num1;
        let numero2 = num2;
        return numero1 * numero2;
    }
    
    dividir(num1, num2){
        let numero1 = num1;
        let numero2 = num2;
        return numero1 / numero2;
    }

    potenciar(num1, num2){
        let numero1 = num1;
        let numero2 = num2;
        return numero1 ** numero2;
    }

    raizCuadrada(num1){
        let numero1 = num1;
        return Math.sqrt(numero1);
    }
    raizCubica(num1){
        let numero1 = num1;
        return Math.cbrt(numero1);
    }
}

calculadora = new Calculadora();

alert("Bienvenido a la Calculadora, ingrese el número de la operación que desea realizar.");
let operacion = prompt("1) Suma 2) Resta 3) Multiplicación 4) División 5) Potenciación 6) Raíz Cuadrada 7) Raíz Cúbica");
let num1 = prompt("Ingrese un número para operar");
if (operacion !== "6" && operacion !== "7"){
    let num2 = prompt("Ingrese otro número para operar");

    if (operacion == "1") {
        alert(calculadora.sumar(parseInt(num1),parseInt(num2)));
    } else if (operacion == "2"){
        alert(calculadora.restar(parseInt(num1),parseInt(num2)));
    } else if (operacion == "3"){
        alert(calculadora.multiplicar(parseInt(num1),parseInt(num2)));
    } else if (operacion == "4"){
        alert(calculadora.dividir(parseInt(num1),parseInt(num2)));
    } else if (operacion == "5"){
        alert(calculadora.potenciar(parseInt(num1),parseInt(num2)));
    }
} else if (operacion == "6"){
    alert(calculadora.raizCuadrada(parseInt(num1)));
} else if (operacion == "7"){
    alert(calculadora.raizCubica(parseInt(num1)));
}