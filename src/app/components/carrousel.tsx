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
          className="w-full h-[288px]"
        />
        <Image
          src={LogoLosColonos}
          width={400}
          height={300}
          alt="Banner Los Colonos"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  h-[170px]"
        />
      </div>

      <div className="overflow-hidden w-full flex justify-center items-center ">
        <div className="flex h-[200px] md:h-[288px] track">
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
        <h2 className="text-center text-[36px] md:text-[64px] font-bold font-stretch-normal line-height-[64px] font-[#1a3b2a] mt-[141px] mr-[2px] mb-[53px] ml-[1px]">
          Nuestros Productos
        </h2>
        <div className="flex justify-center items-center flex-wrap gap-[80px] m-auto max-w-[1200px]">
          {listIcons.map((icon) => (
            <div
              key={icon.label}
              className="max-w-[100px] flex flex-col items-center gap-[20px] justify-center"
            >
              <Image
                width={400}
                height={400}
                src={icon.icon}
                alt={`${icon.label}-img`}
                className="section-products__image"
              />
              <p className="text-[27px] font-bold font-stretch-normal line-height-[27px] font-[#1a3b2a] text-center">
                {icon.label}
              </p>
            </div>
          ))}
          <p className="text-[27px] font-bold font-stretch-normal line-height-[27px] font-[#1a3b2a] text-center">
            ...alcachofa, betarraga y más
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-[32px]">
        <h2 className="text-[32px] md:text-[48px] font-bold font-stretch-normal mr-4 line-height-[64px] font-[#1a3b2a]">
          Nos encuentras en
        </h2>
        <div className="">
          <Image width={300} height={300} src={LogoLider} alt="Logo Walmart" />
        </div>
      </div>
      {/* Banner bottom */}
      {/* TODO: Aca quede */}
      <div className="section-products__footer">
        <span>Agricola Los Colonos:</span>
        <p>Innovación y tradición en Cada Cosecha</p>
      </div>
      <div className="section-products__footer--bottom">
        <div className="content">
          <div className="content__img--left" />
          <div className="content__description">
            <div className="content__description--image-clic" />
            <div>
              <h2>Estamos a</h2>
              <p>un clic de distancia.</p>
            </div>
          </div>
          <div className="content__img--right" />
        </div>
      </div>
    </div>
  );
}
