import ListGroup from "./components/ListGroup";
const items = [
  "New York",
  "Tokyo",
  "Kyiv",
  "London",
  "Paris",
  "Berlin",
  "Rome",
];
const heading = "City List";
const handleItem = (item: string) => {console.log(item)}
function App() {
  return (
    <div>
      <ListGroup items={items} heading={heading} onSelectItem={handleItem} />
    </div>
  );
}

export default App;
