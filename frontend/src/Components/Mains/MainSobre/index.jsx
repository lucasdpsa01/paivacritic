import "./mainSobre.css"

export default function MainSobre() {
    return (
        <div className="container-sobre">
            <div className="sobre-titulo1">
                <h2 className="sobre-h2">PaivaCritic</h2>
                <img src="https://zvthzrqyqghxxrojjdnf.supabase.co/storage/v1/object/public/tools%20icons/icon2.png" alt="logo da página" className="logo-sobre" />
            </div>
            <div className="sobre-titulo2">
                <h2>Como funciona?</h2>
                <p className="item1">O <strong>paivacritic</strong> é uma plataforma criada por um apaixonado por jogos, onde cada título recebe uma análise sincera e uma nota baseada em experiência real.</p>
            </div>
            <section className="sobre-titulo3">
                <img src="https://zvthzrqyqghxxrojjdnf.supabase.co/storage/v1/object/public/tools%20icons/jogoexemplo.png" alt="jogo de exemplo" className="jogoexemplo" />
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
                <img src="https://zvthzrqyqghxxrojjdnf.supabase.co/storage/v1/object/public/tools%20icons/recomendacao.png" alt="imagem de recomendação" className="recomendacao" />
                <p className="item3">A cada ano, novas análises, categorias e recursos são adicionados para deixar a experiência ainda mais completa.</p>
            </div>
            <h2>O Futuro do PaivaCritic</h2>
            <div className="sobre-final">
                <img src="https://zvthzrqyqghxxrojjdnf.supabase.co/storage/v1/object/public/tools%20icons/img_manutencao.svg" alt="imagem de manutenção" className="img_manutencao" />
                <section className="sobre-titulo-section">
                    <p>
                        Nosso objetivo é transformar o paivaCritic em uma grande comunidade de jogadores, onde cada crítica, comentário e sugestão ajuda a moldar o futuro do site.
                    </p>
                    <p>
                        Em breve, teremos novas funcionalidades, rankings personalizados, sistema de avaliações dos usuários e muito mais!
                    </p>
                </section>
            </div>
            <div className="section-p">
                <p><strong>Participe, opine e cresça com a gente.</strong></p>
            </div>
        </div>
    );
}