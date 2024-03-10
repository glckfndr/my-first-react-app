import { useState } from "react";
import ExpandableText from "./components/ExpandableText";

function App() {
    return (<div>
    <ExpandableText maxChars={10}>
      {"a".repeat(11)}
    </ExpandableText>
  </div>);
}

export default App;
