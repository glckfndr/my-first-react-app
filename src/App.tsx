import { useState } from "react";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";

function App() {
  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushrooms']
  });
  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, 'Cheese' ] });
  };

  return <button onClick={handleClick}>{pizza.toppings} Click Me</button>;
}

export default App;
