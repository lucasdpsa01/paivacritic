import CardAll from "../../Cards/CardAll";
import CardCast from "../../Cards/CardCast";
import CardMega from "../../Cards/CardMega";

export default function BackgroundMain() {
    return(
        <div>
            <h1>Todos os jogos</h1>
            <div>
                <CardAll/>
            </div>
            <h1>castlevania</h1>
            <div>
                <CardCast/>
            </div>
            <h1>megaman</h1>
            <div>
                <CardMega/>
            </div>

        </div>
    )
}