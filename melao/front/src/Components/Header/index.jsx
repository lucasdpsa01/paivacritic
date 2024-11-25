import { Link } from "react-router-dom"

import "./header.css"

export default function Header() {
    return(
        <div className="header">
            <Link className="link" to='/'><h1>paivacritic</h1></Link>
            <div className="header-links">
                <Link className="link" to='/sobre'>About Us</Link>
                <Link className="link" to='/sugestao'>Sugestões</Link>
            </div>
        </div>
    )
}