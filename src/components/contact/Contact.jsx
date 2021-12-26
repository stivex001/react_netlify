import "./contact.css"
import Phone from "../../images/phone.png"
import Email from "../../images/email.png"
import Address from "../../images/address.jpg"
import { useRef, useState } from "react"
import emailjs from 'emailjs-com';
import { useContext } from "react/cjs/react.development"
import { ThemeContext } from "../../context"

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_67a4q6q', 
        'template_2wd0x4r',
         formRef.current, 'user_npLt82gLJpJaPm1zmKgFc')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }

    return (
        <div className="c">
          <div className="c-bg"></div>
          <div className="c-wrapper">
              <div className="c-left">
                  <h1 className="c-title">let's discuss your project</h1>
                  <div className="c-info">
                  <div className="c-info-item">
                      <img src={Phone} alt="" className="c-icon" />
                      +2348162174754
                  </div>
                  <div className="c-info-item">
                      <img src={Address} alt="" className="c-icon" />
                      Federal Housing, F.C.T Abuja, Nigeria
                  </div>
                  <div className="c-info-item">
                      <img src={Email} alt="" className="c-icon" />
                      stephenadeyemo@gmail.com
                  </div>
                  </div>
              </div>
              <div className="c-right">
                  <p className="c-desc">
                      <b>What's your story?</b> Get in touch. Always freelancing if the right project comes along me.
                  </p>
                  <form ref={formRef} onSubmit={handleSubmit}>
                     <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                     <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                     <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                     <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message"></textarea>
                     <button>Submit</button>
                     {done && "Thank you..."}
                  </form>
              </div>
          </div>
        </div>
    )
}

export default Contact
