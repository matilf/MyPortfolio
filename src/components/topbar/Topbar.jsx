import "./topbar.scss";
//import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Matias LF
          </a>

          <div className="itemContainer">
            <a href="https://drive.google.com/file/d/1Qsut4Y5YV36RLalv-G8jIezH8fTJG0fE/view?usp=sharing"  target="_blank"  rel="noreferrer" className="bn">
              Download my resume
            </a>
            
            <a
              className="logito"
              href="https://www.linkedin.com/in/matias-lopez-ferrando/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://icongr.am/devicon/linkedin-plain-wordmark.svg?size=62&color=000000" alt="logo"/>
            </a>{" "}
            <a
              className="logito"
              href="https://github.com/matilf"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://icongr.am/devicon/github-original-wordmark.svg?size=62&color=currentColor" alt="logo"/>
            </a>{" "}
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
