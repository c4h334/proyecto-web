import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../models/responses/Product';
import { getProducts } from '../services/ProductService';
import { useCart } from '../components/cart/CartContext';

const heroBannerImages = [
  "/public/background.jpg",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=1200&auto=format&fit=crop",
];

export default function Home() {
  const loggedInUser = "Cliente";
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar productos en el Home:", err);
        setLoading(false);
      });
  }, []);

  const mainProducts = products.slice(0, 8);
  const newArrivals = [...products].reverse().slice(0, 6); // Ampliado a 6 para notar más el carrusel
  const saleProducts = products.filter(product => product.discount > 0);

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

      {/* Carruseles */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 space-y-16">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg animate-pulse">Cargando la tienda...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No hay productos disponibles.</p>
          </div>
        ) : (
          <>
            {/* 2. Recién Llegados  */}
            {newArrivals.length > 0 && (
              <ProductCarousel title="Recién Llegados 🔥" products={newArrivals} autoScroll />
            )}

            {/* 3. Ofertas Especiales*/}
            {saleProducts.length > 0 && (
              <ProductCarousel title="Ofertas Especiales 💸" products={saleProducts} isSale autoScroll />
            )}
          </>
        )}
      </div>
    </main>
  );
}

// ============================================================
// Carrusel
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
// Carrusel productos
// ============================================================
function ProductCarousel({ title, products, isSale = false, autoScroll = false }: {
  title: string;
  products: Product[];
  isSale?: boolean;
  autoScroll?: boolean; 
}) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const { addToCart } = useCart();

  useEffect(() => {
    if (!autoScroll || isHovered || products.length <= 2) return;

    const timer = setInterval(() => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        const cardWidth = 312; 
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft >= maxScroll - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 2500); // Velocidad

    return () => clearInterval(timer);
  }, [autoScroll, isHovered, products]);

  return (
    <section 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-6 pl-2 border-l-4 border-blue-600">
        {title}
      </h3>
      
      <div 
        ref={carouselRef}
        className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide scroll-smooth"
      >
        {products.map((product) => (
          <article
            key={product.productResourceId}
            className="flex-none w-64 md:w-72 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 snap-start overflow-hidden border border-gray-100 relative group"
          >
            {isSale && product.discount > 0 && (
              <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                -{product.discount}%
              </span>
            )}

            <div className="w-full h-48 bg-gray-200 overflow-hidden">
              <img
                src={product.image || 'https://via.placeholder.com/300x200?text=Sin+Imagen'}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="p-5 flex flex-col justify-between h-44">
              <div>
                <span className="text-xs text-gray-400 font-mono block mb-1">
                  Cód: {product.code}
                </span>
                <h4 className="text-base font-semibold text-gray-800 mb-2 truncate">
                  {product.name}
                </h4>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xl font-bold text-blue-700">
                    ₡{product.price.toLocaleString('es-CR')}
                  </p>
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                    product.quantity > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {product.quantity > 0 ? `Stock: ${product.quantity}` : 'Agotado'}
                  </span>
                </div>

                <button 
                  disabled={product.quantity <= 0}
                  onClick={() => addToCart(product)}
                  
                  className={`w-full py-2 px-4 rounded font-medium text-xs transform transition-all duration-150 ${
                    product.quantity > 0 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer active:scale-95' 
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed scale'
                    }`}
                >
                  {product.quantity > 0 ? 'Agregar al Carrito 🛒' : 'Agotado'}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}