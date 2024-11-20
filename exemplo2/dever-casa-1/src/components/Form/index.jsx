import "./form.css"

export default function Form() {
    return(
        <div className="login">
            <h1>Login</h1>
            <input type="text" placeholder="Usuário"/>
            <input type="password" placeholder="Senha"/>
            <button>Próxima</button>
        </div>
    )
}