import Navigation from "../components/Navigation";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import SearchGame from "../components/SearchGame";
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const Home = () => {
    const [games, setGames] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage] = useState(15);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredGames, setFilteredGames] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await axios.get('https://mmo-games.p.rapidapi.com/games', {
                    headers: {
                        'X-RapidAPI-Key': 'ab3b36b054msh54e7eb81ef7623dp16ce21jsndfb2a9c5b829',
                        'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
                    }
                });
                setGames(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchGames();
    }, []);

    useEffect(() => {
        const filterGames = () => {
            const filtered = games.filter(game => {
                return game.title.toLowerCase().includes(searchTerm.toLowerCase());
            });
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
            <Navigation/>
            <div className="container mx-auto lg:px-32 lg:pt-12">
                <SearchGame searchValue={searchTerm}
                    setSearchValue={setSearchTerm}/>
                <div className="grid grid-cols-3 gap-4">
                    {
                    currentGames.map((game) => (
                        <Link to={
                            `/Detail/${
                                game.id
                            }`
                        }><Card key={
                                    game.id
                                }
                                game={game}/></Link>
                    ))
                } </div>
                <Pagination currentPage={currentPage}
                    totalGame={
                        filteredGames.length
                    }
                    totalPages={
                        Math.ceil(filteredGames.length / gamesPerPage)
                    }
                    onPageChange={paginate}/>
            </div>
        </div>
    );
};

export default Home;
