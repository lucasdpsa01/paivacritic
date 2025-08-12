export default function Signup() {
    return(
        <div style={styles.signup}>
            <p>Comece com uma conta do Paivacritic para avaliar jogos!</p>
            <input style={styles.input} type="text" placeholder="Nome" />
            <input style={styles.input} type="email" placeholder="Email" />
            <input style={styles.input} type="password" placeholder="Senha"/>
            <button>Criar Conta</button>
        </div>
    )
}
const styles = {
    signup: {
        display: "flex",
        flexDirection: "column",
        gap: "10px"
    },
    input: {
        height: "35px",
    }
}