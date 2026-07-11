// --- LECCIÓN 1 y 2: Variables y bienvenida ---
console.log("¡Aplicación de consola iniciada correctamente!");
const mensajeBienvenida = "Bienvenido a la calculadora de consola.";
alert(mensajeBienvenida);

let nombre = prompt("Por favor, ingresa tu nombre:");
alert("¡Hola, " + nombre + "! Vamos a calcular.");

// --- LECCIÓN 3: Arreglos y ciclos ---
// Crear un arreglo con una lista de elementos (historial vacío al inicio)
let historialResultados = [];
let continuar = true;

// Usar while para repetir el flujo de la calculadora
while (continuar) {
    let numero1 = parseFloat(prompt("Ingresa el primer número:"));
    let numero2 = parseFloat(prompt("Ingresa el segundo número:"));

    if (isNaN(numero1) || isNaN(numero2)) {
        console.log("Error: Los valores ingresados no son números válidos.");
        alert("Por favor, ingresa solo números.");
    } else {
        let operacion = prompt("¿Qué operación deseas realizar? (escribe: suma, resta, multiplicacion o division)");
        let resultado = null;

        switch (operacion) {
            case "suma":
                resultado = numero1 + numero2;
                break;
            case "resta":
                resultado = numero1 - numero2;
                break;
            case "multiplicacion":
                resultado = numero1 * numero2;
                break;
            case "division":
                if (numero2 === 0) {
                    console.log("Error: No se puede dividir por cero.");
                } else {
                    resultado = numero1 / numero2;
                }
                break;
            default:
                console.log("Operación no reconocida.");
                break;
        }

        // Si la operación fue exitosa, la guardamos en el arreglo
        if (resultado !== null) {
            console.log("El resultado de la " + operacion + " es: " + resultado);
            historialResultados.push(resultado);
        }
    }

    // Condición para romper el ciclo while
    let respuesta = prompt("¿Deseas realizar otra operación? (escribe 'si' para continuar)");
    if (respuesta !== "si") {
        continuar = false;
    }
}

// Usar for para recorrer el arreglo
console.log("--- Historial de todos los resultados ---");
for (let i = 0; i < historialResultados.length; i++) {
    console.log("Operación " + (i + 1) + ": " + historialResultados[i]);
}

// Implementar una función que filtre elementos según una condición
function filtrarMayoresADiez(arreglo) {
    let filtrados = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > 10) {
            filtrados.push(arreglo[i]);
        }
    }
    return filtrados;
}

console.log("--- Resultados filtrados (Mayores a 10) ---");
console.log(filtrarMayoresADiez(historialResultados));