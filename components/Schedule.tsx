import { sedes } from "@/constants";
import React from "react";
import Program from "./Program";

const Schedule = () => {
  return (
    <section className="p-2" id="programa">
      {sedes.map(({ id, name, program }) => (
        <div key={id}>
          <div className="flex items-center gap-3 mt-10">
            <div className="h-4 w-4 rounded-full bg-dark-orange" />
            <h2 className="text-center text-light-green font-semibold">
              {name}
            </h2>
          </div>
          <Program program={program} />
        </div>
      ))}
      <div className="my-6 text-center">
        <h2 className="text-semibold">Tour senderos del café espresso </h2>
        <p className="text-dark-green font-semibold">
          Hora de salida: <span className="text-white">9:00 am</span>
        </p>
        <p className="text-yellow font-semibold">
          Duración: <span className="text-white">03:30 horas</span>
        </p>
        <p className="text-dark-orange font-semibold">
          Costo por persona: <span className="text-white">$ 550.00</span>
        </p>
        <p className="text-yellow font-semibold">
          Mayor información y reservaciones al:{" "}
          <a
            className="text-light-green"
            target="__blank"
            href="tel:+2281380691"
          >
            2281380691
          </a>
        </p>
      </div>
    </section>
  );
};

export default Schedule;
