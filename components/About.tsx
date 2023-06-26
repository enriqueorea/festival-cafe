import React from "react";
import { Heading } from "./UI";
import Image from "next/image";

const About = () => {
  return (
    <section className="text-center mt-10 p-2">
      <Heading title="¡Desentierra la magia del café!" />
      <div className="flex flex-col sm:flex-row gap-10 mt-10">
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
          <p className="text-start">
            ¡Sumérgete en el fascinante mundo de aromas intensos y sabores
            audaces en el Festival Café Veracruz! Prepárate para lo inesperado y
            descubre experiencias únicas de café, justo en el corazón de la
            encantadora ciudad de Xalapa. Explora la riqueza del café
            veracruzano, desde las montañas hasta tu taza, y celebra la
            majestuosidad de nuestra cultura cafetera.
          </p>
          <p className="text-start">
            Desde su creación, el festival se ha dedicado a la promoción de la
            excelencia y la diversidad del café veracruzano. Durante tres
            emocionantes días, del 30 de junio al 2 de julio, los amantes del
            café de todo el mundo se congregan para degustar una amplia variedad
            de cafés, aprender más sobre su proceso de cultivo y producción, y
            disfrutar de una serie de eventos artísticos y culturales.
          </p>
          <p className="text-start">
            El festival cuenta con una variedad de sedes en toda la ciudad, cada
            una con su propio sabor y carácter únicos. Desde el vibrante Parque
            Juárez hasta la histórica Galería de Arte Contemporáneo, los
            visitantes pueden esperar una mezcla de actividades que incluyen
            degustaciones de café, presentaciones musicales, paneles de
            discusión, talleres y más. Además, el festival también acoge una
            expoventa de artesanías y productos derivados del café,
            proporcionando una plataforma para que los artesanos y productores
            locales muestren su talento y pasión.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
