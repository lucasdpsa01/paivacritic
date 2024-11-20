import GameCard from "../GameCard"
import games from "../../../data/games"

import "./gmain.css"

export default function Gmain() {
    return(
        <div className="game-list">
            {games.map((game) =>(
                <GameCard 
                key={game.id}
                nome={game.nome}
                images={game.images}
                nota={game.nota}
                />
            ))}
        </div>
    )
}