import ListGroup from "./components/ListGroup";

function App() {
const items = ["New York", "Los Angeles", "San Francisco"]
    return ( <ListGroup items={items} heading="Miami"
      onSelectItem={() => console.log("press")}/> );
}

export default App;
