import Navigation from "../components/Navigation";

import axios from "axios";
import {useState, useEffect} from "react";
import GifCards from "../components/GifCards";

const GiveAway = () => {
    const [gifs, setgifs] = useState([]);
    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await axios.get("https://mmo-games.p.rapidapi.com/giveaways", {
                    headers: {
                        "X-RapidAPI-Key": "ab3b36b054msh54e7eb81ef7623dp16ce21jsndfb2a9c5b829",
                        "X-RapidAPI-Host": "mmo-games.p.rapidapi.com"
                    }
                });
                setgifs(response.data);
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
                <div className="flex flex-col items-center p-3">
                    <h1 className="text-2xl font-bold mb-4">GiveAways</h1>

                </div>
                <div className="grid grid-cols-3 gap-4">
                    {
                    gifs.map((gif) => (
                        <GifCards key={
                                gif.id
                            }
                            game={gif}/>
                    ))
                }
                    {" "} </div>
            </div>
        </div>
    );
};

export default GiveAway;
