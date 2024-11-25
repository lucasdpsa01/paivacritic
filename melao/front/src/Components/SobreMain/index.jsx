import "./sobremain.css"
import image from "../../images/elpizo.jpeg"

export default function SobreMain() {
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
       /* <div className="container-sobre">
            <div className="eu">
                <img src={image} alt="elpizo" />
                <div className="eu-hs">
                    <h1>Hunter2801</h1>
                    <h3>Paiva de Sá</h3>
                </div>
            </div>
            <div className="eu-p">
                <p>
                    Oi! Eu sou o Paiva, um apaixonado por jogos e futuro desenvolvedor de games. Este site é meu cantinho para compartilhar os jogos que marcaram meu ano — tanto os que adorei quanto aqueles que me deram dor de cabeça!
                </p>
            
                <p>
                    Um aviso amigável: não levem as notas tão a sério! 😅😅 Alguns jogos ainda estão no meu backlog, e outros mal terminei. Tenho certeza de que, ao rejogá-los no futuro, minhas opiniões podem mudar (e as notas também).
                </p>
                <p>
                    Além de explorar mundos virtuais, também sou desenvolvedor Web em constante aprendizado. Este site foi criado usando <strong>React.js</strong> no Frontend e <strong>Node.js</strong> no Backend — tecnologias que estou sempre buscando dominar cada vez mais.
                </p>
            </div>
            <div className="eu-ul">
                <ul>
                    <li><strong>Steam:</strong> Hunter2801</li>
                    <li><strong>GitHub:</strong> <a href="https://github.com/lucasdpsa01" target="_blank">lucasdpsa01</a></li>
                    <li><strong>Email:</strong> <a href="mailto:lucasdsa2801@gmail.com">lucasdsa2801@gmail.com</a></li>
                </ul>
            </div>
            
        </div>*/
