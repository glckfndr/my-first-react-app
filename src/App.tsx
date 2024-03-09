import Like from "./components/Like";

function App() {
  return (
    <div>
      <Like
        size={20}
        status={false}
        onClick={() => console.log("Heat is clicked!")}
      />
    </div>
  );
}

export default App;
