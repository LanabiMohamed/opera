import { FaApple, FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import Image from "next/image";
import logo from "@public/logo.png";

function Footer() {
  return (
    <footer className="bg-gray-100 pb-10">
      <Image alt="Opera Peinture" src={logo} className="w-72 mx-auto py-10" />
      <div className="max-w-[70rem] mx-auto p-2 flex justify-between items-start md:items-center flex-col md:flex-row">
        <div>
          <h2 className="text-xl font-semibold pb-2">Download the app</h2>
          <div className="flex gap-2">
            <FaApple size={35} />
            <IoLogoGooglePlaystore size={35} />
          </div>
        </div>
        <div className="py-4">
          <h2 className="text-xl font-semibold pb-2">Connect With Us</h2>
          <div className="flex flex-wrap gap-6">
            <FaFacebookF size={35} />
            <FaInstagram size={35} />
            <FaLinkedinIn size={35} />
            <FiYoutube size={35} />
            <FaXTwitter size={35} />
            <div className="flex items-center gap-2">
              <MdAlternateEmail size={35} />
              <b>Contact@operapeinture.com</b>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
