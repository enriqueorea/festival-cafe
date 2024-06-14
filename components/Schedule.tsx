import { sedes } from "@/constants";
import React from "react";
import { Program } from "./Program";

export const Schedule = () => {
  return (
    <section className="p-2" id="programa">
      {sedes.map(({ id, name, program }) => (
        <div key={id}>
          <div className="flex items-center gap-3 mt-10">
            <div className="h-4 w-4 rounded-full bg-dark-orange" />
            <h2 className="text-center text-3xl text-light-green font-semibold">
              {name}
            </h2>
          </div>
          <Program program={program} />
        </div>
      ))}
    </section>
  );
};
