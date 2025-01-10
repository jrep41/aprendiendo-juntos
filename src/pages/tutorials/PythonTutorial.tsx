import React from "react";

const PythonTutorial = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Tutorial de Python</h1>
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Introducción a Python</h2>
        <p className="mb-4">
          Python es un lenguaje de programación versátil que se destaca por su simplicidad y legibilidad. Es ideal para principiantes y expertos por igual.
        </p>

        <h3 className="text-xl font-semibold mb-3">Sintaxis básica</h3>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code>{`# Variables y tipos de datos
nombre = "Ana"
edad = 25
altura = 1.75

# Funciones
def saludar(nombre):
    return f"¡Hola {nombre}!"`}</code>
        </pre>

        <h3 className="text-xl font-semibold mb-3">Conceptos fundamentales</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Variables y tipos de datos</li>
          <li>Estructuras de control</li>
          <li>Funciones</li>
          <li>Listas, tuplas y diccionarios</li>
          <li>Programación orientada a objetos</li>
        </ul>
      </div>
    </div>
  );
};

export default PythonTutorial;