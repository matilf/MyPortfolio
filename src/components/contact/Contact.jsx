import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact me.</h2>
        <p className="contactpar"> I am currently looking for a job as a front-end developer, so if you think we can talk about it feel free to send me a message on <a
                href="https://www.linkedin.com/in/matias-lopez-ferrando/"
                target="_blank"
              >LinkedIn</a>,     <a href="https://github.com/matilf" target="_blank">
              {" "}
              GitHub {" "}
            </a>or  {" "} <a href="mailto:matiaslopezferrando@gmail.com" target="_blank" >E-mail</a>
        
        
        <br/> I am also open to taking freelance jobs, if you have a proposal do not hesitate to contact me.  </p>
   
       
      </div>
    </div>
  );
}
/*

<form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
        <a href="mailto:matiaslopezferrando@gmail.com" >E-mail</a>

        */