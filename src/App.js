import "./App.css";
import CardList from "./components/CardList/CardList";
import Navigation from "./components/nav/Navigation";
import MyList from "./components/myList/MyList";
import Favourites from "./components/Favourites/Favourites";
import { Routes, Route } from "react-router-dom";
import { movies, latest } from "./movies/movies";
function App() {
  return (
    <div className="font-mono bg-gray-light" style={{ height: "100vh" }}>
      <Navigation />
      <Routes>
        <Route
          path="/flixpack"
          element={
            <>
              <CardList category="New Flix" movies={movies} />{" "}
              <CardList category="Latest Movies" movies={latest} />
            </>
          }
        />
        <Route path="/flixpack/my-list" element={<MyList />} />
        <Route path="/flixpack/favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;
