import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Navigation from '../components/Navigation';

const GameDetails = () => {
    const {id} = useParams();
    const [game, setGame] = useState(null);

    useEffect(() => {
        const fetchGame = async () => {
            try {
                const response = await axios.get(`https://mmo-games.p.rapidapi.com/game?id=${id}`, {
                    headers: {
                        'X-RapidAPI-Key': 'ab3b36b054msh54e7eb81ef7623dp16ce21jsndfb2a9c5b829',
                        'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
                    }
                });
                setGame(response.data);
                console.log("Success");
            } catch (error) {
                console.error(error);
            }
        };

        fetchGame();
    }, [id]);

    if (!game) {
        return <div>Loading...</div>;
    }

    return (
        <div className='bg-white pb-4'>
            <Navigation/>
            <div className="container mx-auto my-3 lg:px-32 lg:pt-12 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <img className="w-full h-auto rounded-lg"
                            src={
                                game.thumbnail
                            }
                            alt={
                                game.title
                            }/>
                    </div>
                    <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                        <h2 className="text-4xl text-blue-500 font-bold mb-4">
                            {
                            game.title
                        }</h2>

                        <p className="text-gray-700">Genre: {
                            game.genre
                        }</p>
                        <p className="text-gray-700">Platform: {
                            game.platform
                        }</p>
                        <p className="text-gray-700">Publisher: {
                            game.publisher
                        }</p>
                        <p className="text-gray-700">Developer: {
                            game.developer
                        }</p>
                        <p className="text-gray-700">Release Date: {
                            game.release_date
                        }</p>

                        {
                        game.minimum_system_requirements && (
                            <div className="mt-4">
                                <h3 className="text-2xl font-bold mb-2">System Minimum Requirements</h3>
                                <ul className="list-disc pl-6">
                                    <li className="text-gray-700">
                                        {
                                        game.minimum_system_requirements.os
                                    }</li>
                                    <li className="text-gray-700">
                                        {
                                        game.minimum_system_requirements.processor
                                    }</li>
                                    <li className="text-gray-700">
                                        {
                                        game.minimum_system_requirements.memory
                                    }</li>
                                    <li className="text-gray-700">
                                        {
                                        game.minimum_system_requirements.graphics
                                    }</li>
                                    <li className="text-gray-700">
                                        {
                                        game.minimum_system_requirements.storage
                                    }</li>
                                </ul>
                            </div>
                        )
                    } </div>
                </div>

                <div className="mt-4">
                    <h3 className="text-2xl font-bold mb-2">Description</h3>
                    <p className="text-gray-700">
                        {
                        game.description
                    }</p>
                </div>

                <div className='mt-4'>
                    <a href={
                            game.game_url
                        }
                        className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg mb-4">
                        Try it
                    </a>
                </div>

                <div className="mt-8">
                    <h3 className="text-2xl font-bold mb-4">Screenshots</h3>
                    <div className="grid grid-cols-3 gap-4">
                        {
                        game.screenshots.map((screenshot) => (
                            <div key={
                                screenshot.id
                            }>
                                <img className="w-full rounded-lg shadow-xl"
                                    src={
                                        screenshot.image
                                    }
                                    alt={
                                        `Screenshot ${
                                            screenshot.id
                                        }`
                                    }/>
                            </div>
                        ))
                    } </div>
                </div>
            </div>
        </div>
    );
};

export default GameDetails;
