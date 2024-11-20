import GBackground from "../../components/GBackground";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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