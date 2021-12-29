import React from "react";
import "./about.scss";

export default function About() {
    return (
      <div className="about" id="about">
        <div class="card">
          <div class="container">
            <h1>About Me</h1>
            <p>
              Hello! My name is Matias Lopez Ferrando, I am a React front-end
              developer. My mother tongue is
              Spanish, but I can also speak Portuguese and English{" "}
              <a href="https://www.efset.org/cert/mXkccB" target="_blank"  rel="noreferrer">
                {" "}
                (Click here to see my EFSET Certificate).{" "}
              </a>
              In my free time I do courses and projects to improve my skills, I
              am constantly trying to progress and add new abilities. You can click
              here to see my{" "}
              <a href="https://github.com/matilf" target="_blank"  rel="noreferrer" >
                {" "}
                GitHub profile.{" "}
              </a>
              Feel free to contact me via{" "}
              <a
                href="https://www.linkedin.com/in/devMatiLF/"
                target="_blank"
                rel="noreferrer"
                
              >
                LinkedIn
              </a>{" "}
              or by {" "}
               <a href="mailto:matiaslopezferrando@gmail.com" target="_blank"  rel="noreferrer">E-mail.</a>
            </p>
            <h2>Tecnologies I have experience with.</h2>

            <div className="parent">
              <div class="div1 p">
                {" "}
                <img src=" https://icongr.am/devicon/babel-original.svg?size=93&color=02254b"alt="" />{" "}
                <p className="tecnotitle">Babel</p>
              </div>
              <div class="div2 p">
                {" "}
                <img src=" https://icongr.am/devicon/bootstrap-plain.svg?size=90&color=02254b" alt=""/>
                <p className="tecnotitle">Bootstrap</p>{" "}
              </div>
              <div class="div3 p">
                {" "}
                <img src=" https://icongr.am/devicon/css3-original.svg?size=93&color=02254b" alt=""/>{" "}
                <p className="tecnotitle">CSS</p>
              </div>
              <div class="div4 p ">
                {" "}
                <img src=" https://icongr.am/devicon/git-original.svg?size=93&color=02254b" alt=""/>
                <p className="tecnotitle">GIT</p>
              </div>
              <div class="div5 p ">
                {" "}
                <img src=" https://icongr.am/devicon/github-original.svg?size=93&color=02254b"alt="" />
                <p className="tecnotitle">Git Hub</p>
              </div>
              <div class="div6 p">
                {" "}
                <img src=" https://icongr.am/devicon/heroku-original.svg?size=93&color=02254b" alt="" />{" "}
                <p className="tecnotitle">Heroku</p>
              </div>
              <div class="div7 p">
                {" "}
                <img src=" https://icongr.am/devicon/html5-original.svg?size=93&color=02254b"alt="" />
                <p className="tecnotitle">HTML</p>{" "}
              </div>
              <div class="div8 p">
                {" "}
                <img src=" https://icongr.am/devicon/javascript-original.svg?size=93&color=02254b" alt=""/>{" "}
                <p className="tecnotitle">JS</p>
              </div>
              <div class="div9 p">
                {" "}
                <img src=" https://icongr.am/devicon/jquery-original.svg?size=93&color=02254b" alt=""/>
                <p className="tecnotitle">Jquery</p>
              </div>
              <div class="div10 p">
                {" "}
                <img src=" https://icongr.am/devicon/less-plain-wordmark.svg?size=93&color=02254b" alt=""/>
                <p className="tecnotitle">Less</p>{" "}
              </div>
              <div class="div11 p">
                {" "}
                <img src=" https://icongr.am/devicon/npm-original-wordmark.svg?size=93&color=02254b" alt=""/>
                <p className="tecnotitle">Npm</p>
              </div>
              <div class="div12 p">
                {" "}
                <img src=" https://icongr.am/devicon/react-original.svg?size=93&color=02254b" alt=""/>
                <p className="tecnotitle">React</p>
              </div>
              <div class="div13 p">
                {" "}
                <img src="https://icongr.am/devicon/sass-original.svg?size=93&color=02254b" alt=""/>
                <p className="tecnotitle">Sass</p>
              </div>
              <div class="div14 p">
                <img src="https://icongr.am/devicon/webpack-plain.svg?size=93&color=02254b" alt=""/>
                <p className="tecnotitle">Webpack</p>
              </div>
              <div class="div15 p">
                {" "}
                <img src="assets/router.svg" width="150" height="100"alt=""/>
                <p className="tecnotitle">React Router</p>{" "}
              </div>
              <div class="div16 p">
                {" "}
                <img
                  className="redux"
                  src="assets/redux.svg"
                  width="150"
                  height="100"
                  alt=""
                />
                <p className="tecnotitle">Redux</p>{" "}
              </div>
            </div>

            <a href="#portfolio">
        <img src="assets/down.png" alt="" />
      </a>
          </div>
        </div>
      </div>
    );
  
}
