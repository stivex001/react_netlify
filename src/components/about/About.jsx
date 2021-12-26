import "./about.css"
import webdev from "../../images/webdev.jpg"
import award from "../../images/award.png"


const About = () => {
    return (
        <div className="a">
            <div className="aLeft">
                <div className="aCard bg"></div>
                <div className="aCard">
                    <img src={webdev} alt="" className="aImg" />
                </div>
            </div>
            <div className="aRight">
                <div className="aTitle">About Me</div>
                <p className="aSub">
                    It is a long established fact that a reader will be distracted by the readable content.
                </p>
                <p className="aDesc">
                    My name is Adeyemo Stephen, I'm a Frontend Developer based in F.C.T Abuja, Nigeria and I'm very passionate and dedicated to my work. With 1 year+ experience as a professional Frontend Developer, I have acquired the skills necessary to build great and premium websites.
                </p>
                <div className="aAward">
                    <img src={award} alt="" className="aAwardImg" />
                    <div className="aAwardText">
                        <h4 className="aAwardTitle">International Design Awards 2021</h4>
                        <p className="aAwardDesc">
                            Winner of the 2021 NYSCAC/EG Engineering Fellowship in Production Engineering Category, excelled in a selected group of 30 engineers to earn $2000 grant.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
