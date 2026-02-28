const express = require("express");
const cors = require("cors");
const Values = require("values.js");

const app = express(); // ✅ app definido ANTES de usar app.get

app.use(cors());
app.use(express.json());

app.get("/api/message", (req, res) => {
  res.json({ message: "Servidor Node funcionando 🚀" });
});

app.get("/api/palette", (req, res) => {
  const color = (req.query.color || "red").trim();

  try {
    const colors = new Values(color).all(9).map((c) => {
      const [r, g, b] = c.rgb;
      const toHex = (n) => Number(n).toString(16).padStart(2, "0");
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
    });

    res.json({ base: color, colors });
  } catch (error) {
    res.status(400).json({ error: "Color invalido" });
  }
});

app.listen(5000, () => {
  console.log("Servidor corriendo en puerto 5000");
});