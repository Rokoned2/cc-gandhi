import Head from "next/head";
import React from "react";
import MateriasSection from "../components/MateriasSection";

const materiasConciliables = () => {
  return (
    <div>
      <Head>
        <title>DIVORCIO RAPIDO - CENTRO DE CONCILIACIÓN GANDHI</title>
      </Head>
      <div className="">
        <MateriasSection />
      </div>
    </div>
  );
};

export default materiasConciliables;
