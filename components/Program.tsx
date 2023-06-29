import { Actividad } from "@/models/sedes";
import React, { FC } from "react";

interface IProps {
  program: Actividad[];
}

const Program: FC<IProps> = ({ program }) => {
  const programByDay: { [key: string]: Actividad[] } = {};

  program.forEach((actividad) => {
    if (!programByDay[actividad.fecha]) programByDay[actividad.fecha] = [];
    programByDay[actividad.fecha].push(actividad);
  });

  return (
    <div className="mt-5">
      {Object.keys(programByDay).map((fecha, i) => (
        <div key={fecha}>
          <h3
            className={`text-center  mb-2 text-yellow font-semibold ${
              i != 0 ? "mt-5" : ""
            }`}
          >
            {fecha}
          </h3>
          <div className="flex items-center justify-center">
            <table className="w-full text-center text-white border-collapse border border-dark-green">
              <thead>
                <tr>
                  <th className="text-xl p-2 border border-dark-green font-semibold">
                    Hora
                  </th>
                  <th className="text-xl p-2 border border-dark-green font-semibold">
                    Actividad
                  </th>
                </tr>
              </thead>
              <tbody>
                {programByDay[fecha].map((actividad, i) => (
                  <tr key={i}>
                    <td className="p-2 text-lg border border-dark-green font-medium">
                      {actividad.hora}
                    </td>
                    <td className="p-2 text-lg border border-dark-green font-medium">
                      {actividad.descripcion}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Program;
