import Image from "next/image";
import { Heading } from "./UI";
import { sedes } from "@/constants";
import Link from "next/link";

export const Places = () => {
  return (
    <section id="sedes" className="p-2 mt-10">
      <Heading title="Ven y Vive la Experiencia en Nuestras Sedes" />

      <div
        className="mt-5"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1rem",
        }}
      >
        {sedes.map(({ id, name, thumbnail }) => (
          <Link href={`/sedes/${id}`} key={id}>
            <div className="relative w-full h-[270px] group">
              <Image
                src={thumbnail}
                alt={name}
                fill
                className="w-full object-cover brightness-50 group-hover:brightness-95 transition-all duration-500 ease-in-out"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h4 className="text-white font-bold text-xl">{name}</h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
