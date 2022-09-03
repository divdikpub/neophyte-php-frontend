import { createContext, useState } from "react";
import Header from "./components/Header";
import "./style.css";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Index from "./pages/users/Index";
import Login from "./pages/Login";
import User from "./pages/users/User";

export const TemaContext = createContext();

// ARRAY
// - urutan harus sama (indeks)
// - nama boleh beda

// OBJEK
// - urutan boleh beda
// - nama harus sama (properti)

function App() {
  const [tema, setTema] = useState(localStorage.getItem("tema"));

  function ubahTema() {
    setTema(tema === "terang" ? "gelap" : "terang");
    localStorage.setItem("tema", tema === "terang" ? "gelap" : "terang");
  }

  return (
    <TemaContext.Provider value={[tema, ubahTema]}>
      <div
        style={{
          background: tema === "terang" ? "#fff" : "#000",
          color: tema === "terang" ? "#000" : "#fff",
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<main>Ini halaman beranda.</main>} />
          <Route path="data">
            <Route path="products" element={<Products />} />
            <Route path="users">
              <Route index element={<Index />} />
              <Route path=":id" element={<User />} />
            </Route>
          </Route>
          <Route path="about" element={<main>Ini halaman tentang.</main>} />
          <Route path="login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </TemaContext.Provider>
  );
}

export default App;
