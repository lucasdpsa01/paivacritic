import CardGames from "../../Cards/CardGames"
import CardSoon from "../../Cards/CardSoon"


import "./backgroundmain.css"

export default function BackgroundMain() {
    return(
        
        <div className="background-main">
            <div className="container-backs">
                <CardSoon />
                <CardGames/>
            </div>
        </div>

    )
}