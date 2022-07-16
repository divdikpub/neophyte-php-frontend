import Login from "./components/Login";
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

const numbers = [1, 2, 3, 4];

function App() {
  return (
    <>
      <header>
        <h1>Neophyte Store</h1>
      </header>

      <div
        style={{
          display: "flex",
          gap: 16,
        }}
      >
        {products.map((p) => {
          return (
            <div
              style={{
                background: "pink",
                padding: 8,
                borderRadius: 16,
              }}
            >
              <img src={p.photo} />
              <h4>{p.name}</h4>
              <h5>{p.price}</h5>
            </div>
          );
        })}
      </div>

      <Login />

      <footer>© 2022 Neophyte Industries</footer>
    </>
  );
}

export default App;
