import Navigation from "../components/Navigation";
import Card from "../components/Card";
import axios from 'axios';
import {useState, useEffect} from 'react';

const NewGame = () => {
    const [games, setGames] = useState([]);
    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await axios.get('https://mmo-games.p.rapidapi.com/latestnews', {
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
    return (
        <div className="bg-gray-100">
            <Navigation/>
            <div className="container mx-auto lg:px-32 lg:pt-12">

                <div className="grid grid-cols-3 gap-4">
                    {
                    games.map((game) => (
                        <Card key={
                                game.id
                            }
                            game={game}/>
                    ))
                } </div>

            </div>
        </div>
    );
};

export default NewGame;
