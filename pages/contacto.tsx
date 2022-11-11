import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const contacto = () => {
  return (
    <div>
      <Head>
        <title>CONTACTO - CENTRO DE CONCILIACIÓN GANDHI</title>
      </Head>
      <div className="w-full mt-4">
        <div className="max-w-[61.25rem] mx-auto flex flex-col">
          <div className="w-full  flex flex-col md:flex-row">
            <div className="px-4 lg:w-2/5 items-center justify-between flex">
              <img
                className="mx-auto w-full lg:w-auto"
                src="https://drive.google.com/uc?id=1QeA-RQXMzuklrkNw6anQwVZPxjfSaoXf"
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
          <Link
            target="_blank"
            href="https://www.google.com/maps/place/Centro+de+Conciliaci%C3%B3n+Gandhi+-+Ate+Vitarte+-+Divo/data=!3m1!4b1!4m2!3m1!1s0x9105c3f7c8394e7f:0xffb5ee73d6939f7a"
            className="my-5 h-72 relative w-full"
          >
            <Image
              className="object-center object-cover w-full"
              fill
              alt="mapa de google maps de el centro de conciliación Gandhi"
              src="https://drive.google.com/uc?id=1fvjX6ZxqxbxjKBysRfbBtb_yHPUBljyR"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default contacto;
