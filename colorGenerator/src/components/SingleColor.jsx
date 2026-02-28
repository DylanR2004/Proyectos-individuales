import { useState } from "react";

const SingleColor = ({ hexColor }) => {
  const [copy, setCopy] = useState(false);

  // Si llega vacío/undefined, no renderiza el cuadro (evita pantalla blanca)
  if (!hexColor) return null;

  // Normaliza por si llega con o sin #
  const normalizedHex = String(hexColor).startsWith("#")
    ? String(hexColor)
    : `#${hexColor}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(normalizedHex);
    setCopy(true);

    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };

  if (!hexColor) return null;

  return (
    <div className="single-card" style={{ backgroundColor: normalizedHex }}>
      <div className="content">
        <p>{normalizedHex}</p>
        <button onClick={handleCopy}>
          <img src="/clipTransparent.png" alt="copy" />
        </button>
      </div>

      {copy && <p className="copy-alert">Copied to clipboard</p>}
    </div>
  );
};

export default SingleColor;