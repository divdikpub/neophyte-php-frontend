import TombolUbahTema from "./TombolUbahTema";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Beranda</Link>
      <Link to="/data/products">Produk</Link>
      <Link to="/data/users">Pengguna</Link>
      <Link to="/about">Tentang</Link>
      <Link to="/login">Login</Link>
      <TombolUbahTema />
    </nav>
  );
}

export default Navbar;
