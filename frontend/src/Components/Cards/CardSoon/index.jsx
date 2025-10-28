import { supabase } from "../../../services/supabase"
import { useEffect, useState, useRef } from "react"

import "./cardsoon.css"

export default function CardSoon() {
    const [jogos, setJogos] = useState([])
    const [loading, setLoading] = useState(true)

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

    const jogosEmBreve = jogos.filter((j) => j.situacao === "Em breve");

    return (
        <div className="carrosel">
            <div className="head">
                <h2>Em Breve</h2>
            </div>
            <div className="slider" style={{ "--width": "200.13px", "--height": "261px" }}>
                <div className="breve-container" style={{ "--quantity": jogosEmBreve.length }}>
                    {jogosEmBreve
                        .map((jogo, index) => (
                            <div key={jogo.id} className="brevecard" style={{ "--position": index + 1 }}>
                                {jogo.images_url && (
                                    <img
                                        src={jogo.images_url}
                                        alt={jogo.nome}
                                        className="jogo-imagem"
                                    />
                                )}
                                <h3 className="nome-jogo">{jogo.nome}</h3>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}