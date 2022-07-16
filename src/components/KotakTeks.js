function KotakTeks(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>{props.judul}</label>
      <input
        type={props.jenis}
        placeholder={"Masukkan " + props.judul}
        style={{ padding: 8 }}
        onChange={props.onBerubah}
      />
    </div>
  );
}

export default KotakTeks;
