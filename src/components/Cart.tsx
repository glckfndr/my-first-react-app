import React from "react";
interface Props {
  items: string[];
  handleClear: () => void;
}

const Cart = ({ items, handleClear }: Props) => {
  return (
    <>
      <h2>Cart</h2>
      <ol>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
      <button onClick={handleClear}>Clear</button>
    </>
  );
};

export default Cart;
