// LECCIÓN 1 y 2: Bienvenida
console.log("¡Aplicación de consola iniciada correctamente!");
alert("Bienvenido a la calculadora de consola.");
let nombre = prompt("Por favor, ingresa tu nombre:");
alert("¡Hola, " + nombre + "! Vamos a calcular.");

// LECCIÓN 5: Objetos y Métodos (Integrando Lección 3 y 4)

// 1. objeto con propiedades y valores
const calculadora = {
    historial: [], // Arreglo que guardará objetos
    
    // 2. Implementar métodos dentro del objeto
    sumar: function(a, b) { return a + b; },
    restar: function(a, b) { return a - b; },
    multiplicar: function(a, b) { return a * b; },
    dividir: function(a, b) {
        if (b === 0) {
            console.log("Error: No se puede dividir por cero.");
            return null;
        }
        return a / b;
    },
    
    ejecutarOperacion: function(num1, num2, operacion) {
        let resultado = null;
        switch (operacion) {
            case "suma": resultado = this.sumar(num1, num2); break;
            case "resta": resultado = this.restar(num1, num2); break;
            case "multiplicacion": resultado = this.multiplicar(num1, num2); break;
            case "division": resultado = this.dividir(num1, num2); break;
            default: console.log("Operación no reconocida.");
        }
        
        if (resultado !== null) {
            // objeto para guardar los detalles de la operación
            const registro = {
                valor1: num1,
                valor2: num2,
                operacionRealizada: operacion,
                resultadoFinal: resultado
            };
            this.historial.push(registro); // Guardamos el objeto en el arreglo
            console.log("El resultado de la " + operacion + " es: " + resultado);
        }
    },

    // 3. Usar un arreglo de objetos y recorrerlo con forEach()
    mostrarHistorial: function() {
        console.log("--- Historial Detallado de Operaciones ---");
        this.historial.forEach(function(registro, index) {
            console.log("Operación " + (index + 1) + ": " + registro.valor1 + " " + registro.operacionRealizada + " " + registro.valor2 + " = " + registro.resultadoFinal);
        });
    }
};

// FLUJO DEL PROGRAMA
let continuar = true;

while (continuar) {
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Error: Los valores ingresados no son números válidos.");
        alert("Por favor, ingresa solo números.");
    } else {
        let op = prompt("¿Qué operación deseas realizar? (escribe: suma, resta, multiplicacion o division)");
        // Usamos el método del objeto calculadora
        calculadora.ejecutarOperacion(num1, num2, op);
    }

    let respuesta = prompt("¿Deseas realizar otra operación? (escribe 'si' para continuar)");
    if (respuesta !== "si") {
        continuar = false;
    }
}

// Llamamos al método que recorre el arreglo de objetos con forEach
calculadora.mostrarHistorial();