import type { Product } from "../models/responses/Product";
import { config } from "../config";

const API_URL = `${config.api.url}/api/products`;

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Error al obtener productos");
    }

    return await response.json();
  } catch (error) {
      console.error("Error en ProductService:", error);
    throw error;
  }
}

export async function getProductById(id: string): Promise<Product> {
  try {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
      throw new Error("No se pudo obtener el detalle del producto");
    }

    return await response.json();
  } catch (error) {
    console.error("Error en getProductById:", error);
    throw error;
  }
}