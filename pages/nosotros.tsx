import Head from "next/head";
import React from "react";

const nosotros = () => {
  return (
    <div>
      <Head>
        <title>NOSOTROS - CENTRO DE CONCILIACION GANDHI</title>
      </Head>
      <div className="py-8 font-montserrat px-4 tracking-tight  max-w-[61.25rem] mx-auto">
        <h3 className="pb-4 text-[1.8rem] text-btn-primary md:text-center">
          Nosotros
        </h3>
        <div className=" flex flex-col md:flex-row">
          <div className="h-auto w-full md:w-1/3 md:pr-5">
            <img
              className=" mb-6 p-2 bg-comp-secondary mx-auto h-auto w-full rounded"
              src="https://static.wixstatic.com/media/f44544_b2640354c8c04880ac07c147eb80b5d6~mv2.jpg/v1/crop/x_32,y_73,w_427,h_496/fill/w_268,h_311,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_2617.jpg"
              alt=""
            />
          </div>
          <div className="md:w-2/3">
            <div className="  text-[1.1rem]  md:leading-[1.2rem] md:text-[1rem] text-justify">
              <p className="mb-2">
                El
                <span className="font-bold">
                  {" "}
                  Centro de Conciliación M.C. Gandhi Vitarte
                </span>
                , es una asociación destinada a promover una cultura de paz y
                cuyo objetivo fundamental es la de prestar servicios en el área
                de medios alternativos de solución de conflictos; estamos
                debidamente autorizados, mediante resolución Directoral
                008-2015-JUS/DGDPAJ por el Ministerio de Justicia.
              </p>
              <p className="mb-2">
                Somos un Centro de Conciliación líder e innovador atendido por
                Abogados Conciliadores, quienes garantizamos acuerdos exigibles,
                ejecutables ante el Poder Judicial. Brindamos servicios de
                conciliación a Personas Naturales, Personas Jurídicas y
                conciliaciones con el Estado.
              </p>
              <p>
                Para mayor comodidad y facilidad de acceso de nuestros clientes,
                estamos ubicados en la Av. Javier Prado Este No. 255 Oficina 701
                - San Isidro. Nuestras oficinas cuentan con una moderna
                infraestructura especialmente diseñada para realizar una función
                conciliadora, que aseguran una óptima y eficaz prestación del
                servicio conciliatorio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default nosotros;
