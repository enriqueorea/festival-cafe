import Image from "next/image";
import React from "react";
import { Button } from "./UI";

const Hero = () => {
  return (
    <section id="hero" className="relative flex items-center justify-center">
      <div className="min-h-[100dvh] pt-12 sm:pt-16">
        <div className="w-[325px] md:w-[750px]">
          <h1 className="text-3xl mb-5 sm:mb-0 sm:text-[48px] text-light-brown font-extralight text-center">
            DEL 05 DE JULIO
            <br />
            AL 07 DE JULIO
          </h1>
          <div className="flex flex-col">
            <Image
              alt="Festival logo"
              width={750}
              height={300}
              className="object-contain w-full h-auto relative"
              src="/logo2.png"
            />
            <div className="py-4 flex items-center">
              <div className="flex-1 border-b-2 border-white mx-3"></div>
              <span className="text-light-brown font-light text-base md:text-4xl">
                Xalapa, Ver. 2024
              </span>
              <div className="flex-1 border-b-2 border-white mx-3"></div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <div>
              <p className="text-base sm:text-2xl text-black-pink">
                Actividades artísticas - culturales
              </p>
            </div>
            <div className="flex gap-2">
              <p className="text-base sm:text-2xl text-dark-orange">
                Exposición
              </p>
              <span className="text-base sm:text-2xl text-white font-bold">
                |
              </span>
              <p className="text-base sm:text-2xl text-light-green">
                Venta de café
              </p>
            </div>
            <div className="flex gap-2">
              <p className="text-base sm:text-2xl text-yellow">Conferencias</p>
              <span className="text-base sm:text-2xl text-white font-bold">
                |
              </span>
              <p className="text-base sm:text-2xl text-dark-green">
                Talleres <span className=" text-light-brown">y más</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-20">
            <a href="#sedes">
              <Button title="Sedes" />
            </a>
            <a href={"#programa"}>
              <Button title="Cartelera" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
