import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MateriasSection from "../components/MateriasSection";

const Home: NextPage = () => {
  return (
    <div className="font-montserrat">
      <Head>
        <title>CENTRO DE CONCILIACIÓN GANDHI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <MateriasSection />
    </div>
  );
};

export default Home;
