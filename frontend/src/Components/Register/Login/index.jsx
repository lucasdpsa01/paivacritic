import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <p>Seja bem vindo de volta!</p>
            <div className="form">
                <label>Email</label>
                <input type="email" />
                <label>Senha</label>
                <input type="password" />
                <button >Entrar</button>
            </div>
        </div>
    )
}
