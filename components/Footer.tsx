import React from "react";
import Link from "next/link";
import message from "../images/message.svg";
import phone from "../images/phone.svg";
import mapMarker from "../images/map-marker.svg";
import logoDev from "../images/graphicLawyer.svg";
import facebook from "../images/facebook.svg";
import google from "../images/google.svg";

const Footer = () => {
  return (
    <div className="bg-footer pt-3">
      <div className="max-w-[61.25rem] mx-auto md:flex w-full">
        <div className="ml-4 pr-20 lg:w-3/5 text-white">
          <Link
            href="/divorcio-rapido##acta-de-conciliacion-para-divorcio"
            className="py-4 px-3 border-b-[1px] border-dashed border-white block"
          >
            Acta de Conciliación para Divorcio
          </Link>

          <Link
            href="/divorcio-rapido##liquidacion-de-bienes-gananciales"
            className="py-4 px-3 border-b-[1px] border-dashed border-white block"
          >
            Liquidación de Bienes Gananciales
          </Link>

          <Link
            href="/conciliacion-con-poder##poder-de-personas-juridicas"
            className="py-4 px-3 border-b-[1px] border-dashed border-white block"
          >
            Poder de Personas Jurídicas
          </Link>

          <Link
            href="/conciliacion-con-poder##poder-de-personas-naturales"
            className="py-4 px-3 border-b-[1px] border-dashed border-white block"
          >
            Poder de Personas Naturales
          </Link>
        </div>
        <div className="p-4 text-white lg:w-2/5">
          <div className="mb-4">
            <p>
              <span className="font-bold">Atención: </span>
              Lunes a Viernes de 7:30 a.m a 07 p.m
            </p>
            <p>Sábados de 7:30 a.m a 05 p.m</p>
            <p>Domingos de 7:30 a.m a 12 p.m</p>
          </div>
          <div>
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
          <div className="flex mt-2">
            <Link
              href="https://centrodeconciliacion-gandhi-vitarte.negocio.site/?utm_source=gmb&utm_medium=referral"
              target="_blank"
              className=" w-10 h-10 text-white hover:bg-black bg-comp-secondary justify-center items-center duration-300 rounded-3xl transition-colors flex"
            >
              <img className="pl-[0.1rem] w-6" src={google.src} alt="" />
            </Link>
            <Link
              href="https://www.facebook.com/conciliaciongandhi"
              target="_blank"
              className="ml-2 w-10 h-10 text-white hover:bg-black bg-comp-secondary justify-center items-center duration-300 rounded-3xl transition-colors flex"
            >
              <img className="w-6" src={facebook.src} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <p className="px-2 py-3  text-sm text-center ">
        © 2022 Centro de Conciliación M.C. Gandhi Vitarte | Desarrollado por
        <Link
          href="https://graphiclawyer.netlify.app/"
          target="_blank"
          className="inline-flex"
        >
          <img className="ml-1.5 w-28 h-3 inline" src={logoDev.src} alt="" />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
