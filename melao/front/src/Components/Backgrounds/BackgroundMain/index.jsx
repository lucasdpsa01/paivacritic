import CardAll from "../../Cards/CardAll";
import CardCast from "../../Cards/CardCast";
import CardMega from "../../Cards/CardMega";

export default function BackgroundMain() {
    return(
        <div className="background-main">
            <div>
                <h1>Todos os jogos</h1>
                <div>
                    <CardAll/>
                </div>
            </div>
            <div>
                <h1>Castlevania</h1>
                <div>
                    <CardCast/>
                </div>
            </div>
            <div>
                <h1>Megaman</h1>
                <div>
                    <CardMega/>
                </div>
            </div>

        </div>
    )
}