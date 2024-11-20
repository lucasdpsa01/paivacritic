export default function Sform(){

    const users = [
        {
            id: '123456abcd',
            name: 'Lucas Paiva',
            sugestion: 'joga Dark souls 3'
        }, 
        {
            id: '78910efgh',
            name: 'Daniel de Sá',
            sugestion: 'joga Elden Ring'
        },
    ]


    return(
        <div className="container">
            <div className="form">
                <h1>Tem alguma recomendação de jogo?</h1>
                <form>
                    <input type="text" placeholder="nome"/>
                    <input type="text" placeholder="sugestão"/>
                    <button type="butao">Enviar</button>
                </form>
            </div>
            
            {users.map((user) =>(
                <div key={user.id}>
                    <p>Nome: {user.name}</p>
                    <p>Sugestão: {user.sugestion}</p>
                </div>
            ))}
        </div>
    )
}