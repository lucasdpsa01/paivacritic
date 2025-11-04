import Tema from "../Tema"

import "./nav.css"

export default function Nav({ navOpen, navClose }) {
    if (!navOpen) return null

    return(
        <div className="navbar">
            <h2>Sobre</h2>
            <h2>Sugestões</h2>
            <Tema />
        </div>
    )
}