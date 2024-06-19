import { Actividad } from "@/models/sedes";
import React, { FC } from "react";

interface IProps {
  program: Actividad[];
}

export const Program: FC<IProps> = ({ program }) => {
  const programByType: {
    [key: string]: { [key: string]: { [key: string]: Actividad[] } };
  } = {};

  program.forEach((actividad) => {
    const tipo = actividad.tipo || "General";
    const fecha = actividad.fecha;
    const lugar = actividad.lugar || "Sin lugar";

    if (!programByType[tipo]) programByType[tipo] = {};
    if (!programByType[tipo][fecha]) programByType[tipo][fecha] = {};
    if (!programByType[tipo][fecha][lugar])
      programByType[tipo][fecha][lugar] = [];

    programByType[tipo][fecha][lugar].push(actividad);
  });

  if (!program.length) return null;

  return (
    <div className="mt-5">
      {Object.keys(programByType).map((tipo, i) => (
        <div key={tipo}>
          {tipo !== "General" && (
            <h4 className="text-center text-4xl py-4 font-light text-light-brown">
              {tipo}
            </h4>
          )}
          {Object.keys(programByType[tipo]).map((fecha, j) => (
            <div key={fecha} className={`mt-4`}>
              <h3
                className={`text-center mb-2 text-yellow font-semibold ${
                  j != 0 ? "mt-5" : ""
                }`}
              >
                {fecha}
              </h3>
              {Object.keys(programByType[tipo][fecha]).map((lugar, k) => (
                <div key={lugar} className={`mt-4`}>
                  {lugar !== "Sin lugar" && (
                    <h4 className="text-center text-2xl py-2 font-light text-light-brown">
                      {lugar}
                    </h4>
                  )}
                  <div className="flex items-center justify-center">
                    <table className="w-full text-center text-white border-collapse border border-dark-orange/50">
                      <thead>
                        <tr>
                          <th className="text-xl p-2 border border-dark-orange/50 font-semibold">
                            Hora
                          </th>
                          <th className="text-xl p-2 border border-dark-orange/50 font-semibold">
                            Actividad
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {programByType[tipo][fecha][lugar].map(
                          (actividad, l) => (
                            <tr key={l}>
                              <td className="p-2 text-lg border border-dark-orange/50 font-medium">
                                {actividad.hora}
                              </td>
                              <td className="p-2 text-lg border border-dark-orange/50  font-medium">
                                {actividad.descripcion}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
      <div>
        <h4 className="text-center text-4xl py-4 font-light text-light-brown">
          Degustación de café
        </h4>
        <div className="mt-4">
          <h3 className="text-center mb-2 text-yellow font-semibold ">
            Sábado 6 de julio
          </h3>
          <div className="mt-4">
            <h4 className="text-center text-2xl py-2 font-light text-light-brown">
              Vestíbulo de la Biblioteca Carlos Fuentes
            </h4>
            <div className="flex items-center justify-center">
              <table className="w-full text-center text-white border-collapse border border-dark-orange/50">
                <thead>
                  <tr>
                    <th className="text-xl p-2 border border-dark-orange/50 font-semibold">
                      Hora
                    </th>
                    <th className="text-xl p-2 border border-dark-orange/50 font-semibold">
                      Actividad
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 text-lg border border-dark-orange/50 font-medium">
                      10:00-14:00 hrs
                    </td>
                    <td className="p-2 text-lg border border-dark-orange/50  font-medium">
                      Degustación de café
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 text-lg border border-dark-orange/50 font-medium">
                      16:00-18:00 hrs
                    </td>
                    <td className="p-2 text-lg border border-dark-orange/50  font-medium">
                      Degustación de café
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
