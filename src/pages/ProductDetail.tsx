import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import type { Product } from "../models/responses/Product";
import { getProductById } from "../services/ProductService";
import { useCart } from "../components/cart/CartContext";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    getProductById(id)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar el detalle:", err);
        setError("El producto no existe o hubo un error de conexión.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-md mx-auto text-center py-16 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">¡Ups! Algo salió mal</h2>
        <p className="text-gray-600 mb-6">{error || "Producto no encontrado"}</p>
        <Link to="/store" className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium shadow hover:bg-blue-700 transition-colors">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  // Cálculo de precio con descuento si aplica
  const finalPrice = product.price;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Botón de navegación hacia atrás */}
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 mb-8 transition-colors"
      >
        ← Volver atrás
      </button>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
        
        {/* Columna Izquierda: Imagen */}
        <div className="w-full h-72 sm:h-96 md:h-[450px] bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center relative border border-gray-100">
          <img 
            src={product.image || 'https://via.placeholder.com/500x400?text=Sin+Imagen'} 
            alt={product.name} 
            className="w-full h-full object-contain p-4"
          />
          {product.discount > 0 && (
            <span className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-md shadow">
              -{product.discount}% OFF
            </span>
          )}
        </div>

        {/* Columna Derecha: Información y Compra */}
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <span className="text-xs font-mono text-gray-400 block mb-1">
              Código del artículo: {product.code}
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
              {product.name}
            </h1>
            
            {/* Tag de Categoría/Material */}
            {product.material && (
              <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                Material: {product.material}
              </span>
            )}

            <hr className="border-gray-100 my-4" />

            {/* Bloque de Precios */}
            <div className="space-y-1">
              <div className="flex items-baseline space-x-3">
                <span className="text-3xl font-black text-gray-900">
                  ₡{finalPrice.toLocaleString("es-CR")}
                </span>
              </div>
              <p className="text-xs text-gray-400">Precios incluyen impuestos de venta locales.</p>
            </div>

            <hr className="border-gray-100 my-4" />

            {/* Descripción */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide">Descripción del producto</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {product.description || "Este artículo no cuenta con una descripción detallada en este momento."}
              </p>
            </div>
          </div>

          {/* Estado de Stock y Acciones */}
          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-700">Disponibilidad:</span>
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                product.quantity > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {product.quantity > 0 ? `En Stock (${product.quantity} unidades)` : 'Agotado'}
              </span>
            </div>

            <button
              disabled={product.quantity <= 0}
              onClick={() => addToCart(product)}
              className={`w-full py-3 px-6 rounded-xl font-bold text-sm shadow-sm transition-all transform duration-150 ${
                product.quantity > 0 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.98] cursor-pointer' 
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              {product.quantity > 0 ? 'Añadir al Carrito de Compras 🛒' : 'Producto No Disponible'}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}