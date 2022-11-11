import React from "react";
import MateriaItem from "./MateriaItem";

const materias = [
  {
    title: "Conciliación con el Estado",
    image: "https://drive.google.com/uc?id=1qFyN7Q86PpZlzgqN5bZn8fKi1eD1x6wR",
    types: [
      "Pago de deudas.",
      "Desalojo.",
      "Pago de alquileres.",
      "Indemnización de daños y perjuicios.",
      "Otorgamiento de Escritura Pública.",
      "Convocatoria a Junta o Asamblea.",
      "División y partición de bienes.",
      "Ofrecimiento de Pago.",
    ],
  },

  {
    title: "Conciliación Familiar",
    image: "https://drive.google.com/uc?id=1AJ1LnRFn0f-jd5sFdffpyq19qbs-Q0vh",
    types: [
      "Divorcio",
      "Pensión de alimentos.",
      "Tenencia de hijos.",
      "Régimen de visitas.",
      "Aumento de pensión de alimentos.",
      "Reducción de alimentos.",
      "Otras pretensiones de libre disponibilidad.",
    ],
  },
  {
    title: "Conciliación Civil y Empresarial",
    image: "https://drive.google.com/uc?id=1bNHusKtWZKqebdU9y1q7WPNHMJ01sjlY",
    types: [
      "Las relativas a la liquidación del contrato de consultoría y ejecución de obra.",
      "Las referidas a la resolución contractual.",
      "Las solicitudes de ampliación o reducción de plazo.",
      "Las relacionadas con la recepción de bienes, servicios u obras; y/o conformidad de la prestación.",
      "Las relacionadas con el pago que la Entidad debe efectuar al contratista.",
    ],
  },
];

const MateriasSection = () => {
  return (
    <div className="px-2 lg:px-0 max-w-[61.25rem] mx-auto">
      <div className="bg-comp-primary lg:bg-white flex flex-col">
        <div className="tracking-tight bg-[#FFFFFF33] mx-3 lg:mx-0 my-2">
          <h2 className="mb-10 text-[1.6rem] border-b-[1px] mx-3 text-center font-bold">
            Materias Conciliables
          </h2>
          <div className="flex flex-col md:flex-row flex-wrap">
            {materias.map(({ title, image, types }, index) => (
              <MateriaItem
                key={index}
                title={title}
                image={image}
                types={types}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MateriasSection;
