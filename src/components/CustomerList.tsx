import { useEffect, useState } from "react";
import type { Customer } from "../models/responses/Customer";
import { getCustomers } from "../services/CustomerService";

export function CustomerList() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

 useEffect(() => {
    getCustomers()
      .then((data) => {
        setCustomers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al conectar con el backend:", err);
        setError("No se pudieron cargar los clientes de la base de datos.");
        setLoading(false);
      });
  }, []);

  async function loadCustomers() {
    try {
      const data = await getCustomers();
      setCustomers(data);
    } catch (error) {
      console.error("Error cargando clientes:", error);
    }
  }

return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px" }}>
      <h2 style={{ color: "#0056b3", borderBottom: "2px solid #007bff", paddingBottom: "10px" }}>
        Lista de Clientes (Conexión Backend)
      </h2>

      {loading && <p>Cargando información desde la API...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "15px" }}>
          {customers.map((customer) => (
            // Usamos el id único que viene mapeado del backend (.NET)
            <div key={customer.identification} style={{ border: "1px solid #dddddd", padding: "15px", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
              <h3 style={{ margin: "0 0 5px 0" }}>{customer.fullName}</h3>
              <p style={{ margin: "0", color: "#666" }}><strong>Correo:</strong> {customer.email}</p>
              <p style={{ margin: "0", color: "#666" }}><strong>Cédula/Identificación:</strong> {customer.identification}</p>
            </div>
          ))}

          {customers.length === 0 && (
            <p>No hay clientes registrados en el sistema.</p>
          )}
        </div>
      )}
    </div>
  );
}