import Image from "next/image";
import React from "react";
import { Button } from "./UI";

const Hero = () => {
  return (
    <section id="hero" className="relative flex items-center justify-center">
      <div className="min-h-[100dvh] pt-16 sm:pt-20">
        <div className="w-[325px] md:w-[750px]">
          <h1 className="text-3xl mb-5 sm:mb-0 sm:text-[48px] text-light-brown font-extralight text-center">
            DEL 30 DE JUNIO
            <br />
            AL 2 DE JULIO
          </h1>
          <Image
            alt="Festival logo"
            width={750}
            height={300}
            className="object-contain w-full h-auto relative"
            src="/logo.png"
          />
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-20">
            <a href="#sedes">
              <Button title="Sedes" />
            </a>
            <a href={"#programa"}>
              <Button title="Actividades" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
