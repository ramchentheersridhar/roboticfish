import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
// import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    emailjs
      .sendForm(
        "service_h78w62e",
        "template_98ubm3d",
        formRef.current,
        "user_m0VoSGUTcTVRJC6If7M3R"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.preventDefault();
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 9597785541
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              ramchentheerrs98@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Coimbatore, TN, India.
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              /*style={{backgroundColor: darkMode && "#333"}}*/ type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              /*style={{backgroundColor: darkMode && "#333"}}*/ type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              /*style={{backgroundColor: darkMode && "#333"}}*/ type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              /*style={{backgroundColor: darkMode && "#333"}}*/ rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && alert("Message Delivered! Thanks")}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
