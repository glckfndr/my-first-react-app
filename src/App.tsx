import { useState } from "react";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";

function App() {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"])
  return (
    <>
      <NavBar cartItemsCount={cartItems.length}/>
      <Cart  items={cartItems} handleClear={() => setCartItems([])}/>
    </>
  );
}

export default App;
