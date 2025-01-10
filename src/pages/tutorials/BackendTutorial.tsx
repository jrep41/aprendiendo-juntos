import React from "react";

const BackendTutorial = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Tutorial de Backend</h1>
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Desarrollo Backend</h2>
        <p className="mb-4">
          El desarrollo backend se enfoca en la lógica del servidor, bases de datos y la infraestructura que hace funcionar las aplicaciones web.
        </p>

        <h3 className="text-xl font-semibold mb-3">Tecnologías principales</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Node.js/Express</li>
          <li>Python/Django/Flask</li>
          <li>Bases de datos SQL y NoSQL</li>
          <li>APIs RESTful</li>
          <li>Autenticación y seguridad</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Conceptos importantes</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Arquitectura de servidores</li>
          <li>Manejo de bases de datos</li>
          <li>Seguridad web</li>
          <li>Escalabilidad</li>
          <li>Testing</li>
        </ul>
      </div>
    </div>
  );
};

export default BackendTutorial;