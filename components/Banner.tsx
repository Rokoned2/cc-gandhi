import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div className="px-3 pb-3 mb-4 bg-comp-primary">
      <h3 className="py-3 text-[1.1rem] md:text-[1.375rem] text-btn-primary text-center">
        " Especialistas en Contrataciones con el Estado,Empresas y Familia "
      </h3>
      <Swiper
        className="max-w-[61.25rem] w-full"
        loop={true}
        // modules={[Pagination]}
        pagination={true}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="flex flex-col">
          <img
            src="https://chehadeabogados.com/wp-content/uploads/2018/12/lima.png"
            className="bg-cover"
          />
          <div className="px-2 pt-2 pb-4 bg-white">
            <h5>DESALOJO DE INMUEBLES</h5>
            <p className="text-[0.8125rem]">Entrega de bienes/inmuebles</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://chehadeabogados.com/wp-content/uploads/2018/12/larcomar.png"
            className="bg-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
