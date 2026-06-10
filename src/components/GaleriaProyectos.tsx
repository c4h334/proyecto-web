import { useEffect, useState } from "react";
import { client } from "../services/contenful";

// Se define la estructura de lo que se espera recibir
interface ImagenProyecto {
  sys: { id: string };
  fields: {
    titulo: string;
    imagen: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    order: number;
    activo: boolean;
  };
}

export const GaleriaProyectos = () => {
  const [imagenes, setImagenes] = useState<ImagenProyecto[]>([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "imagenesProyectoSoftIv" })
      .then((response: any) => {
        const data = response.items as ImagenProyecto[];

        // 3. Aprovechamos tus campos 'Activo' y 'Order'
        // Filtramos solo las que están activas y las ordenamos de menor a mayor
        const imagenesVisibles = data
          .filter((item) => item.fields.activo === true)
          .sort((a, b) => a.fields.order - b.fields.order);

        setImagenes(imagenesVisibles);
      })
      .catch(console.error);
  }, []);

  return (
    <section className="grid gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
      {imagenes.map((item) => (
        <article
          key={item.sys.id}
          data-cy="imagen-proyecto"
          className="overflow-hidden transition-all border rounded-xl bg-white border-slate-200 hover:shadow-xl hover:-translate-y-1"
        >
          {/* Se renderiza la imagen usando la ruta anidada de Contentful */}
          <div className="h-56 overflow-hidden bg-slate-100">
            {item.fields.imagen?.fields?.file?.url && (
              <img
                src={`https:${item.fields.imagen.fields.file.url}`}
                alt={item.fields.titulo}
                className="object-cover w-full h-full"
              />
            )}
          </div>

          <div className="p-5">
            <h2 className="text-xl font-bold text-slate-800">
              {item.fields.titulo}
            </h2>
            {/* Muestra el orden solo para depuración */}
            <p className="mt-2 text-xs text-slate-400">
              Orden de visualización: {item.fields.order}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
};
