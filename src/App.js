import "./App.css";
import CardList from "./components/CardList/CardList";

function App() {
  return (
    <div className="font-mono bg-gray-light" style={{ height: "100vh" }}>
      {/* <Card
        title="The Witcher"
        subtitle="Nightmare of the Wolf"
        description="The Witcher Nightmare of the Wolf description"
      /> */}
      <CardList />
    </div>
  );
}

export default App;
