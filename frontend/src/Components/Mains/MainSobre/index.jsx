import Register from "../../Register";
import { useState } from "react";
import "./index.css"

export default function MainSobre() {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="container-sobre">
            <div className="sobre-titulo">
                <h1>Bem Vindo ao paivacritic!</h1>
                {/*imagem do site*/}
            </div>
            <div className="sobre-tools">
                <h2>Como funciona?</h2>
                <p>O crítico e o criador dessa plataforma compartilha os jogos com a nota dele.</p>
                {/*imagem jogo*/}
                <p>Você pode concordar ou discordar!</p>
                {/*imagem concorda e discorda*/}
                <p>Se você gosta muito de jogo e viu que ele não jogou, você pode ir na seção de sugestões e comentare  a mensagem vai diretamento pro criador.</p>
                {/*imagem sugestões*/}
                <p>Atualizações constantes: Todo ano o site será atualizado com novos jogos.</p>
                {/*imagem manutenção*/}
            </div>
            <div className="sobre-final">
                <h2>Participe!</h2>
                <p>Sua sugestão é muito importante.</p>
                <p>Junte-se à nossa comunidade.</p>
                <button onClick={() => setIsOpen(true)}> Register </button>
            </div>

            <Register
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </div>


    );
}