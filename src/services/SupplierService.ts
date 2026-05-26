import type { Supplier } from "../models/responses/Supplier";
import { config } from "../config";

const API_URL = `${config.api.url}/api/suppliers`;

export async function getSuppliers(): Promise<Supplier[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Error al obtener proveedores");
    }

    return await response.json();
  } catch (error) {
    console.error("Error en SupplierService:", error);
    throw error;
  }
}