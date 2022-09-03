import Product from "../components/Product";

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

function Products() {
  return (
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
  );
}

export default Products;
