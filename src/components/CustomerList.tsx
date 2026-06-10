import { useEffect, useState } from "react";
import type { Customer } from "../models/responses/Customer";
import { getCustomers } from "../services/CustomerService";

export function CustomerList() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    loadCustomers();
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
    <div>
      <h1>Lista de clientes</h1>

      {customers.map((customer) => (
        <div key={customer.customerResourceId}>
          <h3>{customer.fullName}</h3>
          <p>{customer.email}</p>
          <p>{customer.phone}</p>
        </div>
      ))}
    </div>
  );
}   