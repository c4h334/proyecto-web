import { useEffect, useState } from "react";
import type { Product } from "../models/responses/Product";
import { getProducts } from "../services/ProductService";
import { useCart } from "./cart/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth(); 
  const navigate = useNavigate(); 

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error cargando productos:", error);
    }
  }

  // Extrae las categorías únicas mapeando la propiedad 'material'
  const categories = Array.from(
    new Set(products.map((product) => product.material || "Otros"))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="border-b border-gray-200 pb-5 mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Tienda de Productos
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Explora los artículos disponibles organizados por categoría.
        </p>
      </div>

      {products.length === 0 ? (
        <p className="text-center text-gray-500 text-lg py-12">
          No se encontraron registros de productos en la base de datos.
        </p>
      ) : (
        categories.map((category) => {
          // Filtro de productos por categoría
          const categoryProducts = products.filter(
            (product) => (product.material || "Otros") === category
          );

          return (
            <div key={category} className="mb-12">
              <div className="flex items-center mb-6 border-b border-gray-100 pb-2">
                <h2 className="text-2xl font-bold text-gray-800 capitalize">
                  {category}
                </h2>
                <span className="ml-3 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  {categoryProducts.length} {categoryProducts.length === 1 ? 'artículo' : 'artículos'}
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categoryProducts.map((product) => (
                  <div 
                    key={product.productResourceId} 
                    className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
                  >
                    {/* Contenedor de la Imagen */}
                    <Link to={`/product/${product.productResourceId}`} className="h-48 bg-gray-50 overflow-hidden relative flex items-center justify-center border-b border-gray-100 group">
                      <img 
                        src={product.image || 'https://via.placeholder.com/300x200?text=Sin+Imagen'} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.discount > 0 && (
                        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                          -{product.discount}%
                        </span>
                      )}
                    </Link>
                    
                    {/* Detalles del Producto */}
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div className="mb-4">
                        <span className="text-xs text-gray-400 font-mono block mb-1">
                          Cód: {product.code}
                        </span>

                        <Link to={`/product/${product.productResourceId}`} className="hover:text-blue-600 transition-colors">
                          <h3 className="text-base font-semibold text-gray-900 mb-1 line-clamp-1">
                            {product.name}
                          </h3>
                        </Link>
                        
                        <p className="text-xs text-gray-500 line-clamp-2">
                          {product.description || 'Sin descripción disponible.'}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-baseline justify-between mb-3">
                          <span className="text-lg font-bold text-gray-900">
                            ₡{product.price.toLocaleString("es-CR")}
                          </span>
                          <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
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
                          {product.quantity > 0 ? 'Agregar al Carrito 🛒' : 'No Disponible'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}