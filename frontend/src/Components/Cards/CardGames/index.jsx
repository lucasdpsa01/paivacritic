import { useRef } from "react";
import { jogos } from "../../../data/jogos";
import "./cardgames.css"

export default function CardGames() {
    const carroselRef = useRef(null);
    const scroolLeft = () => {
        carroselRef.current.scrollBy({ left: -500, behavior: "smooth"});
    }
    const scroolRight = () => {
        carroselRef.current.scrollBy({ left: 500, behavior: "smooth"});
    }
    const jogosOrdem = [...jogos].sort((a, b) => a.nome.localeCompare(b.nome));

    return (
        <div className="carrosel">
            <div className="head">
                <h1>Games</h1>
                <div className="btns">
                    <button className="btn-esquerda" onClick={scroolLeft}></button>
                    <button className="btn-direita" onClick={scroolRight}></button>
                </div>
            </div>
            <div className="container" ref={carroselRef}>
                {jogosOrdem
                .filter((jogo) => jogo.status === "Concluido")
                .map((jogo) => (
                    <div key={jogo.id} className="card">
                        <img src={jogo.images} alt={jogo.nome} className="image-games"/>
                        <div className="descricao">
                            <h2 title={jogo.nome} className="nome-jogo">{jogo.nome}</h2>
                            <div className="rating">
                                <p>{jogo.rating}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}