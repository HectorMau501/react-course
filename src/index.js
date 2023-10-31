import React from "react";
import ReactDOM from "react-dom/client";

//En el proyecto no utilizamos como tal js sino JSX, nos permite retornar porciones de html

// Siempre debe de haber un componentes que contenga al resto
// React de compone de componentes

const root = ReactDOM.createRoot(document.getElementById("root"));

// los componentes son funciones que siempre retornan algo, se va a retornar una porcion de interfaz
function Gretting() {
  const married = true;

  return <h1>{married ? "estoy cansado" : "no estoy cansado"}</h1>;
}
//Con el div para a recibir el componente
root.render(
  Gretting(<Gretting /> /* Es lo mismo a lo anterior<Gretting></Gretting> */)
);
