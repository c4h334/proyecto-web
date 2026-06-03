import { BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom";
import './App.css'
import Home from "./pages/home.tsx";
import Layout from "./components/layout/layout.tsx";
import Contact from "./pages/contact.tsx";
import Store from "./pages/store.tsx";
import CarPage from "./pages/carPage.tsx";
import { ProductList } from "./components/ProductList.tsx";
import { CartProvider } from "./components/cart/CartContext.tsx";
        
       

// src/App.tsx
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        
        {/* Solo las pantallas de comercio comparten el estado */}
        <Route element={<CartProvider><Outlet /></CartProvider>}>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/store" element={<Layout><Store /></Layout>} />
          <Route path="/cart" element={<Layout><CarPage /></Layout>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;