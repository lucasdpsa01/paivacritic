import { useEffect, useState, useRef } from "react"
import { formatDistanceToNow, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import api from "../../services/api";

import balao from "../../images/balao.png";


import "./comment.css"

export default function Comment() {
    const [sugests, setSugests] = useState([])

    const inputName = useRef()
    const inputRecomendacao = useRef()

    async function getComment() {
        const sugestsFromApi = await api.get('/sugestao')

        setSugests(sugestsFromApi.data)
    }

    async function createComment() {

        await api.post('/sugestao', {
            nome: inputName.current.value,
            recomendacao: inputRecomendacao.current.value
        })

        getComment()
    }

    useEffect(() => {
        getComment()
    }, [])

    return (

        <div className="comment">

            <form className="form">
                <div className="name-icon">
                    <img src={balao} alt="comentario-icon" height={35} />
                    <h2>Deixe um Comentário</h2>
                </div>
                <input name='nome' type="text" placeholder="Nome" ref={inputName} />
                <textarea name="sugestao" id="sugestao" rows="4" ref={inputRecomendacao} placeholder="Algum jogo que você recomenda? comente aqui 👇" />
                <button type='button' onClick={createComment}>Enviar</button>
            </form>


            <div className="container-comment">
                <h2>Comentários</h2>
                <div className="users-comment">
                    {[...sugests].reverse().map((sugest) => (
                        <div className="user-comment" key={sugest.id}>
                            <div className="user-titulo">
                                <h3>{sugest.nome}</h3>
                                <p>
                                    <small>
                                        {sugest.createdAt
                                            ? formatDistanceToNow(parseISO(sugest.createdAt), {
                                                addSuffix: true,
                                                locale: ptBR
                                            })
                                            : "Data não disponível"}
                                    </small>
                                </p>
                            </div>
                            <p>{sugest.recomendacao}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}