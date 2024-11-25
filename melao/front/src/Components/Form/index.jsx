import { useEffect } from "react"
import api from "../../services/api"
import "./form.css"

export default function Form() {
    let sugestoes = []

    async function sugestao() {
        sugestoes = await api.get('/sugestao')
    }

    useEffect(() =>{
        sugestao()
    }, [])

    return(
        <div className="form">
            <h1>Tem alguma recomendação de jogo?</h1>
            <form>
                <input type="text" placeholder="nome" />
                <input type="text" placeholder="sugestão" />
                <button type="butao">Enviar</button>
            </form>
        </div>
    )
}