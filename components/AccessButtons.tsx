import Link from "next/link";
import wsp from "../images/wspp.svg";

const AccessButtons = () => {
  return (
    <Link
      href="https://api.whatsapp.com/send/?phone=%2B51994393724&text&type=phone_number&app_absent=0"
      target="_blank"
      className="fixed bottom-5 right-5 p-3 w-14 h-14 bg-[#21D366] z-10 rounded-full"
    >
      <img className="object-cover" src={wsp.src} alt="" />
    </Link>
  );
};

export default AccessButtons;
