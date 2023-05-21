import {NavLink} from "react-router-dom";
// import {useEffect} from "react";


const Navigation = () => {


    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <NavLink to="/">
                <div>Accueil</div>
            </NavLink>

            <NavLink to="/NewGame">
                <div>News</div>
            </NavLink>
            <NavLink to="/Gifs">
                <div>Gifs</div>
            </NavLink>
            <NavLink to="/About">
                <div>About</div>
            </NavLink>

        </nav>
    );
};


export default Navigation;
