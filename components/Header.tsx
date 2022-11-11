import React, { useState } from "react";
import logo from "../images/logo.png";
import phone from "../images/phone.svg";
import mapMarker from "../images/map-marker.svg";
import visaMastercard from "../images/visa-and-mastercard.png";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="shadow-lg pb-2">
      <div className="py-1.5  bg-comp-primary shadow-lg  ">
        <div className="px-4 max-w-[61.25rem] w-full mx-auto flex-col md:flex-row items-center justify-center md:justify-between flex">
          <div className="flex items-center font-bold">
            <img className="h-4 w-4 mr-2" src={phone.src} alt="numero" />
            994 393 724
          </div>
          <div className="flex items-center">
            <img
              className="h-4 w-4 mr-2"
              src={mapMarker.src}
              alt="marcador de mapa"
            />
            Jr. Industrial 376 - 1 - Ate
          </div>
          <div className="hidden text-xs md:flex items-center font-bold ">
            ACEPTAMOS:
            <img className="ml-3 w-16" src={visaMastercard.src} alt="" />
          </div>{" "}
        </div>
      </div>
      <div className="pb-4 max-h-96 md:h-48">
        <div className="px-6 pt-3 pb-4 justify-between md:justify-center flex relative">
          <div className="text-xs flex md:hidden flex-col items-center font-bold">
            ACEPTAMOS:
            <div className="w-16 h-[1.1925rem] relative">
              <Image
                fill
                className="object-cover"
                src={visaMastercard.src}
                alt="Visa y Mastercard"
              />
            </div>
          </div>
          <Link
            href="/"
            className="top-4 left-1/2 -translate-x-1/2 md:translate-x-0 text-center absolute md:static md:mx-auto"
          >
            <div className="mb-2.5 w-16 h-[5.726875rem] mx-auto relative">
              <Image
                src={logo.src}
                alt="Logo de centro de conciliacion M.C. Gandhi"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-[0.7rem] font-black leading-[0.5rem]">
              CENTRO DE CONCILIACIÓN
            </p>
            <p className="text-[0.7rem] font-black">"M.C. GANDHI VITARTE"</p>
          </Link>
          <div
            onClick={() => setActive(!active)}
            className="h-[1.25rem] w-[1.375rem] justify-between flex-col flex md:hidden"
          >
            <div className="w-full h-[2px] bg-secondary"></div>
            <div className="w-full h-[2px] bg-secondary"></div>
            <div className="w-full h-[2px] bg-secondary"></div>
          </div>
        </div>
        <div
          className={`mt-20 md:mt-0 max-w-[61.25rem] text-[0.8rem] mx-auto  flex flex-col md:flex-row duration-500 text-center md:divide-x transition-[max-height] overflow-hidden ${
            active ? "max-h-80" : "max-h-0 md:max-h-full"
          }`}
        >
          <Link href="/" className="w-full py-2 bg-[#cc0006d9] text-white">
            Inicio
          </Link>
          <Link
            href="/nosotros"
            className=" w-full py-2 bg-comp-primary hover:bg-[#cc0006d9] hover:text-white duration-300 transition-colors"
          >
            Nosotros
          </Link>
          <Link
            href="/materias-conciliables"
            className="w-full whitespace-nowrap px-2 py-2 bg-comp-primary hover:bg-[#cc0006d9] hover:text-white duration-300 transition-colors"
          >
            Materias Conciliables
          </Link>
          <Link
            href="/divorcio-rapido"
            className="w-full whitespace-nowrap px-2	py-2 bg-comp-primary hover:bg-[#cc0006d9] hover:text-white duration-300 transition-colors"
          >
            Conciliación - Divorcio Rápido
          </Link>
          <Link
            href="/conciliacion-con-poder"
            className="w-full whitespace-nowrap px-2 py-2 bg-comp-primary hover:bg-[#cc0006d9] hover:text-white duration-300 transition-colors"
          >
            Conciliación con Poder
          </Link>
          <Link
            href="/contacto"
            className="w-full py-2 bg-comp-primary hover:bg-[#cc0006d9] hover:text-white duration-300 transition-colors"
          >
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
