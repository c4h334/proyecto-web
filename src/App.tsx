import { BrowserRouter as Router, Routes, Route, Outlet, Navigate} from "react-router-dom";
import "./App.css";
import Home from "./pages/home.tsx";
import Layout from "./components/layout/layout.tsx";
import Contact from "./pages/contact.tsx";
import Store from "./pages/store.tsx";
import Login from "./pages/login.tsx";
import Register from "./pages/register.tsx";
import Profile from "./pages/profile.tsx";
import { AuthProvider, useAuth } from "./context/AuthContext.tsx";
import CarPage from "./pages/carPage.tsx";
import { ProductList } from "./components/ProductList.tsx";
import { CartProvider } from "./components/cart/CartContext.tsx";

// Componente para proteger las rutas privadas del lado del cliente
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();

  // Si está autenticado muestra los componentes hijos, si no, redirige al login 
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="/register" element={<Layout><Register /></Layout>} />

          {/* Ruta protegida */}
          <Route path="/profile" element={<Layout><Profile /></Layout>} />

          {/* Rutas con CartProvider */}
          <Route element={<CartProvider><Outlet /></CartProvider>}>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/store" element={<Layout><Store /></Layout>} />

            {/* Ruta del Carrito Protegida */}
            <Route path="/cart" element={<Layout><CarPage /></Layout>} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;