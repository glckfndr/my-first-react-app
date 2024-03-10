import { useState } from "react";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";

function App() {
  const [cart, setCart] = useState({
    discount: 1,
    items: [
      {id: 1, title: 'Product1', quantity: 1},
      {id: 2, title: 'Product2', quantity: 2}
    ]
  });
  const handleClick = () => {
    setCart({ ...cart, items: cart.items.map((item) =>{
      if(item.id == 1) item.quantity += 1;
      return item;
      }
      ) });
  };

  return <button onClick={handleClick}>{cart.items[0].quantity} -- Click Me</button>;
}

export default App;
