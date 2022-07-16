function Tombol(props) {
  return (
    <button
      style={{
        padding: "12 16",
        borderRadius: 20,
        color: "white",
        backgroundColor: props.warna,
        border: 0
      }}
      onClick={props.onKlik}
    >
      {props.children}
    </button>
  );
}

export default Tombol;
