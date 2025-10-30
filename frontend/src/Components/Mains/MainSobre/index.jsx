import Register from "../../Register/index"
import { useState } from "react"

import icon1 from "../../../favicon/icon1.svg"
import img_manutencao from "../../../images/img_manutencao.svg"
import jogoexemplo from "../../../images/jogoexemplo.png"
import recomendacao from "../../../images/recomentacao.png"

import "./mainSobre.css"

export default function MainSobre() {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="container-sobre">
            <div className="sobre-titulo1">
                <h2>Bem-vindo ao PaivaCritic!</h2>
                <img src={icon1} alt="logo da página" className="logo-sobre" />
            </div>
            <div className="sobre-titulo2">
                <h2>Como funciona?</h2>
                <p className="item1">O <strong>paivacritic</strong> é uma plataforma criada por um apaixonado por jogos, onde cada título recebe uma análise sincera e uma nota baseada em experiência real.</p>
            </div>
            <section className="sobre-titulo3">
                <img src={jogoexemplo} alt="jogo de exemplo" className="jogoexemplo" />
                <p className="item2">
                    Mas aqui, sua voz também conta! Concorde,
                    discorde e compartilhe sua própria visão sobre cada jogo. Viu que um jogo
                    incrível ainda não está no site? Vá até a seção de <strong>Sugestões </strong>
                    e envie sua recomendação — sua mensagem vai direto para o criador.
                </p>
            </section>
            <div className="sobre-titulo4">
                <img src={recomendacao} alt="imagem de recomendação" className="recomendacao" />
                <p className="item3"><strong>Atualizações constantes:</strong> o PaivaCritic está sempre evoluindo! A cada ano, novas análises, categorias e recursos são adicionados para deixar a experiência ainda mais completa.</p>
            </div>
            <h2>O Futuro do PaivaCritic</h2>
            <div className="sobre-final">
                <img src={img_manutencao} alt="imagem de manutenção" className="img_manutencao" />
                <p>
                    Nosso objetivo é transformar o PaivaCritic em uma grande comunidade de jogadores, onde cada crítica, comentário e sugestão ajuda a moldar o futuro do site.
                    Em breve, teremos novas funcionalidades, rankings personalizados, sistema de avaliações dos usuários e muito mais!
                    <strong>Participe, opine e cresça com a gente.</strong>
                </p>
            </div>
            <div>
                <div>
                    <button onClick={() => setIsOpen(true)} className="btn-open-register">
                        Entrar / Registrar
                    </button>

                    <Register
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                    />
                </div>
            </div>
        </div>
    );
}