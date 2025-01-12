import CardMain from "../../CardMain"

import "./mainhome.css"

export default function MainHome() {
    return (
        <div className="main-home">
            <div className="main-h1">
                <h1>REVIEW DOS JOGOS QUE JOGUEI EM 2024</h1>
            </div>
            <div className="main-cardmain">
                <CardMain/>
            </div>
        </div>
    );
}