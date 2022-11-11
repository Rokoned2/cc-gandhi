import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MateriasSection from "../components/MateriasSection";

const Home: NextPage = () => {
  return (
    <div className="mb-8 font-montserrat">
      <Head>
        <title>CENTRO DE CONCILIACIÓN GANDHI</title>
        <meta
          name="description"
          content="
          Jr. Industrial 376 - 1 - Ate - Tel 994-393-724 Divorcios, Alimentos,
          Tenencia, Pago de Deudas, Conciliaciones con el Estado
        "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <MateriasSection />
    </div>
  );
};

export default Home;
