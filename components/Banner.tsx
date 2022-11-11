import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Banner = () => {
  return (
    <div className="px-3 pb-3 mb-4 bg-comp-primary">
      <h3 className="py-3 text-[1.1rem] md:text-[1.375rem] text-btn-primary text-center">
        " Especialistas en Contrataciones con el Estado,Empresas y Familia "
      </h3>
      <Swiper
        className="max-w-[61.25rem] w-full"
        loop={true}
        pagination={true}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className=" flex-col flex">
          <div className="h-[22.5rem] w-full relative">
            <Image
              priority
              fill
              className="object-cover"
              alt="DESALOJO DE INMUEBLES"
              src="https://drive.google.com/uc?id=1c4UKmPvH8wrm6TatoSXQIXR0kM9tSQPm"
            />
          </div>
          <div className="px-2 pt-2 pb-4 bg-white">
            <h5>DESALOJO DE INMUEBLES</h5>
            <p className="text-[0.8125rem]">Entrega de bienes/inmuebles</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[22.5rem] w-full relative">
            <Image
              fill
              className="object-cover"
              src="https://drive.google.com/uc?id=1Lz15deg6YgmLPsu9moOnFABlrdiGxBRI"
              alt="CONCILIACIONES CON EL ESTADO"
            />
          </div>
          <div className="px-2 py-2 bg-white">
            <h5>CONCILIACIONES CON EL ESTADO</h5>
            <p className="text-[0.8125rem]">
              Conciliamos con empresas, personas naturales y el Estado.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[22.5rem] w-full relative">
            <Image
              src="https://drive.google.com/uc?id=1wjwUUCmfjHVJSDreXqMMOPFaYUfeD8wy"
              alt="CONCILIACION PARA DIVORCIOS"
              fill
              className="object-cover"
            />
          </div>
          <div className="px-2 py-2 bg-white">
            <h5>CONCILIACION PARA DIVORCIOS</h5>
            <p className="text-[0.8125rem]">
              Tenencia y custodia, Régimen de Visitas y Alimentos
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-[22.5rem] w-full relative">
            <Image
              src="https://drive.google.com/uc?id=1yFy6i73VeP9AJRBj4Uuo_Xi0Skr_X4CM"
              alt="INDEMNIZACIONES"
              fill
              className="object-cover"
            />
          </div>
          <div className="px-2 py-2 bg-white">
            <h5>INDEMNIZACIONES</h5>
            <p className="text-[0.8125rem]">
              Indemnización por daños y perjuicios
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[22.5rem] w-full relative">
            <Image
              src="https://drive.google.com/uc?id=15iaTt2_yz-YyXxkDHOIPMNfpDxt-Jgwm"
              alt="REGIMEN DE VISITAS"
              fill
              className="object-cover"
            />
          </div>
          <div className="px-2 py-2 bg-white">
            <h5>REGIMEN DE VISITAS</h5>
            <p className="text-[0.8125rem]"> </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[22.5rem] w-full relative">
            <Image
              src="https://drive.google.com/uc?id=1bG4En6luqf0uFnsR2rIKcbnHUQ6rNScM"
              alt="TENENCIA Y CUSTODIA"
              fill
              className="object-cover"
            />
          </div>
          <div className="px-2 py-2 bg-white">
            <h5>TENENCIA Y CUSTODIA</h5>
            <p className="text-[0.8125rem]">
              Somos especialistas en Derecho Familia
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[22.5rem] w-full relative">
            <Image
              src="https://drive.google.com/uc?id=1MwwQMQImV7mQoHEEgINgNSVJ0wb0nI2f"
              alt="CONCILIACIONES CON EMPRESAS"
              fill
              className="object-cover"
            />
          </div>
          <div className="px-2 py-2 bg-white">
            <h5>CONCILIACIONES CON EMPRESAS</h5>
            <p className="text-[0.8125rem]">Cobro de deudas</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[22.5rem] w-full relative">
            <Image
              priority
              src="https://drive.google.com/uc?id=1XOppaqE1DJfBuEZIpG-rKXERSuMaF4Qb"
              alt="DIVISION Y PARTICION"
              fill
              className="object-cover"
            />
          </div>
          <div className="px-2 py-2 bg-white">
            <h5>DIVISIÓN Y PARTICIÓN</h5>
            <p className="text-[0.8125rem]"> </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
