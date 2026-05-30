import React, { createContext, useContext, useState } from 'react';
import type { Product } from '../../models/responses/Product';

export interface CartItem extends Product {
  cartQuantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, action: 'increase' | 'decrease') => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
  // Estados de las notis
  const [notification, setNotification] = useState<string | null>(null);
  const [timerId, setTimerId] = useState<number | null>(null);

  // Función ayudante para lanzar el mensaje flotante
  const triggerNotification = (message: string) => {
    if (timerId) clearTimeout(timerId); 
    
    setNotification(message);
    
    const id = window.setTimeout(() => {
      setNotification(null);
    }, 3000); 
    setTimerId(id);
  };

  const addToCart = (product: Product) => {
    // REvisa el estado actual para saber si se alcanza el límite de stock antes de actualizar
    const existingItem = cartItems.find(item => item.productResourceId === product.productResourceId);
    
    if (existingItem && existingItem.cartQuantity >= product.quantity) {
      triggerNotification(`⚠️ No podés agregar más de ${product.name}, stock máximo alcanzado.`);
      return;
    }

    setCartItems((prevItems) => {
      const itemInCart = prevItems.find(item => item.productResourceId === product.productResourceId);
      
      if (itemInCart) {
        return prevItems.map(item =>
          item.productResourceId === product.productResourceId
            ? { ...item, cartQuantity: item.cartQuantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, cartQuantity: 1 }];
    });

  
    triggerNotification(`¡${product.name} se ha añadido al carrito!`);
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter(item => item.productResourceId !== productId));
  };

  const updateQuantity = (productId: string, action: 'increase' | 'decrease') => {
    setCartItems((prevItems) =>
      prevItems.map(item => {
        if (item.productResourceId === productId) {
          if (action === 'increase') {
            if (item.cartQuantity < item.quantity) {
              return { ...item, cartQuantity: item.cartQuantity + 1 };
            } else {
              triggerNotification(`⚠️ Stock máximo alcanzado para este artículo.`);
              return item;
            }
          } else {
            return item.cartQuantity > 1 ? { ...item, cartQuantity: item.cartQuantity - 1 } : item;
          }
        }
        return item;
      })
    );
  };

  const clearCart = () => setCartItems([]);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.cartQuantity, 0);
  };

  const getItemCount = () => {
    return cartItems.reduce((count, item) => count + item.cartQuantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, getTotalPrice, getItemCount }}>
      {children}

      {/*(msg flotante en esquina inferior derecha) */}
      {notification && (
        <div className="fixed bottom-5 right-5 bg-gray-900 text-white px-5 py-4 rounded-xl shadow-2xl z-50 flex items-center gap-3 font-medium border border-gray-800 transition-all transform animate-fade-in-up max-w-xs sm:max-w-sm w-auto">
          <span className="text-sm sm:text-base flex-1 break-words whitespace-normal">
            {notification}
          </span>
        </div>
      )}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart debe usarse dentro de un CartProvider');
  return context;
};