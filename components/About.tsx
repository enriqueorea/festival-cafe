import React from "react";
import { Heading } from "./UI";
import Image from "next/image";

const About = () => {
  return (
    <section className="text-center mt-20 p-2">
      <Heading title="¡Desentierra la magia del café!" />
      <div className="flex flex-col sm:flex-row gap-10 mt-20">
        <div className="flex-1 h-[550px] drop-shadow-xl">
          <Image
            alt="about image"
            className="object-cover w-full h-full"
            width={1920}
            height={1080}
            src={"/about.png"}
          />
        </div>
        <div className="flex-1">
          <p className="text-white font-medium text-base md:text-lg text-start">
            ¡Sumérgete en el fascinante mundo de aromas intensos y sabores
            audaces en el Festival Café Veracruz! Prepárate para lo inesperado y
            descubre experiencias únicas de café, justo en el corazón de la
            encantadora ciudad de Xalapa. Explora la riqueza del café
            veracruzano, desde las montañas hasta tu taza, y celebra la
            majestuosidad de nuestra cultura cafetera. ¡Desentierra la magia del
            café en el Festival Café Veracruz!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
