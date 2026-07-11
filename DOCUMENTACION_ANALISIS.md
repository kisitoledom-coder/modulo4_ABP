# Documentación y Análisis del Proyecto - Aplicación de Consola

## 1. Objetivo del Proyecto
El objetivo de este proyecto es presentar una aplicación interactiva ejecutada en la consola del navegador que permite a los usuarios realizar operaciones matemáticas, demostrando la correcta aplicación de los fundamentos de programación en JavaScript correspondientes al Módulo 3[cite: 1].

## 2. Explicación Estructural y Código
El desarrollo se construyó integrando progresivamente las mejores prácticas del lenguaje[cite: 1]:
* **Modularización y Funciones:** La lógica matemática se separó en funciones de responsabilidad única (sumar, restar, multiplicar, dividir). Esto optimiza la legibilidad del código y permite reutilizar las operaciones sin duplicar esfuerzos[cite: 1].
* **Estructuras de Control:** Se implementó un ciclo `while` para gestionar el flujo de la aplicación, permitiendo al usuario realizar múltiples cálculos continuos. Además, se utilizó la sentencia `switch` para evaluar y enrutar de forma eficiente la decisión de la operación a ejecutar[cite: 1].
* **Manejo de Objetos y Arreglos:** Se estructuró la aplicación en torno a un objeto principal llamado `calculadora`. Este objeto encapsula los métodos operativos y administra un arreglo interno. Cada cálculo exitoso genera un nuevo objeto con los detalles de la operación, el cual se inserta en el arreglo. Al finalizar, el historial se renderiza iterando sobre la colección mediante el método `forEach()`[cite: 1].

## 3. Análisis Funcional y Validaciones
La aplicación fue diseñada con un enfoque preventivo para evitar errores en la ejecución de la consola[cite: 1]:
* **Control de Entradas:** Se implementó la validación para garantizar que los datos ingresados a través del `prompt` sean estrictamente numéricos[cite: 1]. Si el usuario ingresa caracteres de texto, el flujo advierte mediante consola y alertas[cite: 1].
* **Control de Excepciones Matemáticas:** La función encargada de la división cuenta con una estructura condicional `if` que detecta e impide las divisiones por cero, retornando un mensaje de error claro en consola y protegiendo la integridad de los resultados[cite: 1].