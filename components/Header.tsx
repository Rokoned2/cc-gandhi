import React from "react";
import logo from "../images/logo.png";
import phone from "../images/phone.svg";
import mapMarker from "../images/map-marker.svg";
import visaMastercard from "../images/visa-and-mastercard.png";
import Link from "next/link";

const Header = () => {
  return (
    <div className="shadow-lg pb-2">
      <div className="py-2  bg-comp-primary shadow-lg  ">
        <div className="px-4 max-w-[61.25rem] w-full mx-auto flex-col md:flex-row items-center justify-center md:justify-between flex">
          <div className="flex items-center font-bold">
            <img className="h-4 w-4 mr-2" src={phone.src} alt="" />
            994 393 724
          </div>
          <div className="flex items-center">
            <img className="h-4 w-4 mr-2" src={mapMarker.src} alt="" />
            Jr. Industrial 376 - 1 - Ate
          </div>
          <div className="hidden text-xs md:flex items-center font-bold ">
            ACEPTAMOS:
            <img className="ml-3 w-16" src={visaMastercard.src} alt="" />
          </div>{" "}
        </div>
      </div>
      <div className="pb-4 h-40 md:h-48">
        <div className="px-6 py-4 justify-between md:justify-center flex relative">
          <div className="text-xs flex md:hidden flex-col items-center font-bold">
            ACEPTAMOS:
            <img className="w-16" src={visaMastercard.src} alt="" />
          </div>
          <Link
            href="/"
            className="top-4 left-1/2 -translate-x-1/2 md:translate-x-0 text-center absolute md:static md:mx-auto"
          >
            <img className="w-16 mx-auto mb-1" src={logo.src} alt="" />
            <p className="text-[0.6rem] font-black">CENTRO DE CONCILIACIÓN</p>
            <p className="text-[0.6rem] font-black">"M.C. GANDHI VITARTE"</p>
          </Link>
          <div className="h-[1.25rem] w-[1.375rem] justify-between flex-col flex md:hidden">
            <div className="w-full h-[2px] bg-secondary"></div>
            <div className="w-full h-[2px] bg-secondary"></div>
            <div className="w-full h-[2px] bg-secondary"></div>
          </div>
        </div>
        <div className="max-w-[61.25rem] text-[0.8rem] mx-auto mt-auto hidden md:flex duration-500 text-center divide-x">
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
          <div className="w-full whitespace-nowrap px-2 py-2 bg-comp-primary hover:bg-[#cc0006d9] hover:text-white duration-300 transition-colors">
            Conciliación con Poder
          </div>
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
