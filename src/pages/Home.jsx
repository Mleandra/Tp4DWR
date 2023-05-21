import Navigation from "../components/Navigation";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import SearchGame from "../components/SearchGame";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FilterBar from "../components/FilterBar";

const Home = () => {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(15);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortFilter, setSortFilter] = useState("");
  const [platformFilter, setPlatformFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        let url = `https://mmo-games.p.rapidapi.com/games`;

        // Add filters to the URL if they have a value
        const filterParams = [];
        if (platformFilter) filterParams.push(`platform=${platformFilter}`);

        if (categoryFilter) filterParams.push(`category=${categoryFilter}`);

        if (sortFilter) filterParams.push(`sort-by=${sortFilter}`);

        if (filterParams.length > 0) {
          url += `?${filterParams.join("&")}`;
        }
        const response = await axios.get(url, {
          headers: {
            "X-RapidAPI-Key":
              "ab3b36b054msh54e7eb81ef7623dp16ce21jsndfb2a9c5b829",
            "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
          },
        });
        setGames(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGames();
  }, [platformFilter, categoryFilter, sortFilter]);

  useEffect(() => {
    const filterGames = () => {
      let filtered = games;

      // Apply search filter
      filtered = filtered.filter((game) =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setFilteredGames(filtered);
    };

    filterGames();
  }, [searchTerm, games]);

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-gray-100">
      <Navigation />
      <div className="container mx-auto lg:px-32 lg:pt-12">
        <div className="flex flex-col items-center p-3">
          <h1 className="text-2xl font-bold mb-4">Games Univers</h1>
          <p className="text-l font-semibold">
            Un exemple de jeux uniquement pour vous.
          </p>
        </div>
        <SearchGame searchValue={searchTerm} setSearchValue={setSearchTerm} />
        <FilterBar
          platformFilter={platformFilter}
          categoryFilter={categoryFilter}
          sortFilter={sortFilter}
          setPlatformFilter={setPlatformFilter}
          setCategoryFilter={setCategoryFilter}
          setSortFilter={setSortFilter}
        />
        <div className="grid grid-cols-3 gap-4">
          {currentGames.map((game) => (
            <Link
              to={`/Detail/${game.id}`}
              key={game.id}
              aria-label="Accéder à la page de details du  jeu "
            >
              <Card game={game}>
                <div className="sr-only">
                  Card presentant le jeux {game.title}
                </div>
              </Card>
            </Link>
          ))}{" "}
        </div>
        <Pagination
          currentPage={currentPage}
          totalGame={filteredGames.length}
          totalPages={Math.ceil(filteredGames.length / gamesPerPage)}
          onPageChange={paginate}
        />
      </div>
    </div>
  );
};

export default Home;
