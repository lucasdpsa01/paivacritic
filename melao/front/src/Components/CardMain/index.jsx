import { jogos } from "../../../data/jogos"

<<<<<<<< HEAD:melao/front/src/Components/Cards/CardAll/index.jsx
import "./cardall.css"

export default function CardAll() {
========

export default function CardMain() {
>>>>>>>> main:melao/front/src/Components/CardMain/index.jsx
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