"use client";
import Image from "next/image";
import { useEffect, useState, useCallback, useMemo } from "react";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import SliderImg1 from "../../assets/Slider1.webp";
import SliderImg2 from "../../assets/Slider2.webp";
import SliderImg3 from "../../assets/Slider3.webp";
import SliderImg4 from "../../assets/Slider4.webp";
import { LuChevronDown } from "react-icons/lu";

export function Hero() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const sliders = useMemo(
    () => [SliderImg1, SliderImg2, SliderImg3, SliderImg4],
    []
  );
  const listImages = useMemo(
    () => [sliders[sliders.length - 1], ...sliders, sliders[0]],
    [sliders]
  );

  const prevSlide = useCallback(() => {
    if (selectedIndex === 0) {
      setSelectedIndex(listImages.length - 3);
    } else {
      setSelectedIndex((prevIndex) => prevIndex - 1);
    }
  }, [selectedIndex, listImages.length]);

  const nextSlide = useCallback(() => {
    if (listImages.length - 1 === selectedIndex) {
      setSelectedIndex(2);
    } else {
      setSelectedIndex((prevIndex) => prevIndex + 1);
    }
  }, [selectedIndex, listImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [listImages, nextSlide]);

  return (
    <div className="relative w-full overflow-hidden">
      <BsCaretLeftFill
        size={64}
        onClick={prevSlide}
        className="absolute w-8 h-8 md:w-16 md:h-16 top-[50%] transform -translate-y-1/2 left-5 z-10 cursor-pointer text-white"
      />
      <div
        className="flex transition duration-500 ease-in-out"
        style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
      >
        {listImages.map((image, index) => (
          <Image
            style={{ width: "100dvw", height: "auto" }}
            key={index}
            src={image}
            alt={`slider-${index + 1}`}
            className="w-full"
            priority
          />
        ))}
      </div>
      <BsCaretRightFill
        size={64}
        onClick={nextSlide}
        className="absolute w-8 h-8 md:w-16 md:h-16 top-[50%] transform -translate-y-1/2 right-5 cursor-pointer"
        color="#FFFFFF"
      />
      {/* Scroll Indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ">
        <button
          className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer"
          onClick={() =>
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            })
          }
        >
          <span className="text-sm md:text-2xl font-bold">Conoce más</span>
          <LuChevronDown className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
}
