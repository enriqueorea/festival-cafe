// sedes.ts
export interface Actividad {
  fecha: string;
  hora: string;
  descripcion: string;
}

export interface Sede {
  id: string;
  name: string;
  image: string;
  map?: string;
  description: string[];
  program: Actividad[];
}
