import { useState } from "react";

const FormColor = ({ setList }) => {
  const [color, setColor] = useState("blue");
  const [error, setError] = useState(false);

  const handleGenerator = async (e) => {
  e.preventDefault();

  try {
    setError(false);

    const url = `http://localhost:5000/api/palette?color=${encodeURIComponent(
      color.trim()
    )}`;

    const res = await fetch(url);
    const data = await res.json();

    console.log("URL:", url);
    console.log("DATA:", data);

    if (!res.ok) throw new Error(data?.error || "Color inválido");

    // ✅ IMPORTANTE: aquí tiene que ser data.colors
    setList(Array.isArray(data.colors) ? data.colors : []);
  } catch (error) {
    console.log(error);
    setError(true);
    // 👇 NO borres la lista aquí (si haces setList([]) se queda en blanco)
  }
};

  return (
    <div className="form-color">
      <h1>Color Palete Generator</h1>
      <form onSubmit={handleGenerator}>
        <input
          type="text"
          placeholder="#fff"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input type="submit" value="Generar" />
      </form>
      {error ? <p className="error">No existe este color...</p> : null}
    </div>
  );
};

export default FormColor;