import Image from "next/image";
import React from "react";
import { Button } from "./UI";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex items-center justify-center"
    >
      <div className="min-h-[100vh] pt-20 sm:pt-36">
        <div className="w-[325px] md:w-[750px] h-[300px]">
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
            <Button title="Sedes" />
            <Button title="Actividades" />
          </div>
        </div>
      </div>
      <div className="hidden lg:block bg-fixed fixed w-[210px] h-[850px] left-0 bottom-0 scale-125">
        <Image
          alt="Festival background"
          className="object-contain w-full h-full aspect-video"
          fill
          src="/Asset 1.png"
        />
      </div>
      <div className="hidden lg:block bg-fixed fixed w-[210px] h-[950px] right-0 bottom-0">
        <Image
          alt="Festival background"
          className="object-contain w-full h-full aspect-video scale-125"
          fill
          src="/Asset 2.png"
        />
      </div>
    </section>
  );
};

export default Hero;
