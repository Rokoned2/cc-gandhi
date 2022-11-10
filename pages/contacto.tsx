import Head from "next/head";
import React from "react";

const contacto = () => {
  return (
    <div>
      <Head>
        <title>CONTACTO - CENTRO DE CONCILIACIÓN GANDHI</title>
      </Head>
      <div className="w-full">
        <div className="max-w-[61.25rem] mx-auto flex flex-col">
          <div className="w-full  flex flex-col md:flex-row">
            <div className="px-4 lg:w-2/5 items-center justify-between flex">
              <img
                className="mx-auto w-full lg:w-auto"
                src="https://static.wixstatic.com/media/f44544_2ea4cc89a5ee419e88e1b9432e4a6ae3.png/v1/fill/w_268,h_215,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f44544_2ea4cc89a5ee419e88e1b9432e4a6ae3.png"
                alt=""
              />
            </div>
            <div className="px-6 py-8 lg:w-3/5">
              <div className="mb-8">
                <h3 className="mb-3 font-bold">Contáctenos</h3>
                <p className="mb-3 ml-8">Número: 994393724</p>
                <p className="mb-3 ml-8">Correo: alan_medina@hotmail.com</p>
              </div>
              <div>
                <p className="mb-3">Horario de atención:</p>
                <p className="mb-3 ml-8">Lunes a Viernes de 7:30 AM a 07 PM</p>
                <p className="mb-3 ml-8">Sábados de 7:30 AM a 05 PM</p>
                <p className="mb-3 ml-8">Domingos de 7:30 AM a 12 PM</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row">
            <div className="pl-2 py-5 lg:w-2/5 bg-comp-primary">
              <p className="mb-4">Dirección:</p>
              <b>OFICINA PRINCIPAL:</b>
              <p>Jr. Industrial 376 - 1 - Ate</p>
            </div>
            <div className="lg:w-3/5">
              <div className="flex flex-col mx-2">
                <h3 className="text-xl text-center font-bold">Escríbenos</h3>
                <div className="mb-3 lg:flex">
                  <div className="lg:mr-1 flex-1">
                    <input
                      placeholder="Nombre *"
                      className="mb-5 lg:mb-1 py-3 pl-2 border-[1px] border-btn-primary w-full "
                      type="text"
                    />
                    <input
                      placeholder="Nombre *"
                      className="mb-5 lg:mb-1 py-3 pl-2 border-[1px] border-btn-primary w-full "
                      type="text"
                    />
                    <input
                      placeholder="Nombre *"
                      className="mb-5 lg:mb-0 py-3 pl-2 border-[1px] border-btn-primary w-full "
                      type="text"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      placeholder="Nombre *"
                      className="mb-3 pt-3 pb-20 pl-2 border-[1px] border-btn-primary w-full h-full"
                      type="text"
                    />
                  </div>
                </div>
                <button className="py-2 px-3 ml-auto bg-btn-primary text-white ">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contacto;
