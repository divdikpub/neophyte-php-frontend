import { useContext } from "react";
import { TemaContext } from "../App";

function TombolUbahTema() {
  const [tema, ubahTema] = useContext(TemaContext);

  return <button onClick={ubahTema}>Ubah tema (sekarang: {tema})</button>;
}

export default TombolUbahTema;
