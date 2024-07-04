import { Actividad } from "@/models/sedes";
import React, { FC } from "react";

interface IProps {
  program: Actividad[];
  showBanner: boolean;
  showActivity: boolean;
}

export const Program: FC<IProps> = ({ program, showBanner, showActivity }) => {
  const programByDate: { [key: string]: { [key: string]: Actividad[] } } = {};

  program.forEach((actividad) => {
    const fecha = actividad.fecha;
    const lugar = actividad.lugar || "Sin lugar";

    if (!programByDate[fecha]) programByDate[fecha] = {};
    if (!programByDate[fecha][lugar]) programByDate[fecha][lugar] = [];

    programByDate[fecha][lugar].push(actividad);
  });

  if (!program.length) return null;

  return (
    <div className="mt-5">
      {Object.keys(programByDate).map((fecha, i) => (
        <div key={fecha}>
          <h3
            className={`text-center mb-2 text-yellow font-semibold ${
              i != 0 ? "mt-5" : ""
            }`}
          >
            {fecha}
          </h3>
          {Object.keys(programByDate[fecha]).map((lugar, j) => (
            <div key={lugar} className={`mt-4`}>
              {lugar !== "Sin lugar" && (
                <h4 className="text-center text-2xl py-2 font-light text-light-brown">
                  {`${programByDate[fecha][lugar][0].tipo} - ${lugar}`}
                </h4>
              )}
              <div className="flex items-center justify-center">
                <table className="w-full text-center text-white border-collapse border border-dark-orange/50">
                  <thead>
                    <tr>
                      {programByDate[fecha][lugar].some((a) => a.hora) && (
                        <th className="text-xl p-2 border border-dark-orange/50 font-semibold">
                          Hora
                        </th>
                      )}
                      <th className="text-xl p-2 border border-dark-orange/50 font-semibold">
                        Actividad
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {programByDate[fecha][lugar].map((actividad, k) => (
                      <tr key={k}>
                        {actividad.hora && (
                          <td className="p-2 text-lg border border-dark-orange/50 font-medium">
                            {actividad.hora}
                          </td>
                        )}
                        <td className="p-2 text-lg border border-dark-orange/50 font-medium">
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
      ))}
      {showBanner && (
        <div>
          <h4 className="text-center text-4xl py-4 font-light text-light-brown">
            Degustación de café
          </h4>
          <div className="mt-4">
            <h3 className="text-center mb-2 text-yellow font-semibold">
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
                      <td className="p-2 text-lg border border-dark-orange/50 font-medium">
                        Degustación de café
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 text-lg border border-dark-orange/50 font-medium">
                        16:00-18:00 hrs
                      </td>
                      <td className="p-2 text-lg border border-dark-orange/50 font-medium">
                        Degustación de café
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
      {showActivity && (
        <div>
          <h4 className="text-center text-4xl py-4 font-light text-light-brown">
            Recorrido en fincas
          </h4>
          <div className="mt-4">
            <h3 className="text-center mb-2 text-yellow font-semibold">
              Domingo 7 de julio
            </h3>
            <div className="mt-4">
              <h4 className="text-center text-2xl py-2 font-light text-light-brown">
                Región Coatepec.
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
                        11:00 hrs
                      </td>
                      <td className="p-2 text-lg border border-dark-orange/50 font-medium">
                        Rutas turísticas a fincas (Informes en el módulo de
                        atención ubicado en parque Juárez).
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
