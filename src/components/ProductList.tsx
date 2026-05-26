import { useEffect, useState } from "react";
import type { Product } from "../models/responses/Product";
import { getProducts } from "../services/ProductService";

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

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

  return (
    <div>
      <h1>Lista de productos</h1>

      {products.map((product) => (
        <div key={product.productResourceId}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}