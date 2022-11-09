import React from "react";

interface MateriaItemProps {
  title: string;
  types: string[];
  image: string;
  button?: boolean;
}

const MateriaItem: React.FC<MateriaItemProps> = ({
  title,
  types,
  image,
  button = false,
}) => {
  return (
    <div className="mb-8 md:w-1/2 lg:w-1/3 flex flex-col">
      <div className="lg:h-[16.5625rem] ">
        <img
          src={image}
          className="w-[12rem] lg:w-[16.5625rem] mb-3 mx-auto rounded-full p-1.5 bg-white shadow-2xl"
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
  );
};

export default MateriaItem;
