import React from "react";
import message from "../images/message.svg";
import phone from "../images/phone.svg";
import mapMarker from "../images/map-marker.svg";

const Footer = () => {
  return (
    <div className="bg-footer pt-8">
      <div className="max-w-[61.25rem] mx-auto md:flex w-full">
        <div className="mx-4 lg:w-3/5">
          <div className="py-4 px-3 border-b-[1px] border-dashed border-white">
            Nosotros
          </div>

          <div className="py-4 px-3 border-b-[1px] border-dashed border-white">
            Preguntas Frecuentes
          </div>

          <div className="py-4 px-3 border-b-[1px] border-dashed border-white">
            Materias Conciliables
          </div>

          <div className="py-4 px-3 border-b-[1px] border-dashed border-white">
            Recomiéndanos
          </div>
        </div>
        <div className="text-white lg:w-2/5">
          <div className="mb-4">
            <p>
              <span className="font-bold">Atención: </span>
              Lunes a Viernes de 7:30 a.m a 07 p.m
            </p>
            <p>Sábados de 7:30 a.m a 05 p.m</p>
            <p>Domingos de 7:30 a.m a 12 p.m</p>
          </div>
          <p className="flex items-center">
            <img className="mr-2 h-4 w-4" src={message.src} alt="" />
            alan_medina@hotmail.com
          </p>
          <p className=" text-xl font-bold flex items-center">
            <img className="mr-2 h-4 w-4" src={phone.src} alt="" />
            994 393 724
          </p>
          <p className="flex items-center">
            <img className="mr-2 h-4 w-4" src={mapMarker.src} alt="" />
            Jr. Industrial 376 - 1 - Ate
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
