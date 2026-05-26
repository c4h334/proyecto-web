import { useEffect, useState } from "react";
import type { Supplier } from "../models/responses/Supplier";
import { getSuppliers } from "../services/SupplierService";

export function SupplierList() {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);

  useEffect(() => {
    loadSuppliers();
  }, []);

  async function loadSuppliers() {
    try {
      const data = await getSuppliers();
      setSuppliers(data);
    } catch (error) {
      console.error("Error cargando proveedores:", error);
    }
  }

  return (
    <div>
      <h1>Lista de proveedores</h1>

      {suppliers.map((supplier) => (
        <div key={supplier.supplierResourceId}>
          <h3>{supplier.companyName}</h3>
          <p>{supplier.email}</p>
          <p>{supplier.phone}</p>
        </div>
      ))}
    </div>
  );
}