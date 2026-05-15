import React, { useState } from 'react';
import { GaleriaProyectos } from '../components/GaleriaProyectos';

// === DEFINICIÓN DE DATOS Y ESTILOS (Todo en un solo archivo) ===

// Interfaz para definir la estructura de un producto
interface Product {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
  price: number;
  offer: string | null;
  description: string;
}

// === Datos quemados, se reemplaza después cuando se conecta con la db
const mockProducts: Product[] = [
  // Categoría: Cocina
  { id: 1, name: 'Sartén Antiadherente Premium', category: 'cocina', imageUrl: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=300&auto=format&fit=crop', price: 35.99, offer: '10% de descuento', description: 'Aluminio forjado, libre de PFOA. Mango ergonómico de acero.' },
  { id: 2, name: 'Juego de Cuchillos de Chef (5 pcs)', category: 'cocina', imageUrl: 'https://images.unsplash.com/photo-1593121925328-369cc84e9c08?q=80&w=300&auto=format&fit=crop', price: 85.00, offer: null, description: 'Acero inoxidable de alto carbono. Estuche de madera incluido.' },
  { id: 3, name: 'Licuadora de Alta Velocidad', category: 'cocina', imageUrl: 'https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?q=80&w=300&auto=format&fit=crop', price: 129.99, offer: null, description: 'Motor de 1200W, jarra de vidrio de 1.5L. 3 programas preestablecidos.' },
  
  // Categoría: Ropa
  { id: 4, name: 'Camiseta Básica de Algodón Orgánico', category: 'ropa', imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=300&auto=format&fit=crop', price: 25.50, offer: '2x1 en tallas seleccionadas', description: 'Tejido suave y transpirable. Certificado orgánico. Varios colores.' },
  { id: 5, name: 'Pantalones Vaqueros Slim Fit', category: 'ropa', imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=300&auto=format&fit=crop', price: 75.99, offer: null, description: 'Mezclilla elástica duradera, corte moderno y cómodo.' },
  { id: 6, name: 'Sudadera con Capucha Oversize Unisex', category: 'ropa', imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=300&auto=format&fit=crop', price: 60.00, offer: '15% de descuento', description: 'Forro polar suave en el interior. Diseño urbano minimalista.' },
  
  // Categoría: Tecnología
  { id: 7, name: 'Smartphone Galaxy S23 Ultra', category: 'tecnologia', imageUrl: 'https://images.unsplash.com/photo-1678911820864-a2c96e33123b?q=80&w=300&auto=format&fit=crop', price: 1199.99, offer: 'Regalo: Auriculares Galaxy Buds Pro', description: 'Cámara de 200MP, S Pen integrado. Pantalla AMOLED 120Hz.' },
  { id: 8, name: 'MacBook Air M2 (13")', category: 'tecnologia', imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=300&auto=format&fit=crop', price: 1099.00, offer: null, description: 'Chip M2, diseño ultradelgado y ligero. Batería de 18 horas.' },
  { id: 9, name: 'Auriculares Sony WH-1000XM5 Noise Cancelling', category: 'tecnologia', imageUrl: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=300&auto=format&fit=crop', price: 349.99, offer: null, description: 'Cancelación de ruido líder en la industria. Sonido premium y llamadas claras.' },
];

// Lista de categorías para el filtrado
const categories = ['todos', 'cocina', 'ropa', 'tecnologia'];

const colors = {
  primary: '#0056b3',
  secondary: '#e7f0fd',
  text: '#333333',
  white: '#ffffff',
  accent: '#007bff',
  border: '#dddddd',
  offerBg: '#ffc107',
  offerText: '#000000',
  progressBg: '#e0e0e0',
};

// === COMPONENTE PRINCIPAL ===
const Store: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  // Lógica de filtrado de productos
  const filteredProducts = selectedCategory === 'todos'
    ? mockProducts
    : mockProducts.filter(product => product.category === selectedCategory);

  const subtasks: any[] = [];
  const totalSubtasks = subtasks.length;
  const completedSubtasks = 5;
  // Validación para evitar dividir por cero si no hay subtasks
  const progressPercentage = totalSubtasks > 0 ? (completedSubtasks / totalSubtasks) * 100 : 0;

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
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
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
    // Estilos para la sección del Catálogo
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
      maxWidth: '700px',
      margin: '0 auto 25px auto',
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
      boxShadow: '0 4px 15px rgba(0,86,179,0.3)',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
      cursor: 'pointer',
    },
    // Estilos para las pestañas de filtrado
    tabs: {
      display: 'flex',
      gap: '12px',
      marginBottom: '40px',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    tabButton: (isActive: boolean) => ({
      backgroundColor: isActive ? colors.accent : colors.secondary,
      color: isActive ? colors.white : colors.text,
      border: `1px solid ${isActive ? colors.accent : colors.border}`,
      padding: '12px 24px',
      borderRadius: '30px',
      cursor: 'pointer',
      textTransform: 'capitalize',
      fontWeight: isActive ? 'bold' : 'normal',
      fontSize: '1rem',
      transition: 'background-color 0.3s ease, box-shadow 0.2s ease',
      outline: 'none',
    }),
    // Estilos para la cuadrícula de productos
    productGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '25px',
    },
    productCard: {
      backgroundColor: colors.white,
      border: `1px solid ${colors.border}`,
      borderRadius: '10px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      position: 'relative',
    },
    productImageContainer: {
      width: '100%',
      height: '200px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '20px',
      overflow: 'hidden',
      borderRadius: '6px',
      backgroundColor: colors.secondary, 
    },
    productImage: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain',
    },
    productDetails: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    productCategory: {
      fontSize: '0.85rem',
      color: colors.primary,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      marginBottom: '8px',
      letterSpacing: '1px',
    },
    productName: {
      fontSize: '1.25rem',
      fontWeight: '600',
      margin: '0 0 15px 0',
      lineHeight: '1.3',
      flexGrow: 1, 
    },
    productPriceRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '15px',
      marginTop: 'auto', 
    },
    productPrice: {
      fontSize: '1.4rem',
      color: colors.primary,
      fontWeight: 'bold',
    },
    productOffer: {
      backgroundColor: colors.offerBg,
      color: colors.offerText,
      padding: '5px 10px',
      borderRadius: '4px',
      fontSize: '0.9rem',
      fontWeight: 'bold',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    },
    productDescription: {
      fontSize: '0.95rem',
      color: '#666666',
      marginBottom: '20px',
      lineHeight: '1.5',
    },
    addToCartButton: {
      backgroundColor: colors.accent,
      color: colors.white,
      border: 'none',
      padding: '12px 0',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '1rem',
      width: '100%',
      transition: 'background-color 0.2s ease',
    },
    subtasksSection: {
      borderTop: `1px solid ${colors.border}`,
      paddingTop: '40px',
      marginTop: '40px',
    },
    progressContainer: {
      width: '100%',
      backgroundColor: colors.progressBg,
      borderRadius: '10px',
      overflow: 'hidden',
      height: '24px',
      marginBottom: '20px',
      boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
    },
    progressBar: {
      height: '100%',
      backgroundColor: colors.primary,
      width: `${progressPercentage}%`,
      transition: 'width 0.5s ease-in-out',
    },
    progressText: {
      textAlign: 'center',
      marginBottom: '30px',
      fontSize: '1.1rem',
      fontWeight: '500',
    },
    subtaskList: {
      listStyleType: 'none',
      padding: 0,
      maxWidth: '600px',
      margin: '0 auto',
    },
    subtaskItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      padding: '12px 15px',
      borderBottom: `1px solid #eeeeee`,
    },
    checkbox: {
      accentColor: colors.primary,
      width: '22px',
      height: '22px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.container}>
          <h1 style={styles.title}>Tienda y Catálogo</h1>
        </div>
      </header>

      <main style={styles.container}>
        
        {/* Sección del Catálogo */}
        <section style={{...styles.section, ...styles.catalogSection}}>
          <h2 style={styles.sectionTitle}>Nuestro Catálogo Actualizado</h2>
          <p style={styles.catalogText}>Descarga nuestro catálogo completo en formato PDF para visualizar offline todos nuestros productos, especificaciones técnicas y ofertas exclusivas detalladas.</p>
          <a
            href="https://www.maxionline.ec/wp-content/uploads/2024/06/PDF-Catalogo-Primavera-Hombres-2024.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            style={styles.catalogButton}
            title="Descargar catálogo en formato PDF"
          >
            Ver Catálogo en PDF
          </a>
        </section>

        {/* SECCION DE LA GALERIA DE CONTENTFUL */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Galería de Proyectos Destacados</h2>
          <GaleriaProyectos />
        </section>

        {/* === SECCIÓN DE LA TIENDA === */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Productos Disponibles</h2>

          {/* Subdivisiones (Pestañas de Categoría) */}
          <div style={styles.tabs}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={styles.tabButton(selectedCategory === category) as React.CSSProperties}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Cuadrícula de Productos (con filtrado) */}
          <div style={styles.productGrid}>
            {filteredProducts.map(product => (
              <article key={product.id} style={styles.productCard}>
                <div style={styles.productImageContainer}>
                  <img src={product.imageUrl} alt={product.name} style={styles.productImage} />
                </div>
                <div style={styles.productDetails}>
                  <span style={styles.productCategory}>{product.category}</span>
                  <h3 style={styles.productName}>{product.name}</h3>
                  <div style={styles.productPriceRow}>
                    <span style={styles.productPrice}>${product.price.toFixed(2)}</span>
                    {product.offer && (
                      <span style={styles.productOffer}>{product.offer}</span>
                    )}
                  </div>
                  <p style={styles.productDescription}>{product.description}</p>
                  <button style={styles.addToCartButton}>Añadir al carrito</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Store;