import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import GameDetails from "./pages/GameDetails"
import NewGame from "./pages/NewGame"
import GiveAway from "./pages/GiveAway"

const App = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"
                    element={<Home/>}/>
                <Route path="About"
                    element={<About/>}/>
                <Route path="NewGame"
                    element={<NewGame/>}/>
                <Route path="Gifs"
                    element={<GiveAway/>}/>
                <Route path="Detail/:id"
                    element={<GameDetails/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
