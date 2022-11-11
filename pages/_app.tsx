import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AccessButtons from "../components/AccessButtons";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-montserrat">
      <Header />
      <Component {...pageProps} />
      <Footer />
      <AccessButtons />
    </div>
  );
}

export default MyApp;
