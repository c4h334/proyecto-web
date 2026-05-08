import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/home.tsx";
import Layout from "./components/layout/layout.tsx";
import Contact from "./pages/contact.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        {/* Futuras rutas:
        <Route path="/store" element={<Layout><Store /></Layout>} />
        */}
      </Routes>
    </Router>
  );
}

export default App;