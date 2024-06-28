import React from 'react';
import { Heading } from './UI';
import Image from 'next/image';

export const About = () => {
  return (
    <section id='about' className='text-center mt-10 p-2'>
      <Heading title='¡Desentierra la magia del café!' />
      <div className='mt-10'>
        <div
          className='relative h-0 overflow-hidden my-8'
          style={{ paddingTop: '56.25%' }}
        >
          <iframe
            className='absolute top-0 left-0 w-full h-full'
            src='https://www.youtube.com/embed/PZwfkR7yHKY?autoplay=1'
            title='Festival del Café 2024'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>

        <div className='flex-1'>
          <p>
            ¡Sumérgete en el fascinante mundo de aromas intensos y sabores
            audaces en el Festival Café Veracruz! Prepárate para lo inesperado y
            descubre experiencias únicas de café, justo en el corazón de la
            encantadora ciudad de Xalapa. Explora la riqueza del café
            veracruzano, desde las montañas hasta tu taza, y celebra la
            majestuosidad de nuestra cultura cafetera.
          </p>
          <p>
            Desde su creación, el festival se ha dedicado a la promoción de la
            excelencia y la diversidad del café veracruzano. Durante tres
            emocionantes días, del 05 de julio al 07 de julio, los amantes del
            café de todo el mundo se congregan para degustar una amplia variedad
            de cafés, aprender más sobre su proceso de cultivo y producción, y
            disfrutar de una serie de eventos artísticos y culturales.
          </p>
          <p>
            El festival cuenta con una variedad de sedes en toda la ciudad, cada
            una con su propio sabor y carácter únicos. Desde el vibrante Parque
            Juárez hasta la histórica Biblioteca Carlos Fuentes, los visitantes
            pueden esperar una mezcla de actividades que incluyen degustaciones
            de café, presentaciones musicales, paneles de discusión, talleres y
            más. Además, el festival también acoge una expoventa de artesanías y
            productos derivados del café, proporcionando una plataforma para que
            los artesanos y productores locales muestren su talento y pasión.
          </p>
        </div>
      </div>
    </section>
  );
};
