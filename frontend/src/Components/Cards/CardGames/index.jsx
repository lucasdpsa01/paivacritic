import { supabase } from "../../../services/supabase"
import { useEffect, useState, useRef } from "react"

import "./cardgames.css"

export default function CardGames() {
    const [jogos, setJogos] = useState([])
    const [loading, setLoading] = useState(true)

    const carroselRef = useRef(null);
    const scroolLeft = () => {
        carroselRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
    const scroolRight = () => {
        carroselRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }

    const JogosConcluido = jogos.filter((j) => j.situacao !== "Em breve");

    useEffect(() => {
        async function fetchJogos() {
            const { data, error } = await supabase
                .from("jogos")
                .select("*")

            if (error) {
                console.error("Erro ao buscar os jogos", error)
                setJogos([])
            } else {
                setJogos(data)
            }
            setLoading(false)
        }


        fetchJogos();
    }, []);

    if (loading) return <p>Carregando Jogos....</p>

    return (
        <div className="carrosel">
            <div className="head">
                <h2 className="head-games">Games</h2>
                <div className="btns">
                    <button className="btn-esquerda" onClick={scroolLeft}></button>
                    <button className="btn-direita" onClick={scroolRight}></button>
                </div>
            </div>
            <div className="container" ref={carroselRef}>
                {JogosConcluido
                    .map((jogo) => (
                        <div key={jogo.id} className="gamescard">
                            {jogo.images_url && (
                                <img
                                    src={jogo.images_url}
                                    alt={jogo.nome}
                                    className="jogo-imagem"
                                />
                            )}
                            <h3 className="nome-jogo">{jogo.nome}</h3>
                            <div className="rating-jogo">
                                <p
                                    id="nota-jogo"
                                    style={{
                                        backgroundColor:
                                            jogo.nota >= 90
                                                ? "#00CE7A"
                                                : jogo.nota >= 70
                                                    ? "#9EFF00"
                                                    : jogo.nota >= 40
                                                        ? "#FFBD3F"
                                                        : "#FF4D4D",
                                        color: "black" // texto preto pra contraste no verde claro
                                    }}
                                >{jogo.nota}</p>
                                <p>{jogo.situacao}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}