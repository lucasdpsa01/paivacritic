import { jogos } from "../../data/jogos"


export default function CardMain() {
    return(
        <div className="container">
            {jogos.map((jogo) => (
                <div key={jogo.id} className="card">
                    <img src={jogo.images} />
                    <h2>{jogo.nome}</h2>
                    <div className="rating">
                        <p>{jogo.rating}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}