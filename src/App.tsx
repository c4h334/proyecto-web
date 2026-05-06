import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/home.tsx";
import Layout from "./components/layout/layout.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        {/* Futuras rutas:
        <Route path="/store" element={<Layout><Store /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        */}
      </Routes>
    </Router>
  );
}

export default App;