import Register from "../../Register";
import { useState } from "react";

import icon1 from "../../../favicon/icon1.svg"
import img_manutencao from "../../../images/img_manutencao.svg"
import jogoexemplo from "../../../images/jogoexemplo.png"
import recomendacao from "../../../images/recomentacao.png"
import sugestao from "../../../images/sugestao.png"

import "./mainSobre.css"

export default function MainSobre() {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="container-sobre">
            <div className="sobre-titulo">
                <h2>Bem Vindo ao paivacritic!</h2>
                <img src={icon1} alt="logo da pagina" />
            </div>
            <div className="sobre-tools">
                <h2>Como funciona?</h2>
                <p>O crítico e o criador dessa plataforma compartilha os jogos com a nota dele.</p>
                <img src={jogoexemplo} alt="jogo de exemplo" className="jogoexemplo"/>
                <p>Você pode concordar ou discordar!</p>
                <p>Se você gosta muito de jogo e viu que ele não jogou, você pode ir na seção de sugestões e comentare  a mensagem vai diretamento pro criador.</p>
                <img src={sugestao} alt="imagem de sugestão" className="sugestao"/>
                <img src={recomendacao} alt="imagem de recomendação" className="recomendacao"/>
                {/*imagem sugestões*/}
                <p>Atualizações constantes: Todo ano o site será atualizado com novos jogos.</p>
                <img src={img_manutencao} alt="imagem de manutenção" />
            </div>
            <div className="sobre-final">
                <h2>Participe!</h2>
                <p>Sua sugestão é muito importante.</p>
                <p>Junte-se à nossa comunidade.</p>
                <button onClick={() => setIsOpen(true)} className="btn-sobre-register"> Register </button>
            </div>

            <Register
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </div>


    );
}