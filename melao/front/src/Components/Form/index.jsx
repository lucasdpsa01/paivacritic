import "./form.css"

export default function Form() {
    return(
        <div className="form">
            <input type="text" className="Nome" placeholder="nome"/>
            <input type="text" className="formsugestion" placeholder="sugestao"/>
            <button>Enviar</button>
        </div>
    )
}