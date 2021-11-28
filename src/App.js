import "./App.css";
import Card from "./components/CardList/Card/Card";

function App() {
  return (
    <div className="font-mono bg-gray-light" style={{ height: "100vh" }}>
      <Card
        title="The Witcher"
        subtitle="Nightmare of the Wolf"
        description="The Witcher Nightmare of the Wolf description"
      />
    </div>
  );
}

export default App;
