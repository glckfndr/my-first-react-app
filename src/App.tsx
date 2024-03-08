import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(true)
  return (<>
    {alertVisible && <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>}
    <Button color={"primary"}
        onClick={() => setAlertVisible(!alertVisible)}>
          Press Me!
      </Button>
      </>
  );
}

export default App;
