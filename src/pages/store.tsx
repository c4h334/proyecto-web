import React from 'react';
import { ProductList } from '../components/ProductList';

const Store: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fbf9f4] flex flex-col">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full box-border">
        
        {/* Sección del Catálogo con enlace al PDF */}
        <section className="bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl p-6 sm:p-10 text-center mb-10 md:mb-14 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 border-b-2 border-blue-200 pb-3 mb-5 inline-block capitalize">
            Nuestro Catálogo Actualizado
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto">
            Descarga nuestro catálogo completo en formato PDF para visualizar
            offline todos nuestros productos.
          </p>

          <a
            href="https://www.maxionline.ec/wp-content/uploads/2024/06/PDF-Catalogo-Primavera-Hombres-2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-900 text-white px-6 py-3 sm:px-8 sm:py-3.5 rounded-full font-bold text-sm sm:text-base hover:bg-blue-800 transition-colors shadow-md active:scale-95 transform duration-150"
          >
            Ver Catálogo en PDF
          </a>
        </section>

        {/* Sección de productos */}
        <section className="mb-10">
          <ProductList />
        </section>

      </main>
    </div>
  );
};

export default Store;