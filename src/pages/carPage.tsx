import { Link } from 'react-router-dom';
import { useCart } from '../components/cart/CartContext';

export default function CarPage() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[70vh]">
      <div className="border-b border-gray-200 pb-5 mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Tu Carrito de Compras 🛒
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Revisa y gestiona los artículos seleccionados antes de proceder al pago.
        </p>
      </div>

      {/* CRITERIO: Debe actualizar la información visual correctamente (Manejado por estado vacío) */}
      {cartItems.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-100 shadow-sm">
          <span className="text-5xl block mb-4">🤷‍♂️</span>
          <p className="text-xl text-gray-500 font-medium mb-6">Tu carrito está completamente vacío.</p>
          <Link 
            to="/store" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Ir a la tienda a buscar productos
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* CRITERIO: Debe mostrar los productos seleccionados */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <article 
                key={item.productResourceId}
                className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between shadow-sm"
              >
                <div className="flex items-center gap-4 flex-1 min-w-0 w-full">
                  {/* Imagen del producto */}
                  <div className="w-20 h-20 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0 border">
                    <img 
                      src={item.image || 'https://via.placeholder.com/150'} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Detalles de texto */}
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-mono text-gray-400 block">Cód: {item.code}</span>
                    <h3 className="font-semibold text-gray-900 text-base truncate">{item.name}</h3>
                    <p className="text-sm font-bold text-blue-600 mt-1">
                      ₡{item.price.toLocaleString("es-CR")} c/u
                    </p>
                  </div>
                </div>

                {/* CRITERIO: Debe mostrar cantidad y controles */}
                <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-4 border-t border-gray-100 sm:border-t-0 pt-3 sm:pt-0">
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-gray-50">
                    <button 
                      onClick={() => updateQuantity(item.productResourceId, 'decrease')}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-200 font-bold transition-colors"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 font-semibold text-sm text-gray-800 bg-white min-w-[2.5rem] text-center">
                      {item.cartQuantity}
                    </span>
                    <button 
                      onClick={() => updateQuantity(item.productResourceId, 'increase')}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-200 font-bold transition-colors"
                    >
                      +
                    </button>
                  </div>

                  {/* CRITERIO: Debe permitir eliminar productos del carrito */}
                  <button
                    onClick={() => removeFromCart(item.productResourceId)}
                    className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-1"
                    title="Eliminar producto"
                  >
                    🗑️ <span className="text-xs font-medium">Quitar</span>
                  </button>
                </div>
              </article>
            ))}

            <button 
              onClick={clearCart}
              className="text-sm font-medium text-gray-500 hover:text-red-600 transition-colors pl-1"
            >
              Vaciar todo el carrito 💥
            </button>
          </div>

          {/* Panel Lateral del Resumen de la Orden (Precio Total) */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm h-fit">
            <h2 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Resumen del Pedido</h2>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Productos agregados:</span>
                <span className="font-semibold">{cartItems.reduce((acc, i) => acc + i.cartQuantity, 0)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Envío estimado:</span>
                <span className="text-green-600 font-medium">Gratis</span>
              </div>
              
              <hr className="my-2 border-gray-100" />
              
              {/* CRITERIO: Mostrar precio total acumulado */}
              <div className="flex justify-between text-base font-extrabold text-gray-900 pt-2">
                <span>Total a Pagar:</span>
                <span className="text-xl text-blue-700">₡{getTotalPrice().toLocaleString("es-CR")}</span>
              </div>
            </div>

            <button 
              onClick={() => alert("¡Funcionalidad de pago próximamente en el siguiente Sprint! 🚀")}
              className="w-full mt-6 bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm"
            >
              Continuar con la compra
            </button>
          </div>

        </div>
      )}
    </div>
  );
}