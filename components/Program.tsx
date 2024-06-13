import { Actividad } from "@/models/sedes";
import React, { FC } from "react";

interface IProps {
  program: Actividad[];
}

const Program: FC<IProps> = ({ program }) => {
  const programByDay: { [key: string]: { [key: string]: Actividad[] } } = {};

  program.forEach((actividad) => {
    if (!programByDay[actividad.fecha]) programByDay[actividad.fecha] = {};
    const tipo = actividad.tipo || "General";
    if (!programByDay[actividad.fecha][tipo])
      programByDay[actividad.fecha][tipo] = [];
    programByDay[actividad.fecha][tipo].push(actividad);
  });

  if (!program.length) return null;

  return (
    <div className="mt-5">
      {Object.keys(programByDay).map((fecha, i) => (
        <div key={fecha}>
          <h3
            className={`text-center mb-2 text-yellow font-semibold ${
              i != 0 ? "mt-5" : ""
            }`}
          >
            {fecha}
          </h3>
          {Object.keys(programByDay[fecha]).map((tipo, j) => (
            <div key={tipo} className="mt-4">
              {tipo !== "General" && (
                <h4 className="text-center text-4xl py-4 font-light text-light-brown">
                  {tipo}
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
                      {programByDay[fecha][tipo].some((a) => a.lugar) && (
                        <th className="text-xl p-2 border border-dark-orange/50 font-semibold">
                          Lugar
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {programByDay[fecha][tipo].map((actividad, k) => (
                      <tr key={k}>
                        <td className="p-2 text-lg border border-dark-orange/50 font-medium">
                          {actividad.hora}
                        </td>
                        <td className="p-2 text-lg border border-dark-orange/50  font-medium">
                          {actividad.descripcion}
                        </td>
                        {actividad.lugar && (
                          <td className="p-2 text-lg border border-dark-orange/50 font-medium">
                            {actividad.lugar}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Program;
