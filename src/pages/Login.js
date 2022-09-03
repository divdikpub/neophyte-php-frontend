import { useState } from "react";
import KotakTeks from "../components/KotakTeks";
import Tombol from "../components/Tombol";

function Login() {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      style={{
        maxWidth: 256,
        margin: "auto",
        background: "#bbb",
        padding: 32,
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <KotakTeks judul="Email" onBerubah={(e) => setEmail(e.target.value)} />
      <KotakTeks
        jenis={showPassword ? "text" : "password"}
        judul="Kata sandi"
      />
      <label>
        <input type="checkbox" onClick={() => setShowPassword(!showPassword)} />
        Tampilkan kata sandi
      </label>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Tombol warna="green" onKlik={() => alert(email)}>
          Login
        </Tombol>
        <Tombol warna="blue">Buat akun</Tombol>
      </div>
    </div>
  );
}

export default Login;
