import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [category, setCategory] = useState("");

  return (
    <div>
      <select
        className="form-select"
        onChange={(ev) => setCategory(ev.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="HouseHold">HouseHold</option>
      </select>
      <ProductList category={category} />
    </div>
  );
}

export default App;
