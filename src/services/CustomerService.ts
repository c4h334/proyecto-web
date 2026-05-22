import type { Customer } from "../models/responses/Customer";
import { config } from "../config";

const API_URL = `${config.api.url}/api/customers`;

export async function getCustomers(): Promise<Customer[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Error al obtener los clientes");
    }

    return await response.json();
  } catch (error) {
    console.error("Error en CustomerService:", error);
    throw error;
  }
} 