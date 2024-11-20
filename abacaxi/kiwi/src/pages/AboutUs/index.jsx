import Header from "../../components/Header";
import ABackground from "../../components/ABackground";
import Footer from "../../components/Footer";

import "./about.css"

export default function AboutUs() {
    return(
        <div className="about">
            <Header  className="aheader"/>
            <ABackground className="amain"/>
            <Footer className="afooter"/>
        </div>
    );
}