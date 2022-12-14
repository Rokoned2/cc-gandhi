import React from "react";
import Head from "next/head";
import Image from "next/image";

const divorcioRapido = () => {
  return (
    <div>
      <Head>
        <title>DIVORCIO RAPIDO - CENTRO DE CONCILIACIÓN GANDHI</title>
      </Head>
      <div className="w-full bg-comp-primary">
        <div className="px-4 md:px-0 py-4 max-w-[61.25rem]  mx-auto">
          <div className="bg-[#F5F2F2]  flex flex-col">
            <div className="tracking-tight bg-[#FFFFFF33] mx-3 my-2 px-2 pt-3">
              <h2 className="mb-10 text-[1.6rem] border-b-[1px] mx-3 text-center font-bold">
                CONCILIACIÓN PARA DIVORCIO
              </h2>
              <div className="bg-comp-primary px-5 py-6 mb-8 flex flex-col md:flex-row flex-wrap">
                <div className="mb-2 text-[1.5rem] text-btn-primary text-center tracking-tighter">
                  Divorcio Rápido
                </div>
                <p className="md:text-[0.875rem] md:leading-[1.1rem] text-justify tracking-tight">
                  El divorcio rápido es la disolución del vínculo matrimonial,
                  por acuerdo de ambos cónyuges, dicho proceso puede ser
                  solicitado ante cualquier Notaria Pública o Municipalidad del
                  último domicilio conyugal. Es un procedimiento rápido, ágil y
                  flexible que en solo 3 meses pone fin al vínculo matrimonio
                  civil, cumpliendo los requisitos que se expone a continuación.
                </p>
                <div className="mt-5 md:flex">
                  <div className="md:mr-10 h-[10.75rem]  md:h-auto mx-auto flex-1 relative">
                    <Image
                      priority
                      alt="Divorcio rapido"
                      className="w-full  object-cover"
                      fill
                      src="https://drive.google.com/uc?id=1Jui_bEe5OQzvIfcPuODTZoSe_41Fvl66"
                    />
                  </div>
                  <div className="mt-2 flex-1">
                    <p className="font-bold mb-3">REQUISITOS: </p>
                    <ul className="ml-5 md:text-[0.875rem] md:leading-[1.1rem] text-justify tracking-tight list-disc">
                      <li>
                        Partida de Nacimiento de los Hijos (vigencia no mayor a
                        1 mes)
                      </li>
                      <li>Partida de Matrimonio (vigencia no mayor a 1 mes)</li>
                      <li>Copia del DNI de los cónyuges</li>
                      <li>
                        <b>ACTA DE CONCILIACIÓN</b> (sólo cuando existan hijos
                        menores de 18 años o mayores con incapacidad)
                      </li>
                      <li>
                        <b>LIQUIDACIÓN DE BIENES GANANCIALES</b> (sólo si
                        existen bienes inmuebles o muebles que hayan adquirido
                        dentro del matrimonio).
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:space-x-4 md:flex">
                <section
                  id="#acta-de-conciliacion-para-divorcio"
                  className="mb-8 md:mb-8 px-3 py-6 md:text-[0.875rem] md:leading-[1.1rem] bg-white h-full text-justify tracking-tight flex-1"
                >
                  <div className="mb-2 md:mb-7 text-center">
                    <h3 className=" text-[1.5rem] text-btn-primary tracking-tighter">
                      Acta de Conciliación para Divorcio
                    </h3>
                    <p className="text-[0.6875rem]">
                      (POR HIJOS MENORES DE 18 AÑOS O MAYORES CON INCAPACIDAD)
                    </p>
                  </div>
                  <div>
                    <p className="mb-3">
                      El ACTA DE CONCILIACIÓN tiene que ser por acuerdo total,
                      respecto a los siguientes puntos:
                    </p>
                    <ul className="mb-3 ml-5 list-disc">
                      <li>
                        <b>TENENCIA Y CUSTODIA, </b> establecerán con quien se
                        quedará con los niños.
                      </li>
                      <li>
                        <b>REGIMEN DE VISITAS, </b> establecerán que días
                        visitará a los hijos, el padre que no los tiene.
                      </li>
                      <li>
                        <b>PENSION DE ALIMENTOS, </b>
                        monto de dinero de la pensión de alimentos para los
                        hijos.
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4 mx-auto h-[10.75rem] md:w-[16.25rem] relative">
                    <Image
                      className="mb-3 w-full object-cover"
                      fill
                      src="https://drive.google.com/uc?id=19d_Cj-qufhSxgtH19EWTmeSt86JNMGTy"
                      alt="acta de conciliacion para divorcio"
                    />
                  </div>
                  <div>
                    <p className="mb-3 font-bold ">
                      REQUISITOS DE SOLICITUD DE CONCILIACIÓN EXTRAJUDICIAL:
                    </p>
                    <ul className="mb-5 ml-5 list-disc">
                      <li>
                        Partida o acta de matrimonio (antigüedad no mayor a 1
                        mes)
                      </li>
                      <li>
                        Partida o acta de nacimiento de los hijos menores de
                        edad (antigüedad no mayor a 1 mes)
                      </li>
                      <li>
                        Solicitud: Describir en forma precisa los hechos materia
                        del conflicto.
                      </li>
                    </ul>
                    <div>
                      <b>PODER:</b> Cuando se actúe mediante APODERADO la
                      VIGENCIA DE PODER con antigüedad no mayor a un mes,
                      testimonio del poder y constancia de movimiento migratorio
                      (domiciliado en el extranjero), certificado domiciliario
                      (domicilio en provincia), certificado médico expedido por
                      un Centro de Salud Público o Privado (enfermedad).
                    </div>
                  </div>
                </section>
                <section
                  id="#liquidacion-de-bienes-gananciales"
                  className="px-3 py-6 md:text-[0.875rem] md:leading-[1.1rem] bg-white text-justify h-full tracking-tight flex-1"
                >
                  <div className="mb-2 md:mb-7 text-center">
                    <h3 className=" text-[1.5rem] text-btn-primary tracking-tighter">
                      Liquidación de Bienes Gananciales
                    </h3>
                    <p className="text-[0.6875rem]">
                      (SOLO PARA CONYUGES QUE HAYAN ADQUIRIDO BIENES MUEBLES O
                      INMUEBLES)
                    </p>
                  </div>
                  <div>
                    <p className="mb-3 font-bold">ELABORACIÓN DE MINUTA</p>
                    <p className="mb-3">
                      Uno de los requisitos para iniciar el trámite del Divorcio
                      es liquidar la sociedad de gananciales, estableciendo
                      cuales son los bienes de la sociedad conyugal y
                      repartirlos conforme a que ambos cónyuges acuerden.
                    </p>
                  </div>
                  <div className="mb-3 h-[10.75rem] md:w-[16.25rem] mx-auto relative">
                    <Image
                      fill
                      className="w-full object-cover"
                      src="https://drive.google.com/uc?id=1ZUKQfQcy9Bk8UvLglH90QX22NLsPebvo"
                      alt="liquidacion de bienes gananciales"
                    />
                  </div>
                  <div>
                    <p className="mb-3">
                      En esa liquidación los cónyuges tienen varias
                      alternativas, mencionamos algunos: puede adjudicarse el
                      bien inmueble a la cónyuge y el bien mueble al cónyuge o
                      viceversa, o en su defecto adjudicar el 100% solo a uno de
                      los cónyuges, en algunos casos dejan como anticipo de
                      legítima a los hijos.
                    </p>
                    <p className="mb-3">
                      En cuanto a los detalles específicos, es necesaria la
                      revisión de los documentos y solicitar una consulta
                      presencial.
                    </p>
                    <p className="mb-3 font-bold">REQUISITOS</p>
                    <ul className="mb-5 ml-5 list-disc">
                      <li>
                        Copia Literal de los bienes Inmuebles (Emitido por los
                        RR.PP)
                      </li>
                      <li>
                        Copia Literal de los bienes Muebles (Emitido por los
                        RR.PP)
                      </li>
                      <li>
                        Copia Simple de la tarjeta de propiedad (auto o
                        camioneta).
                      </li>
                    </ul>
                    <p>
                      El costo de la elaboración de la minuta va depender el
                      tipo de liquidación y el número de bienes a liquidar.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default divorcioRapido;
