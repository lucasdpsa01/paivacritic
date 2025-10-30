import { useEffect, useState, useRef } from "react"
import { formatDistanceToNow, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import balao from "../../images/balao.png";
import "./comment.css"

import api from "../../services/api";

export default function Comment() {
    const [sugests, setSugests] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(1);
    const inputName = useRef()
    const inputRecomendacao = useRef()

    async function getComment(pageNumber = 1) {
        try {
            const res = await api.get(`/sugestao?page=${pageNumber}&limit=5`)

            if (res.data.length === 0) {
                setHasMore(false);
            } else {
                setSugests(prev => {
                    const existingIds = new Set(prev.map(item => item.id));
                    const newItems = res.data.filter(item => !existingIds.has(item.id));
                    return [...prev, ...newItems];
                });
            }
        } catch (err) {
            console.error("Error ao buscar comentários: ", err);
        }

    }

    async function createComment() {
        await api.post('/sugestao', {
            nome: inputName.current.value,
            recomendacao: inputRecomendacao.current.value
        });
        inputName.current.value = "";
        inputRecomendacao.current.value = "";
        setPage(1);
        getComment(1);
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
                    {sugests.map((sugest) => (
                        <div className="user-comment" key={sugest.id}>
                            <div className="user-titulo">
                                <h3>{sugest.nome}</h3>
                                <p>
                                    <small>
                                        {sugest.createdAt
                                            ? formatDistanceToNow(parseISO(sugest.createdAt), {
                                                addSuffix: true,
                                                locale: ptBR,
                                            })
                                            : "Data não disponível"}
                                    </small>
                                </p>
                            </div>
                            <p>{sugest.recomendacao}</p>
                        </div>
                    ))}
                </div>

                {hasMore && (
                    <button
                        className="ver-mais"
                        onClick={() => {
                            const nextPage = page + 1;
                            setPage(nextPage);
                            getComment(nextPage);
                        }}
                    >
                        Ver mais
                    </button>
                )}
            </div>
        </div >
    )
}