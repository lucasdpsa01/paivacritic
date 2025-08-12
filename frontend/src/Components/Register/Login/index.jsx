import "./login.css"

export default function Login() {
    return (
        <div style={styles.login} className="login">
            <p>Seja bem vindo de volta!</p>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button >Entrar</button>
        </div>
    )
}
const styles = {
    login: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    }
}