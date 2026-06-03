import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./pages/home.tsx";
import Layout from "./components/layout/layout.tsx";
import Contact from "./pages/contact.tsx";
import Store from "./pages/store.tsx";
import Login from "./pages/login.tsx";
import Register from "./pages/register.tsx";
import Profile from "./pages/profile.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import CarPage from "./pages/carPage.tsx";
import { ProductList } from "./components/ProductList.tsx";
import { CartProvider } from "./components/cart/CartContext.tsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="/register" element={<Layout><Register /></Layout>} />
          <Route path="/profile" element={<Layout><Profile /></Layout>} />
          <Route element={<CartProvider><Outlet /></CartProvider>}>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/store" element={<Layout><Store /></Layout>} />
            <Route path="/cart" element={<Layout><CarPage /></Layout>} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;