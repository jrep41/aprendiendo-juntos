import React from "react";

const JavaScriptTutorial = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Tutorial de JavaScript</h1>
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Introducción a JavaScript</h2>
        <p className="mb-4">
          JavaScript es un lenguaje de programación que permite crear contenido dinámico, controlar multimedia, animar imágenes y prácticamente todo lo demás.
        </p>

        <h3 className="text-xl font-semibold mb-3">Fundamentos</h3>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code>{`// Variables
let nombre = "Juan";
const edad = 25;

// Funciones
function saludar(nombre) {
  return "¡Hola " + nombre + "!";
}`}</code>
        </pre>

        <h3 className="text-xl font-semibold mb-3">Conceptos básicos</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Variables y tipos de datos</li>
          <li>Operadores</li>
          <li>Estructuras de control</li>
          <li>Funciones</li>
          <li>Arrays y objetos</li>
        </ul>
      </div>
    </div>
  );
};

export default JavaScriptTutorial;