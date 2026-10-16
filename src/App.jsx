import { useState, useEffect } from "react";
import { fetchCharacters } from "./components/api";
import CharacterList from "./components/CharacterList";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function load() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchCharacters(page);
        setCharacters(data.results);
      } catch (err) {
        setCharacters(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, [page]);
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-green-600">Rick and Morty</h1>
      {isLoading && <p className="text-grea-500">Loading...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}
      {!isLoading && !error && <CharacterList characters={characters} />}
      {/* <button
        className="bg-gray-200 px-3 py-1.5"
        disabled={isLoading ? true : false}
        onClick={() => setPage(page + 1)}
      >
        {isLoading ? "Загрузка..." : "Дальше"}
      </button> */}
    </div>
  );
};

export default App;
