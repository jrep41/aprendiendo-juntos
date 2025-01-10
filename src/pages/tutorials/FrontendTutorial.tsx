import React from "react";

const FrontendTutorial = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Tutorial de Frontend</h1>
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Desarrollo Frontend</h2>
        <p className="mb-4">
          El desarrollo frontend se centra en crear la interfaz de usuario y la experiencia del usuario en aplicaciones web.
        </p>

        <h3 className="text-xl font-semibold mb-3">Tecnologías principales</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript/TypeScript</li>
          <li>React/Vue/Angular</li>
          <li>Responsive Design</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Herramientas populares</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Visual Studio Code</li>
          <li>Chrome DevTools</li>
          <li>Git</li>
          <li>npm/yarn</li>
          <li>Webpack/Vite</li>
        </ul>
      </div>
    </div>
  );
};

export default FrontendTutorial;