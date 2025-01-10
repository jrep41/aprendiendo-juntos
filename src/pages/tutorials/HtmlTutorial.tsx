import React from "react";

const HtmlTutorial = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Tutorial de HTML</h1>
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Introducción a HTML</h2>
        <p className="mb-4">
          HTML (HyperText Markup Language) es el lenguaje estándar para crear páginas web. Define la estructura básica de tu sitio web y su contenido.
        </p>
        
        <h3 className="text-xl font-semibold mb-3">Estructura básica de un documento HTML</h3>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code>{`<!DOCTYPE html>
<html>
  <head>
    <title>Mi primera página</title>
  </head>
  <body>
    <h1>¡Hola Mundo!</h1>
  </body>
</html>`}</code>
        </pre>

        <h3 className="text-xl font-semibold mb-3">Elementos básicos</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Encabezados: h1, h2, h3, h4, h5, h6</li>
          <li>Párrafos: p</li>
          <li>Enlaces: a</li>
          <li>Imágenes: img</li>
          <li>Listas: ul, ol, li</li>
        </ul>
      </div>
    </div>
  );
};

export default HtmlTutorial;