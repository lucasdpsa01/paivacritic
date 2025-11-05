import { useState } from "react"

import icon1 from "../../../favicon/icon1.svg"
import img_manutencao from "../../../images/img_manutencao.svg"
import jogoexemplo from "../../../images/jogoexemplo.png"
import recomendacao from "../../../images/recomendacao.png"

import "./mainSobre.css"

export default function MainSobre() {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="container-sobre">
            <div className="sobre-titulo1">
                <h2 className="sobre-h2">PaivaCritic</h2>
                <img src={icon1} alt="logo da página" className="logo-sobre" />
                <div className="linear"></div>
            </div>
            <div className="sobre-titulo2">
                <h2>Como funciona?</h2>
                <p className="item1">O <strong>paivacritic</strong> é uma plataforma criada por um apaixonado por jogos, onde cada título recebe uma análise sincera e uma nota baseada em experiência real.</p>
            </div>
            <section className="sobre-titulo3">
                <img src={jogoexemplo} alt="jogo de exemplo" className="jogoexemplo" />
                <section className="sobre-titulo-section">
                    <p className="item2">
                        Mas aqui, sua voz também conta! Concorde,
                        discorde e compartilhe sua própria visão sobre cada jogo.
                    </p>
                    <p>
                        Viu que um jogo
                        incrível ainda não está no site? Vá até a seção de <strong>Sugestões </strong>
                        e envie sua recomendação — sua mensagem vai direto para o criador.
                    </p>
                    <p>
                        <strong>Atualizações constantes:</strong> o PaivaCritic está sempre evoluindo!
                    </p>
                </section>
            </section>
            <div className="sobre-titulo4">
                <img src={recomendacao} alt="imagem de recomendação" className="recomendacao" />
                <p className="item3">A cada ano, novas análises, categorias e recursos são adicionados para deixar a experiência ainda mais completa.</p>
            </div>
            <h2>O Futuro do PaivaCritic</h2>
            <div className="sobre-final">
                <img src={img_manutencao} alt="imagem de manutenção" className="img_manutencao" />
                <section className="sobre-titulo-section">
                    <p>
                        Nosso objetivo é transformar o paivaCritic em uma grande comunidade de jogadores, onde cada crítica, comentário e sugestão ajuda a moldar o futuro do site.
                    </p>
                    <p>
                        Em breve, teremos novas funcionalidades, rankings personalizados, sistema de avaliações dos usuários e muito mais!
                    </p>
                    <p className="section-p">
                        <strong>Participe, opine e cresça com a gente.</strong>
                    </p>
                </section>
            </div>
        </div>
    );
}