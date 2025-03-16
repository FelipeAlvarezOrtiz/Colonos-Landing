"use client";
import { useMemo } from "react";
import Image from "next/image";
import Slider1 from "../../assets/Slider1.webp";
import Slider2 from "../../assets/Slider2.webp";
import Slider3 from "../../assets/Slider3.webp";
import Slider4 from "../../assets/Slider4.webp";
import BannerLosColonos from "../../assets/images/Banner_Colonos.webp";
import PapaIcon from "../../assets/images/PapasIcon.webp";
import LechugaIcon from "../../assets/images/LechugaIcon.webp";
import ZanahoriaIcon from "../../assets/images/ZanahoriaIcon.png";
import EspinacaIcon from "../../assets/images/EspinacaIcon.webp";
import BrocoliIcon from "../../assets/images/BrocoloIcon.webp";
import ChocloIcon from "../../assets/images/ChocloIcon.webp";
import LogoLosColonos from "../../assets/images/Logo_LC_blanco.webp";
import LogoLider from "../../assets/Logo_Lider.png";
import BannerTop from "../../assets/bannerTop.svg";
import BannerBottom from "../../assets/bannerBottom.svg";
import Ornamento1 from "../../assets/Ornamento1.webp";
import Ornamento2 from "../../assets/Ornamento2.webp";
import IconClick from "../../assets/IconClick.svg";
import "../css/carrousel.css";

export function Carrousel() {
  const images = useMemo(
    () => [
      Slider1,
      Slider2,
      Slider3,
      Slider4, // Repetir imágenes para el efecto de bucle
    ],
    []
  );

  const listIcons = [
    {
      icon: PapaIcon,
      label: "Papas",
    },
    {
      icon: LechugaIcon,
      label: "Lechuga",
    },
    {
      icon: ZanahoriaIcon,
      label: "Zanahoria",
    },
    {
      icon: EspinacaIcon,
      label: "Espinaca",
    },
    {
      icon: BrocoliIcon,
      label: "Brócoli",
    },
    {
      icon: ChocloIcon,
      label: "Choclo",
    },
  ];

  return (
    <div className="section-products">
      {/* Banner with logo */}
      <div className="relative flex justify-center items-center">
        <Image
          src={BannerLosColonos}
          width={1920}
          height={1080}
          alt="Banner Los Colonos"
          className="w-full h-[150px] md:w-full md:h-[288px]"
        />
        <Image
          src={LogoLosColonos}
          width={400}
          height={300}
          alt="Banner Los Colonos"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] md:w-auto h-[80px]  md:h-[170px]"
        />
      </div>

      <div className="overflow-hidden w-full flex justify-center items-center ">
        <div className="flex h-[100px] md:h-[288px] track">
          {images.concat(images).map(
            (
              image,
              index // Duplicar imágenes
            ) => (
              <Image
                width={400}
                height={400}
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className="w-[33.33%] flex-shrink-0"
              />
            )
          )}
        </div>
      </div>
      <div className="section-products__content">
        <h2 className="text-center text-3xl md:text-[64px] font-bold font-stretch-normal line-height-[64px] font-[#1a3b2a] mt-[50px] md:mt-[141px] mr-[2px] mb-[53px] ml-[1px] raleway">
          Nuestros Productos
        </h2>
        <div className="flex justify-center items-center flex-wrap gap-[80px] m-auto max-w-[1200px]">
          {listIcons.map((icon) => (
            <div
              key={icon.label}
              className="px-5 md:px-0 max-w-[100px] flex flex-col items-center gap-[20px] justify-center"
            >
              <Image
                width={400}
                height={400}
                src={icon.icon}
                alt={`${icon.label}-img`}
                className="w-[50px] md:w-[100px] h-[50px] md:h-[100px]"
              />
              <p className="text-md md:text-[27px] font-bold font-stretch-normal line-height-[27px] font-[#1a3b2a] text-center raleway">
                {icon.label}
              </p>
            </div>
          ))}
          <p className="px-5 md:px-0 text-[27px] font-bold font-stretch-normal line-height-[27px] font-[#1a3b2a] text-center raleway">
            ...alcachofa, betarraga y más
          </p>
        </div>
      </div>
      <div className="px-5 md:px-0 flex flex-col md:flex-row justify-center items-center mt-[32px]">
        <h2 className="text-[27px] md:text-[48px] font-bold font-stretch-normal mr-4 line-height-[64px] font-[#1a3b2a] raleway">
          Nos encuentras en
        </h2>
        <div className="">
          <Image
            style={{ height: "auto" }}
            src={LogoLider}
            alt="Logo Walmart"
            className="w-[200px] h-auto md:w-[300px] "
          />
        </div>
      </div>
      {/* Banner bottom */}
      <div className="relative h-[333px] flex justify-end items-center flex-col">
        <Image
          src={BannerTop}
          width={300}
          height={300}
          alt="Banner Top"
          className="w-full h-full absolute -z-10"
        />
        <span className="text-[22px] font-stretch-normal line-height-[22px] text-white raleway">
          Agricola Los Colonos:
        </span>
        <p className="text-sm md:text-[22px] font-bold text-center font-stretch-normal line-height-[22px] text-white pb-8 raleway">
          Innovación y tradición en Cada Cosecha
        </p>
      </div>
      <div className="relative w-full h-[100px] md:h-[339px]">
        <Image
          src={BannerBottom}
          width={200}
          height={200}
          alt="Banner Bottom"
          className="w-full h-[60%] absolute -z-10"
        />
        <div className="mt-8 md:mt-0 absolute top-0 left-0 w-full h-full flex justify-between items-center">
          <Image
            src={Ornamento1}
            width={300}
            height={300}
            alt="Ornamento 1"
            className="hidden md:block w-[200px] md:w-[500px]"
          />
          <div className="flex w-full items-center md:items-end md:w-1/2 md:h-full justify-center">
            <Image
              src={IconClick}
              width={300}
              height={300}
              alt="Icon Click"
              className="w-[50px] md:w-[100px]"
            />
            <div>
              <h2 className="text-[22px] md:text-[44px] font-bold text-left text-[#4fc685] m-0 p-0">
                Estamos a
              </h2>
              <p className="text-[22px] md:text-[44px] text-left text-[#4fc685] m-0 p-0">
                un clic de distancia.
              </p>
            </div>
          </div>
          <Image
            src={Ornamento2}
            width={300}
            height={300}
            alt="Ornamento 2"
            className="hidden md:block w-[200px] md:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
}
