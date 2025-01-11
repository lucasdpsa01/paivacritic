import "./mainsobre.css"
import image from "../../../images/elpizo.jpeg"

export default function MainSobre() {
    return (
        <div className="container">
            <div className="card">
                <div className="image">
                    <img src={image} alt="Paiva" />
                </div>
                <div className="texto">
                    <h2>Paiva</h2>
                    <p>
                        Oi! Eu sou o Paiva, um apaixonado por jogos e futuro desenvolvedor de games. 
                        Este site é meu cantinho para compartilhar os jogos que marcaram meu ano — tanto os que adorei quanto aqueles que me deram dor de cabeça! 
                        Um aviso amigável: não levem as notas tão a sério! 😅😅 Alguns jogos ainda estão no meu backlog, e outros mal terminei. 
                        Tenho certeza de que, ao rejogá-los no futuro, minhas opiniões podem mudar (e as notas também).
                    </p>
                </div>
            </div>
        </div>
    );
}