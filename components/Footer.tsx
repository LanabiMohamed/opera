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
      <div className="max-w-[70rem] mx-auto p-2 flex justify-center md:justify-around  items-center flex-col md:flex-row">
        <Image alt="Opera Peinture" src={logo} className="w-44 md:w-60 py-6" />
        <div>
          <h2 className="text-xl font-semibold pb-2">Download the app</h2>
          <div className="flex gap-2 justify-center text-gray-600">
            <FaApple size={35} />
            <IoLogoGooglePlaystore size={35} />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="py-4">
          <h2 className="text-xl text-center md:text-start font-semibold pb-2">
            Connect With Us
          </h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-600">
            <a
              href="https://www.facebook.com/operapeintureofficiel/"
              target="_blank"
            >
              <FaFacebookF size={35} />
            </a>
            <a
              href="https://www.instagram.com/operapeinture/?hl=en"
              target="_blank"
            >
              <FaInstagram size={35} />
            </a>

            <a
              href="https://www.youtube.com/channel/UChY88pBKtBtzjPVXgA82WZg"
              target="_blank"
            >
              <FiYoutube size={35} />
            </a>

            <a href="https://twitter.com/operapeinture?lang=en" target="_blank">
              <FaXTwitter size={35} />
            </a>

            <a
              href="https://www.linkedin.com/company/opera-peinture/"
              target="_blank"
            >
              <FaLinkedinIn size={35} />
            </a>
            <div className="flex items-center gap-2">
              <MdAlternateEmail size={35} />
              <b className="text-black">Contact@operapeinture.com</b>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
