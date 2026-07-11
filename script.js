// LECCIÓN 1 y 2: Bienvenida
console.log("¡Aplicación de consola iniciada correctamente!");
alert("Bienvenido a la calculadora de consola.");
let nombre = prompt("Por favor, ingresa tu nombre:");
alert("¡Hola, " + nombre + "! Vamos a calcular.");

// LECCIÓN 4: Funciones (Modularización)

// 1. Crear funciones para cada operación matemática que reciben parámetros y retornan resultado
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        console.log("Error: No se puede dividir por cero.");
        return null;
    }
    return a / b;
}

// 2. Llamar funciones dentro de otras funciones
function calcularOperacion(numero1, numero2, operacion) {
    switch (operacion) {
        case "suma":
            return sumar(numero1, numero2); // Llamada a función interna
        case "resta":
            return restar(numero1, numero2);
        case "multiplicacion":
            return multiplicar(numero1, numero2);
        case "division":
            return dividir(numero1, numero2);
        default:
            console.log("Operación no reconocida.");
            return null;
    }
}

// LECCIÓN 3: Arreglos y ciclos (Integrados con las nuevas funciones)
let historialResultados = [];
let continuar = true;

while (continuar) {
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Error: Los valores ingresados no son números válidos.");
        alert("Por favor, ingresa solo números.");
    } else {
        let op = prompt("¿Qué operación deseas realizar? (escribe: suma, resta, multiplicacion o division)");
        
        // Usamos nuestra función modularizada principal
        let resultado = calcularOperacion(num1, num2, op);

        if (resultado !== null) {
            console.log("El resultado de la " + op + " es: " + resultado);
            historialResultados.push(resultado);
        }
    }

    let respuesta = prompt("¿Deseas realizar otra operación? (escribe 'si' para continuar)");
    if (respuesta !== "si") {
        continuar = false;
    }
}

// Función de filtro de la lección 3
function filtrarMayoresADiez(arreglo) {
    let filtrados = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > 10) {
            filtrados.push(arreglo[i]);
        }
    }
    return filtrados;
}

console.log("--- Historial de resultados ---");
for (let i = 0; i < historialResultados.length; i++) {
    console.log("Operación " + (i + 1) + ": " + historialResultados[i]);
}

console.log("--- Resultados filtrados (>10) ---");
console.log(filtrarMayoresADiez(historialResultados));