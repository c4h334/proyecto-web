import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// ============================================================
// INTERFACES
// ============================================================
interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  discount?: string;
}

// ============================================================
// DATOS MOCK — Reemplazar con llamadas a la BD cuando esté lista
// ============================================================
const mainProducts: Product[] = [
  { id: 1, name: "Refrigeradora Inverter",     price: 350000, imageUrl: "https://placehold.co/300x300/e2e8f0/475569?text=Refrigeradora" },
  { id: 2, name: "Smart TV 55' 4K",            price: 280000, imageUrl: "https://placehold.co/300x300/e2e8f0/475569?text=Smart+TV" },
  { id: 3, name: "Lavadora Automática",         price: 210000, imageUrl: "https://placehold.co/300x300/e2e8f0/475569?text=Lavadora" },
  { id: 4, name: "Cocina de Gas 6 Quemadores", price: 185000, imageUrl: "https://placehold.co/300x300/e2e8f0/475569?text=Cocina" },
{ id: 11, name: "Cocina de Gas 6 Quemadores", price: 185000, imageUrl: "https://placehold.co/300x300/e2e8f0/475569?text=Cocina" },

];

// TODO: obtener de BD — query: ORDER BY created_at DESC LIMIT 10
const newArrivals: Product[] = [
  { id: 5, name: "Laptop Gaming Serie RTX",      price: 650000, imageUrl: "https://placehold.co/300x300/e2e8f0/475569?text=Laptop" },
  { id: 6, name: "Smartphone Última Generación", price: 420000, imageUrl: "https://placehold.co/300x300/e2e8f0/475569?text=Smartphone" },
  { id: 7, name: "Audífonos Inalámbricos Pro",   price: 85000,  imageUrl: "https://placehold.co/300x300/e2e8f0/475569?text=Audifonos" },
];

// TODO: obtener de BD — query: WHERE discount IS NOT NULL
const saleProducts: Product[] = [
  { id: 8,  name: "Microondas Digital",    price: 45000, imageUrl: "https://placehold.co/300x300/e2e8f0/475569?text=Microondas", discount: "-20%" },
  { id: 9,  name: "Licuadora Profesional", price: 30000, imageUrl: "https://placehold.co/300x300/e2e8f0/475569?text=Licuadora",  discount: "-15%" },
  { id: 10, name: "Ventilador de Torre",   price: 25000, imageUrl: "https://placehold.co/300x300/e2e8f0/475569?text=Ventilador", discount: "-30%" },
];

// ============================================================
// URLs del carrusel hero — reemplazá por las tuyas
// ============================================================
const heroBannerImages = [
  "https://placehold.co/1200x520/1e3a8a/ffffff?text=Banner+1",
  "https://placehold.co/1200x520/1e3a8a/ffffff?text=Banner+2",
  "https://placehold.co/1200x520/1e3a8a/ffffff?text=Banner+3",
];

// ============================================================
// PÁGINA PRINCIPAL
// ============================================================
export default function Home() {
  const loggedInUser = "Cliente";

  return (
    <main className="w-full bg-gray-50 min-h-screen pb-12 overflow-hidden">

      <HeroCarousel loggedInUser={loggedInUser} />

      {/* Info general del proyecto */}
      <section className="bg-white border-b border-gray-100 py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">🏬</span>
            <h3 className="font-bold text-gray-800 text-lg">Amplio Catálogo</h3>
            <p className="text-gray-500 text-sm">Cientos de productos en electrodomésticos, tecnología y más.</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">🚚</span>
            <h3 className="font-bold text-gray-800 text-lg">Envío Rápido</h3>
            <p className="text-gray-500 text-sm">Entregamos a todo el país con seguimiento en tiempo real.</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">🛡️</span>
            <h3 className="font-bold text-gray-800 text-lg">Garantía Oficial</h3>
            <p className="text-gray-500 text-sm">Todos nuestros productos cuentan con garantía de fábrica.</p>
          </div>
        </div>
      </section>

      {/* Carruseles de productos */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 space-y-16">

        {/* TODO: reemplazar mainProducts con fetch a BD */}
        <ProductCarousel title="Nuestros Productos" products={mainProducts} />

        {/* TODO: reemplazar newArrivals con fetch a BD */}
        <ProductCarousel title="Recién Llegados 🔥" products={newArrivals} />

        {/* TODO: reemplazar saleProducts con fetch a BD */}
        <ProductCarousel title="Ofertas Especiales 💸" products={saleProducts} isSale />

      </div>

    </main>
  );
}

// ============================================================
// COMPONENTE — Hero con carrusel automático
// ============================================================
function HeroCarousel({ loggedInUser }: { loggedInUser: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroBannerImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden text-white text-center">

      {heroBannerImages.map((url, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={url} alt={`Banner ${index + 1}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-blue-900/75" />
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 z-10 pointer-events-none">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome back, {loggedInUser}!</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-200 mb-6">
          Bienvenido a tu Tienda de Confianza
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mb-8 leading-relaxed">
          Somos tu mejor opción para encontrar electrodomésticos, tecnología y artículos para el hogar.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pointer-events-auto">
          <Link to="/store" className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Ver Catálogo Completo
          </Link>
          <Link to="/contact" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors">
            Contáctanos
          </Link>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroBannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

    </section>
  );
}

// ============================================================
// COMPONENTE — Carrusel de productos
// ============================================================
function ProductCarousel({ title, products, isSale = false }: {
  title: string;
  products: Product[];
  isSale?: boolean;
}) {
  return (
    <section>
      <h3 className="text-2xl font-bold text-gray-800 mb-6 pl-2 border-l-4 border-blue-600">
        {title}
      </h3>
      <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide">
        {products.map((product) => (
          <article
            key={product.id}
            className="flex-none w-64 md:w-72 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 snap-start overflow-hidden border border-gray-100 relative group"
          >
            {isSale && product.discount && (
              <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                {product.discount}
              </span>
            )}

            <div className="w-full h-48 bg-gray-200 overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <h4 className="text-lg font-semibold text-gray-800 mb-2 truncate">{product.name}</h4>
              <p className="text-xl font-bold text-blue-700 mb-4">₡{product.price.toLocaleString('es-CR')}</p>
              <button className="w-full bg-gray-900 text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Agregar al Carrito
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}