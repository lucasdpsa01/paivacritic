import { jogos } from "../../data/jogos"

import "./casacard.css"

export default function CasaCard() {
    return(
        <div>
            {jogos.map((jogo) => (
                <div key={jogo.id} className="card">
                    <img src={jogo.images} />
                    <p>{jogo.nome}</p>
                    <p>{jogo.rating}</p>
                </div>
            ))}
        </div>
    )
}