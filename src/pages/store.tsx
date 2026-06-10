import React from 'react';
import { ProductList } from '../components/ProductList';

const colors = {
  primary: '#0056b3',
  secondary: '#e7f0fd',
  text: '#333333',
  white: '#ffffff',
  accent: '#007bff',
  border: '#dddddd',
};

const Store: React.FC = () => {
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
  };

  return (
    <div style={styles.page}>
      <main style={styles.container}>
        
        {/* Sección del Catálogo con enlace al PDF */}
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

        {/* Sección de productos*/}
        <section style={styles.section}>
          <ProductList />
        </section>

      </main>
    </div>
  );
};

export default Store;