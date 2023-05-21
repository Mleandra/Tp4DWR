import Navigation from "../components/Navigation";

const About = () => {
    return (
        <div>
            <Navigation/>
            <div className="flex flex-col items-center justify-center">
                <div className="container mx-auto p-4">
                    <div className="flex flex-col items-center p-3">
                        <h1 className="text-2xl font-bold mb-4">About</h1>
                        <p className="text-l font-semibold">
                            Etudiantes en 4eme année a l'Ecole It d'orleans . Realisé dans le
                                          cadre du TP de react
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col items-center">
                            <img className="w-40 h-40 rounded-full" src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=456&q=80" alt="MEMBRE DU  GROUPE 1"/>
                            <h2 className="text-xl font-bold mt-2">Membre 1</h2>
                            <p className="text-sm">MAKAMTE MEFFEJA LEANDRA GAELLE</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img className="w-40 h-40 rounded-full" src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=456&q=80" alt="MEMBRE DU  GROUPE 2"/>
                            <h2 className="text-xl font-bold mt-2">Membre 2</h2>
                            <p className="text-sm">TSATSOP NZONGOUN MAREILLE DALIVA</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;
