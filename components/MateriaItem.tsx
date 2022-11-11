import React from "react";
import Image from "next/image";

interface MateriaItemProps {
  title: string;
  types: string[];
  image: string;
  button?: boolean;
  classNamePlus?: string;
}

const MateriaItem: React.FC<MateriaItemProps> = ({
  title,
  types,
  image,
  button = false,
  classNamePlus,
}) => {
  return (
    <div className={`mb-8 md:w-1/2 lg:w-1/3 flex flex-col`}>
      <div className={`${classNamePlus}`}>
        <div className="mb-6 w-[12rem] h-[9.875rem] lg:w-[19.875rem] lg:h-[16.5625rem] shadow-2xl mx-auto rounded-[10rem] overflow-hidden relative">
          <Image
            fill
            src={image}
            className="p-1.5 rounded-full bg-white object-cover object-center"
            alt=""
          />
        </div>
        <h4 className="text-[1.3rem] lg:text-[1.125rem] text-center font-bold">
          {title}
        </h4>
        <ul className="mb-6 mx-2 text-[1.1rem]  lg:leading-[1.2rem] lg:text-[0.875rem]">
          {types.map((type: string, index) => (
            <li key={index}>
              <span className="text-[1.25rem] font-extrabold">· </span>
              {type}
            </li>
          ))}
        </ul>
        <button
          className={`${
            button ? "" : "hidden"
          } px-8 py-1 text-[1.2rem] text-white rounded-full bg-btn-primary hover:bg-btn-hover mx-auto transition-colors`}
        >
          Ver más
        </button>
      </div>
    </div>
  );
};

export default MateriaItem;
