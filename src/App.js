import "./App.css";
import CardList from "./components/CardList/CardList";
import Navigation from "./components/nav/Navigation";
import MyList from "./components/myList/MyList";
import Favourites from "./components/Favourites/Favourites";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="font-mono bg-gray-light" style={{ height: "100vh" }}>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CardList /> <CardList />
            </>
          }
        />
        <Route path="/my-list" element={<MyList />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;
