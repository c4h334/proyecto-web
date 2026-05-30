import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home.tsx";
import Layout from "./components/layout/layout.tsx";
import Contact from "./pages/contact.tsx";
import Store from "./pages/store.tsx";
import Login from "./pages/login.tsx";
import Register from "./pages/register.tsx";
import Profile from "./pages/profile.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/store"
            element={
              <Layout>
                <Store />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <Layout>
                <Register />
              </Layout>
            }
          ></Route>
          <Route
            path="profile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          ></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
