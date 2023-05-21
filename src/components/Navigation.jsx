import {NavLink} from "react-router-dom";
// import {useEffect} from "react";


const Navigation = () => {


    return (
        <nav className="flex items-center text-white justify-between flex-wrap bg-gray-800 p-6">
            <NavLink to="/" aria-label="Accéder à la page d'Accueil">
                <div className="mr-5 hover:bg-gray-700 rounded-md p-2">Accueil</div>
            </NavLink>
            <div class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

                <NavLink to="/NewGame" aria-label="Accéder à la page de nouveax jeux">
                    <div className="mr-5 hover:bg-gray-700 rounded-md p-2">News</div>
                </NavLink>
                <NavLink to="/Gifs" aria-label="Accéder à la page de cadeaux">
                    <div className="mr-5 hover:bg-gray-700 rounded-md p-2">Gifs</div>
                </NavLink>
            </div>
            <NavLink to="/About" aria-label="Accéder à la page A propos">
                <div className="mr-5 hover:bg-gray-700 rounded-md p-2">About</div>
            </NavLink>

        </nav>
    );
};


export default Navigation;
