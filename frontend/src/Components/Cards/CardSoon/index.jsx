import { supabase } from "../../../services/supabase"
import { useEffect, useState, useRef } from "react"

import "./cardsoon.css"

export default function CardSoon() {
    const [jogos, setJogos] = useState([])
    const [loading, setLoading] = useState(true)

    const carroselRef = useRef(null);
    const scroolLeft = () => {
        carroselRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
    const scroolRight = () => {
        carroselRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }

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
                <h2>Em Breve</h2>
                <div className="btns">
                    <button className="btn-esquerda" onClick={scroolLeft}></button>
                    <button className="btn-direita" onClick={scroolRight}></button>
                </div>
            </div>
            <div className="breve-container" ref={carroselRef}>
                {jogos
                    .filter((jogo) => jogo.situacao === "Em breve")
                    .map((jogo) => (
                        <div key={jogo.id} className="brevecard">
                            {jogo.images_url && (
                                <img
                                    src={jogo.images_url}
                                    alt={jogo.nome}
                                    className="jogo-imagem"
                                />
                            )}
                            <h2>{jogo.nome}</h2>
                            <p>{jogo.nota}</p>
                            <h3>{jogo.situacao}</h3>
                        </div>
                    ))}
            </div>
        </div>
    )
}