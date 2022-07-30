import { useContext } from "react";
import { TemaContext } from "../App";

function Product({ product }) {
  const tema = useContext(TemaContext);

  return (
    <div
      style={{
        background: tema[0] === "terang" ? "pink" : "maroon",
        padding: 16,
        borderRadius: 16,
      }}
    >
      <img src={product.photo} />
      <h4>{product.name}</h4>
      <h5>{product.price}</h5>
    </div>
  );
}

export default Product;
