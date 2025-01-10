import React from "react";

const CssTutorial = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Tutorial de CSS</h1>
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Introducción a CSS</h2>
        <p className="mb-4">
          CSS (Cascading Style Sheets) es el lenguaje utilizado para estilizar y dar formato a documentos HTML. Controla el diseño visual de las páginas web.
        </p>

        <h3 className="text-xl font-semibold mb-3">Sintaxis básica</h3>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code>{`selector {
  propiedad: valor;
  otra-propiedad: otro-valor;
}`}</code>
        </pre>

        <h3 className="text-xl font-semibold mb-3">Conceptos fundamentales</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Selectores</li>
          <li>Propiedades</li>
          <li>Valores</li>
          <li>Box Model</li>
          <li>Flexbox y Grid</li>
        </ul>
      </div>
    </div>
  );
};

export default CssTutorial;