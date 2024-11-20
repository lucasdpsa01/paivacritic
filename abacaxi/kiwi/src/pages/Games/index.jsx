import Header from "../../components/Header"
import GBackground from "../../components/Games/GBackground"
import "./games.css";


export default function Games() {
    return (
        <div className="games">
            <Header className="header"/>
            <GBackground className="main"/>
            <Footer className="footer"/>
        </div>
    )
}