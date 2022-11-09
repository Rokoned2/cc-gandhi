import React from "react";
import MateriaItem from "./MateriaItem";

const materias = [
  {
    title: "Conciliación con el Estado",
    image:
      "https://static.wixstatic.com/media/f44544_d729cdb31b4a46a9a347a0ea5ce90f81~mv2.jpeg/v1/fill/w_298,h_253,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/pic2.jpeg",
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
    title: "Conciliación Familia",
    image:
      "https://static.wixstatic.com/media/f44544_fcd52c5b15a4419b820992bd429665ad~mv2.jpeg/v1/crop/x_14,y_0,w_577,h_440/fill/w_306,h_253,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/conciliacion%20familia.jpeg",
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
    image:
      "https://static.wixstatic.com/media/f44544_92bc2911cc364bf4947779868f0482e0~mv2.jpeg/v1/fill/w_306,h_253,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Conciliacion-Como-Mecanismo-Alternativo-oknm48jfvhc39a4rpk7dmzr95pr66r2hq1xa1gi900.jpeg",
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
    <div className="px-2 max-w-[61.25rem] mx-auto">
      <div className="bg-comp-primary lg:bg-white flex flex-col">
        <div className="tracking-tight bg-[#FFFFFF33] mx-3 my-2">
          <h2 className="mb-10 text-[1.6rem] border-b-[1px] mx-3 text-center font-bold">
            Materias Conciliables
          </h2>
          <div className="flex flex-col md:flex-row flex-wrap">
            {materias.map(({ title, image, types }) => (
              <MateriaItem title={title} image={image} types={types} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MateriasSection;
