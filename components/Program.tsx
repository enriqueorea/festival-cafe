import { Actividad } from "@/models/sedes";
import React, { FC } from "react";

interface IProps {
  program: Actividad[];
}

const Program: FC<IProps> = ({ program }) => {
  const programByType: { [key: string]: { [key: string]: Actividad[] } } = {};

  program.forEach((actividad) => {
    const tipo = actividad.tipo || "General";
    if (!programByType[tipo]) programByType[tipo] = {};
    if (!programByType[tipo][actividad.fecha])
      programByType[tipo][actividad.fecha] = [];
    programByType[tipo][actividad.fecha].push(actividad);
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
                      {programByType[tipo][fecha].some((a) => a.lugar) && (
                        <th className="text-xl p-2 border border-dark-orange/50 font-semibold">
                          Lugar
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {programByType[tipo][fecha].map((actividad, k) => (
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
