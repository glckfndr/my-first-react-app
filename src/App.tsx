import { useEffect, useState } from "react";
const connect = () => {
  console.log("Connect server!");
};
const disconnect = () => {
  console.log("Disconnect server!");
};
function App() {
  useEffect(() => {
    connect();

    return () => disconnect();
  }, []);
  return <div></div>;
}

export default App;
