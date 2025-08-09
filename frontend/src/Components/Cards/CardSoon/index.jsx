import { jogos } from "../../../data/jogos";
import "./cardsoon.css"

export default function CardSoon() {
    
    return (
        <div>
            {jogos.map((jogo) => (
                <div key={jogo.id}>
                    <img src={jogo.images} alt="" />
                    <h1>{jogo.nome}</h1>
                    <p>{jogo.rating}</p>
                </div>
            ))}
        </div>
    )
}