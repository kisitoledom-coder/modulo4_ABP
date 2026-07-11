// LECCIÓN 1: Mensajes y capturas básicas
console.log("¡Aplicación de consola iniciada correctamente!");

// LECCIÓN 2: Variables, expresiones y condicionales
// Definir variables utilizando let y const
const mensajeBienvenida = "Bienvenido a la calculadora de consola.";
alert(mensajeBienvenida);

let nombre = prompt("Por favor, ingresa tu nombre:");
alert("¡Hola, " + nombre + "! Vamos a calcular.");

// Pedir al usuario que ingrese dos números y almacenarlos en variables
let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));

// Usar estructuras condicionales (if, else) para validar los datos
if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Error: Los valores ingresados no son números válidos.");
    alert("Por favor, recarga la página e ingresa solo números.");
} else {
    // Pedir la operación deseada
    let operacion = prompt("¿Qué operación deseas realizar? (escribe: suma, resta, multiplicacion o division)");
    let resultado;

    // Usar switch para evaluar diferentes situaciones e implementar operaciones matemáticas
    switch (operacion) {
        case "suma":
            resultado = numero1 + numero2;
            console.log("El resultado de la suma es: " + resultado);
            break;
        case "resta":
            resultado = numero1 - numero2;
            console.log("El resultado de la resta es: " + resultado);
            break;
        case "multiplicacion":
            resultado = numero1 * numero2;
            console.log("El resultado de la multiplicación es: " + resultado);
            break;
        case "division":
            // Condicional anidado para evitar división por cero
            if (numero2 === 0) {
                console.log("Error: No se puede dividir por cero.");
            } else {
                resultado = numero1 / numero2;
                console.log("El resultado de la división es: " + resultado);
            }
            break;
        default:
            console.log("Operación no reconocida.");
            alert("La operación ingresada no es válida.");
            break;
    }
}