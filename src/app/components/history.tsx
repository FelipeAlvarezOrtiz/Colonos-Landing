"use client";

import Image from "next/image";
import TomatoImg from "../../assets/Tomato.webp";
import OrnamentoLeft from "../../assets/Ornamento1.webp";
import OrnamentoRight from "../../assets/Ornamento2.webp";
import BannerBottom from "../../assets/images/BannerBottomHistory.webp";
import "../css/history.css";

export function History() {
  return (
    <section className="relative w-full  bg-white ">
      {/* Top curved section with illustrations */}
      <div className="relative">
        {/* Decorative vegetables - you may want to replace these with actual SVG icons */}
        <div className="mask absolute top-0 left-0 z-0 w-full ">
          <svg
            id="visual"
            viewBox="0 0 960 540"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <path
              d="M0 81L16 85.8C32 90.7 64 100.3 96 95.7C128 91 160 72 192 75.7C224 79.3 256 105.7 288 117.2C320 128.7 352 125.3 384 114.2C416 103 448 84 480 81C512 78 544 91 576 99.3C608 107.7 640 111.3 672 105.3C704 99.3 736 83.7 768 85.3C800 87 832 106 864 110.8C896 115.7 928 106.3 944 101.7L960 97L960 0L944 0C928 0 896 0 864 0C832 0 800 0 768 0C736 0 704 0 672 0C640 0 608 0 576 0C544 0 512 0 480 0C448 0 416 0 384 0C352 0 320 0 288 0C256 0 224 0 192 0C160 0 128 0 96 0C64 0 32 0 16 0L0 0Z"
              fill="#519551"
            ></path>
            <path
              d="M0 27L16 26.3C32 25.7 64 24.3 96 27.8C128 31.3 160 39.7 192 49.5C224 59.3 256 70.7 288 73.2C320 75.7 352 69.3 384 66.8C416 64.3 448 65.7 480 61.3C512 57 544 47 576 42.3C608 37.7 640 38.3 672 37.3C704 36.3 736 33.7 768 37.3C800 41 832 51 864 52.3C896 53.7 928 46.3 944 42.7L960 39L960 0L944 0C928 0 896 0 864 0C832 0 800 0 768 0C736 0 704 0 672 0C640 0 608 0 576 0C544 0 512 0 480 0C448 0 416 0 384 0C352 0 320 0 288 0C256 0 224 0 192 0C160 0 128 0 96 0C64 0 32 0 16 0L0 0Z"
              fill="#009246"
            ></path>
          </svg>
        </div>

        {/* Main heading */}
        <h1 className="absolute w-full  md:top-[18px] lg:top-[50px] text-white text-2xl md:text-4xl lg:text-6xl font-bold text-center z-10">
          Nuestra Historia
        </h1>
        <div>
          <Image
            width={400}
            height={400}
            src={OrnamentoLeft}
            alt="Ornamento Izquierdo"
            className="hidden md:block absolute left-0 top-0 z-0 pt-10 pl-10 md:w-[200px] md:h-[200px] lg:w-[400px] lg:h-[400px]"
          />
          <Image
            width={400}
            height={400}
            src={OrnamentoRight}
            alt="Ornamento Derecho"
            className="hidden md:block absolute right-0 pt-10 pr-10 top-0 z-10 md:w-[200px] md:h-[200px] lg:w-[400px] lg:h-[400px]"
          />
        </div>
      </div>

      {/* Main content section */}
      <div className="max-w-7xl mx-auto px-4 pt-20 md:pt-40 lg:pt-80">
        <div className="bg-white p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800">
              Innovación y Tradición
              <span className="block text-[#1B4332] font-semibold">
                en Cada Cosecha
              </span>
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Agrícola los Colonos nace hace más de 50 años por inmigrantes
              italianos, que comenzaron a integrarse en la agricultura y luego
              con ayuda de la segunda y terceras generaciones se fue potenciando
              la Empresa y así disponer de más de 500 hectáreas dedicadas a
              hortalizas y frutales para ventas de retail y mercado fresco,
              promoviendo siempre la calidad e innovación en nuestros productos.
            </p>
          </div>

          <div className="md:w-1/2">
            <Image
              src={TomatoImg}
              alt="Tomates frescos"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full"
            />
          </div>
        </div>
      </div>
      <Image
        src={BannerBottom}
        alt="Banner Bottom"
        width={1920}
        height={1080}
        className="w-full h-[150px] md:h-[500px] object-cover"
      />
    </section>
  );
}
