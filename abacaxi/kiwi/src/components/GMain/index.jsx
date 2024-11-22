import jogos from "../../data/jogos"
import "./gmain.css"

export default function Gmain() {
    return(
        <div className="g-main">
            <h1>REVIEW DOS JOGOS QUE JOGUEI EM 2024</h1>
            {jogos.map((jogo) =>(
                <div key={jogo.id}>
                    <img src={jogo.images} alt={jogo.name} />
                    <p>Nome: {jogo.name}</p>
                    <p>Nota: {jogo.rating}</p>
                </div>
            ))}
        </div>
    )
}