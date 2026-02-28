import { useState } from "react";
import "./App.css";
import Values from "values.js";
import FormColor from "./components/FormColor";
import DisplayColors from "./components/DisplayColors";
import { useEffect } from "react";

function App() {
  const [list, setList] = useState(new Values('red').all(5));
  console.log("LIST:", list);
  console.log(list);

  useEffect(() => {
  fetch("http://localhost:5000/api/message")
    .then((res) => res.json())
    .then((data) => {
      console.log("Mensaje desde Node:", data.message);
    })
    .catch((err) => console.log("Error conectando a Node:", err));
}, []);

  return (
    <div className="App">
      <FormColor setList={setList}/>
      <DisplayColors list={list}/>
    </div>
  );
}

export default App;