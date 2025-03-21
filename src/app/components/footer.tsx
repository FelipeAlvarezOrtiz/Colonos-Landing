"use client";

import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandWhatsapp } from "react-icons/tb";
import { IoMdPin } from "react-icons/io";
import BackgroundFooter from "../../assets/BackgroundFooter.svg";
import LogoLosColonos from "../../assets/images/Logo_LC_blanco.webp";
import "../css/footer.css";

export function Footer() {
  return (
    <div className="relative h-[300px] w-full flex flex-col md:flex-row justify-start md:justify-around items-center">
      <Image
        src={BackgroundFooter}
        width={1920}
        height={1080}
        alt="Background Footer"
        className="footer-bg w-full h-full absolute -z-10"
      />
      <div className="flex flex-col items-center md:block pb-[20px] md:pb-[80px] pt-[80px]">
        <div className="flex gap-[16px] pb-[16px]">
          <a href="https://www.facebook.com/">
            <FaFacebookSquare color="#FFFFFF" size={32} />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram color="#FFFFFF" size={32} />
          </a>
          <a href="https://www.twitter.com/">
            <TbBrandWhatsapp color="#FFFFFF" size={32} />
          </a>
        </div>
        <div className="flex items-center justify-center w-full text-center px-16 md:px-0">
          <IoMdPin color="#FFFFFF" size={32} />
          <p className="inline-block text-white text-cen ">
            Estancia Barriales S/N, Pan de Azúcar, Coquimbo.{" "}
          </p>
        </div>
      </div>
      <div className="footer__img-center"></div>
      <Image
        src={LogoLosColonos}
        width={400}
        height={400}
        alt="Logo Los Colonos"
        className="w-[150px] md:w-auto h-[80px]  md:h-[130px]"
      />
    </div>
  );
}
