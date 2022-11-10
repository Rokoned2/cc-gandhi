import Head from "next/head";
import React from "react";

const conciliacionConPoder = () => {
  return (
    <div>
      <Head>
        <title>CONCILIACIÓN CON PODER - CENTRO DE CONCILIACION GANDHI</title>
      </Head>
      <div className="w-full bg-comp-primary">
        <div className="px-4 md:px-0 py-4 max-w-[61.25rem]  mx-auto">
          <div className="bg-[#F5F2F2]  flex flex-col">
            <div className="tracking-tight bg-[#FFFFFF33] mx-3 my-2 px-2 pt-3">
              <h2 className="mb-10 text-[1.6rem] border-b-[1px] mx-3 text-center font-bold">
                PODER PARA CONCILIAR
              </h2>
              <div className="bg-comp-primary px-5 py-6 mb-8 flex flex-col md:flex-row flex-wrap">
                <div className="mt-5 md:flex">
                  <div className="mr-4 mt-2 mb-4 md:mb-0 md:text-[0.875rem] md:leading-[1.1rem] text-left tracking-tight items-start justify-center flex-col flex md:w-3/5">
                    <p className="mb-6 text-btn-primary">
                      {"("}Ref. Artículo 14 de la Ley de Conciliación y Artículo
                      13, y 14 del Reglamento{")"}.
                    </p>
                    <p>
                      La concurrencia a la audiencia de conciliación es
                      personal; salvo las personas que conforme a Ley deban
                      actuar a través de representante legal.
                    </p>
                  </div>

                  <div className=" md:w-2/5">
                    <img
                      className="mx-auto w-full"
                      src="https://static.wixstatic.com/media/88c70a6c8f23498ab418e155831327ee.jpg/v1/fill/w_296,h_157,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/88c70a6c8f23498ab418e155831327ee.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="md:space-x-4 md:flex">
                <div className="mb-8 md:mb-8 px-3 py-6 md:text-[0.875rem] md:leading-[1.1rem] bg-white h-full text-justify tracking-tight flex-1">
                  <div className="mb-2 md:mb-7 text-center">
                    <h3 className=" text-[1.5rem] text-btn-primary tracking-tighter">
                      PODER DE PERSONAS JURÍDICAS
                    </h3>
                    <p className="text-[0.6875rem]">(Empresas)</p>
                  </div>
                  <div>
                    <p className="mb-3">
                      En su poder tiene que estar consignadas literalmente las
                      siguientes facultades:
                    </p>
                    <ul className="mb-3 ml-5 list-disc">
                      <li>Poder para conciliar extrajudicialmente</li>
                      <li>Disponer del derecho materia de conciliación</li>
                      <li>
                        Pudiendo ser el invitado o solicitante en un
                        procedimiento conciliatorio.
                      </li>
                    </ul>
                  </div>
                  {/* <img
                    className="mb-3 w-full mx-auto md:w-[16.25rem]"
                    src="https://static.wixstatic.com/media/f44544_d938e286045b4cc1a65061334d6dfc8c.jpg/v1/fill/w_261,h_195,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f44544_d938e286045b4cc1a65061334d6dfc8c.jpg"
                    alt=""
                  /> */}

                  <div className="mb-5">
                    <p className="mb-3">
                      Se tiene que adjuntar la VIGENCIA DE PODER (antigüedad no
                      mayor a 1 mes).
                    </p>
                    <p>
                      Por otro lado, en caso de haber sido otorgado con
                      posterioridad a la invitación a conciliar, el poder será
                      por ESCRITURA PÚBLICA y con facultades antes indicadas, no
                      requerirá inscripción registral.
                    </p>
                  </div>
                  <img
                    className="mb-3 w-full mx-auto md:w-[16.25rem]"
                    src="https://static.wixstatic.com/media/0e80c7ede69f4ff199b56a4b4391f77b.jpg/v1/fill/w_279,h_140,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0e80c7ede69f4ff199b56a4b4391f77b.jpg"
                    alt=""
                  />
                </div>
                <div className="px-3 py-6 md:text-[0.875rem] md:leading-[1.1rem] bg-white text-justify h-full tracking-tight flex-1">
                  <div className="mb-2 md:mb-7 text-center">
                    <h3 className=" text-[1.5rem] text-btn-primary tracking-tighter">
                      PODER DE PERSONAS NATURALES
                    </h3>
                  a/div>
                  <div></div>
                  <p className="mb-3">
                    En su poder tiene que estar consignadas literalmente las
                    siguientes facultades:
                  </p>
                  <ul className="mb-5 ml-5 list-disc">
                    <li>Poder para conciliar extrajudicialmente</li>
                    <li>Disponer del derecho materia de conciliación</li>
                    <li>
                      Pudiendo ser el invitado o solicitante en un procedimiento
                      conciliatorio.
                    </li>
                  </ul>
                  <p className="mb-3 font-bold">
                    Además del poder con las facultades antes indicadas, en este
                    caso dado que es para representar a personas naturales deben
                    adjuntar los siguientes documentos:
                  </p>
                  <ul className="mb-5 ml-5 list-disc">
                    <li>
                      <b>Reporte Migratorio -</b> En el caso de personas
                      domiciliadas en el extranjero.
                    </li>
                    <li>
                      <b>Certificado Médico -</b>
                      En caso de enfermedad, emitido por Institución de Salud
                    </li>
                    <li>
                      <b>Certificado Domiciliario -</b>
                      En caso que domicilien en provincias u otro distrito
                      Conciliatorio.
                    </li>
                  </ul>
                  <p className="mb-3">
                    Se tiene que adjuntar la VIGENCIA DE PODER (antigüedad no
                    mayor a 1 mes).
                  </p>
                  <p className="mb-3">
                    Por otro lado, en caso de haber sido otorgado con
                    posterioridad a la invitación a conciliar, el poder deberá
                    ser extendido mediante ESCRITURA PÚBLICA y con facultades
                    expresamente otorgadas para conciliar, no requerirá
                    inscripción registral.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default conciliacionConPoder;
