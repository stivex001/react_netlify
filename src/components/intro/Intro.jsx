import "./intro.css"
import profilenew from "../../images/profile.jpg"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, My name is</h2>
                   <h1 className="i-name">Adeyemo Stephen</h1>
                   <div className="i-title">
                       <div className="i-title-wrapper">
                           <div className="i-title-item">Web Developer</div>
                           <div className="i-title-item">UI/UX Designer</div>
                           <div className="i-title-item">Audio Engineer</div>
                           <div className="i-title-item">Content Creator</div>
                           <div className="i-title-item">Writer</div>
                       </div>
                   </div>
                   <p className="i-desc">
                       I design and develop services for customers of all sizes, specializing in creating stylish,modern websites,web services and online stores.
                   </p>
                </div>
            </div>
            <div className="i-right">
            <div className="iBg"></div>
                <img src={profilenew} alt="" className="iImg" />
            </div>
        </div>
    )
}

export default Intro
