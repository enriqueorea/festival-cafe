import Image from "next/image";
import React from "react";
import { Button } from "./UI";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./UI/dropdown-menu";
import Link from "next/link";

export const Hero = () => {
  return (
    <section id="hero" className="relative flex items-center justify-center">
      <div className="min-h-[100dvh] pt-12 sm:pt-24">
        <div className="w-[325px] md:w-[750px]">
          <h1 className="text-3xl mb-5 sm:mb-0 sm:text-[48px] text-light-brown font-extralight text-center">
            DEL 5 AL 7 DE JULIO
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
            <DropdownMenu>
              <DropdownMenuTrigger className="border border-light-brown text-white px-10 py-3 text-3xl font-semibold min-w-[325px] hover:bg-light-brown hover:text-dark-purple transition duration-300 ease-in-out">
                Cartelera
              </DropdownMenuTrigger>
              <DropdownMenuContent className="font-bold w-[325px] border-light-brown">
                <DropdownMenuItem>
                  <Link className="w-full" href={"/sedes/parque_juarez"}>
                    Grupos artísticos
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className="w-full"
                    href={"/sedes/biblioteca_carlos_fuentes"}
                  >
                    Cursos y Talleres
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="w-full" href={"/sedes/palacio_gobierno"}>
                    Stands
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </section>
  );
};
