import { Program } from "@/components/Program";
import { Carousel } from "@/components/Carousel";
import { Heading } from "@/components/UI";
import { VideoCarousel } from "@/components/VideoCarousel";
import { sedes, srcImagesBiblioteca, srcImagesJuarez } from "@/constants";
import Image from "next/image";

interface IProps {
  params: {
    place: string;
  };
}

const PlacePage = async ({ params }: IProps) => {
  const sede = sedes.find((sede) => sede.id === params.place);

  if (!sede) return;

  return (
    <section className="mt-14 p-2">
      <div className="flex flex-col gap-5">
        <div className="relative w-full h-[550px]">
          <Image
            src={sede.image}
            alt={sede.name}
            fill
            className="w-full aspect-video object-contain brightness-90"
          />
        </div>
        <div className="flex flex-col md:flex-col gap-6">
          <h1 className="font-bold text-5xl">{sede.name}</h1>
          {sede.description.map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="my-12">
        <Heading title="Programa" />
        <div>
          <Program
            showBanner={sede.id === "biblioteca_carlos_fuentes"}
            program={sede.program}
          />
        </div>
      </div>
      {sede.id === "parque_juarez" ? (
        <>
          <Carousel srcImage={srcImagesJuarez} />
          <VideoCarousel />
        </>
      ) : null}
      {sede.id === "palacio_gobierno" ? (
        <Carousel srcImage={srcImagesBiblioteca} />
      ) : null}
      <div>
        <Heading title="Cómo llegar?" />
        <iframe
          className="w-full h-[450px] mt-10"
          src={sede.map}
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default PlacePage;
