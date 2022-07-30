import { createContext, useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Product from "./components/Product";
import "./style.css";

const products = [
  {
    id: 1,
    name: "Kaos Polos",
    photo: "/img/kaos-polos.jpg",
    price: 40000,
  },
  {
    id: 2,
    name: "Kipas Angin",
    photo: "/img/kipas-angin.jpg",
    price: 200000,
  },
  {
    id: 3,
    name: "Laptop Gaming",
    photo: "/img/laptop-gaming.jpg",
    price: 15000000,
  },
];

export const TemaContext = createContext();

// ARRAY
// - urutan harus sama (indeks)
// - nama boleh beda

// OBJEK
// - urutan boleh beda
// - nama harus sama (properti)

function App() {
  const [tema, setTema] = useState("terang");

  function ubahTema() {
    setTema(tema === "terang" ? "gelap" : "terang");
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
        <div
          style={{
            display: "flex",
            gap: 16,
          }}
        >
          {products.map((p) => (
            <Product key={p.id} product={p} />
          ))}
        </div>

        <Login />

        <footer>© 2022 Neophyte Industries</footer>
      </div>
    </TemaContext.Provider>
  );
}

export default App;
