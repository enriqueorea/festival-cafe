import { Program } from "@/components";
import { Heading } from "@/components/UI";
import { sedes } from "@/constants";
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
    <section className="mt-20 p-5">
      <div className="flex flex-col gap-5">
        <div className="relative w-full h-[500px]">
          <Image
            src={sede.image}
            alt={sede.name}
            fill
            className="w-full h-full object-cover brightness-90"
          />
        </div>
        <div className="flex md:flex-col gap-6">
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
          <Program program={sede.program} />
        </div>
      </div>
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
