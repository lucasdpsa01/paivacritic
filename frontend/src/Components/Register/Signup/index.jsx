import "../Login/login.css"

export default function Signup() {
    return (
        <div className="login">
            <p>Comece com uma conta do Paivacritic para avaliar jogos!</p>
            <div className="form">
                <label>Nome</label>
                <input type="text"/>
                <label>Email</label>
                <input type="email"/>
                <label>Senha</label>
                <input type="password"/>
                <button>Criar Conta</button>
            </div>
        </div>
    )
}
