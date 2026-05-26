import React, { useState, useEffect } from 'react';
import { GaleriaProyectos } from '../components/GaleriaProyectos';
import type { Customer } from '../models/responses/Customer';
import { getCustomers } from '../services/CustomerService';

const colors = {
  primary: '#0056b3',
  secondary: '#e7f0fd',
  text: '#333333',
  white: '#ffffff',
  accent: '#007bff',
  border: '#dddddd',
};

const Store: React.FC = () => {
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
        console.error("Error al conectar con el backend de clientes:", err);
        setError("No se pudieron cargar los clientes desde el servidor.");
        setLoading(false);
      });
  }, []);

  const styles: { [key: string]: any } = {
    page: {
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      color: colors.text,
      backgroundColor: colors.white,
      margin: 0,
      padding: 0,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },

    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      width: '100%',
      boxSizing: 'border-box',
    },

    header: {
      backgroundColor: colors.primary,
      color: colors.white,
      padding: '30px 0',
      textAlign: 'center',
      marginBottom: '40px',
    },

    title: {
      margin: 0,
      fontSize: '2.5rem',
      fontWeight: 'bold',
    },

    section: {
      marginBottom: '50px',
    },

    sectionTitle: {
      color: colors.primary,
      borderBottom: `2px solid ${colors.accent}`,
      paddingBottom: '10px',
      marginBottom: '30px',
      fontSize: '1.8rem',
      fontWeight: '600',
    },

    catalogSection: {
      backgroundColor: colors.secondary,
      padding: '40px',
      borderRadius: '12px',
      textAlign: 'center',
      border: `1px solid ${colors.border}`,
    },

    catalogText: {
      fontSize: '1.1rem',
      marginBottom: '25px',
      lineHeight: '1.6',
    },

    catalogButton: {
      display: 'inline-block',
      backgroundColor: colors.primary,
      color: colors.white,
      padding: '15px 35px',
      borderRadius: '30px',
      textDecoration: 'none',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginTop: '20px',
      cursor: 'pointer',
    },

    customerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '25px',
    },

    customerCard: {
      backgroundColor: colors.white,
      border: `1px solid ${colors.border}`,
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    },

    customerName: {
      fontSize: '1.3rem',
      color: colors.primary,
      fontWeight: '600',
      marginBottom: '10px',
    },

    customerDetail: {
      fontSize: '0.95rem',
      margin: '4px 0',
      color: '#555555',
    },
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.container}>
          <h1 style={styles.title}>Panel de Administración</h1>
        </div>
      </header>

      <main style={styles.container}>
        
        <section style={{ ...styles.section, ...styles.catalogSection }}>
          <h2 style={styles.sectionTitle}>Nuestro Catálogo Actualizado</h2>

          <p style={styles.catalogText}>
            Descarga nuestro catálogo completo en formato PDF para visualizar
            offline todos nuestros productos.
          </p>

          <a
            href="https://www.maxionline.ec/wp-content/uploads/2024/06/PDF-Catalogo-Primavera-Hombres-2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.catalogButton}
          >
            Ver Catálogo en PDF
          </a>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>
            Galería de Proyectos Destacados
          </h2>

          <GaleriaProyectos />
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>
            Clientes Registrados en el Sistema
          </h2>

          {loading ? (
            <p style={{ textAlign: 'center' }}>
              Conectando con el servidor y cargando clientes...
            </p>
          ) : error ? (
            <p style={{ textAlign: 'center', color: 'red' }}>
              {error}
            </p>
          ) : (
            <div style={styles.customerGrid}>
              {customers.map((customer) => (
                <article
                  key={customer.customerResourceId}
                  style={styles.customerCard}
                >
                  <h3 style={styles.customerName}>
                    {customer.fullName}
                  </h3>

                  <p style={styles.customerDetail}>
                    <strong>Email:</strong> {customer.email}
                  </p>

                  <p style={styles.customerDetail}>
                    <strong>Teléfono:</strong>{' '}
                    {customer.phone || 'No especificado'}
                  </p>
                </article>
              ))}

              {customers.length === 0 && (
                <p
                  style={{
                    gridColumn: '1/-1',
                    textAlign: 'center',
                    color: '#666',
                  }}
                >
                  No se encontraron clientes.
                </p>
              )}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Store;