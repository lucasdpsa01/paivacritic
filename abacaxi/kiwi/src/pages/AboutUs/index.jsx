import Header from "../../components/Header";
import Background from "../../components/AboutUs/Background";
import Footer from "../../components/Footer";

import "./about.css"

export default function AboutUs() {
    return(
        <div className="about">
            <Header  className="aheader"/>
            <Background className="amain"/>
            <Footer className="afooter"/>
        </div>
    );
}