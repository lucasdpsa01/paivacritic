import linkedin from "../../../images/linkedin.png"
import site from "../../../images/site.png"
import github from "../../../images/github.png"

import "./index.css"

export default function Rest() {
    return(
        <div className="rest">
            <div className="social-media">
                <h3>Follow Me</h3>
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/paiva-sa01/"><img src={linkedin} alt="linkedin"/></a>
                    <a href="https://paivasa.com/"><img src={site} alt="meu site" /></a>
                    <a href="https://github.com/lucasdpsa01"><img src={github} alt="github" /></a>
                </div>
            </div>
            <div className="right-reserved">
                <p>Images from google images</p>
                <p>&copy; 2025. ALL RIGHTS RESERVED</p>
            </div>
        </div>
    )
}
