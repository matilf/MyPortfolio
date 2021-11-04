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
            <a href="/" className="bn">
              Download my resume
            </a>
            <a
              className="logito"
              href="https://www.linkedin.com/in/matias-lopez-ferrando/"
              target="_blank"
            >
              <img src="https://icongr.am/devicon/linkedin-plain-wordmark.svg?size=62&color=000000" />
            </a>{" "}
            <a
              className="logito"
              href="https://github.com/matilf"
              target="_blank"
            >
              <img src="https://icongr.am/devicon/github-original-wordmark.svg?size=62&color=currentColor" />
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
