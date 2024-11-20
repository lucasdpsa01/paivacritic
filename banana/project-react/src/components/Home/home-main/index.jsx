import games from "../../../data/games"
import Home_GameCard from "../home-gamecard"

export default function Home_main() {
    return(
        <div>
            <p>Seria o game card</p>
            <div className="home-main-gamelist">
               {games.map((game) => (
                <Home_GameCard
                    key={game.id}
                    nome={game.nome}
                    images={game.images}
                    rating={game.rating}
                />
               ))}
            </div>
        </div>
    );
};
