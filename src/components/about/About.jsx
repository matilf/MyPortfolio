import { useState } from "react";
import "./about.scss";

export default function About() {
    return (
      <div className="about" id="about">
        <div class="card">
          <div class="container">
            <h1>About Me</h1>
            <p>
              Hello! My name is Matias Lopez Ferrando, I am a React front-end
              developer and software development student. My mother tongue is
              Spanish, but I can also speak Portuguese and English{" "}
              <a href="#" target="_blank">
                {" "}
                (Click here to see my EFSET Certificate).{" "}
              </a>
              In my free time I do courses and projects to improve my skills, I
              am constantly trying to progress and add new skills. You can click
              here to see my{" "}
              <a href="https://github.com/matilf" target="_blank">
                {" "}
                GitHub profile.{" "}
              </a>
              Feel free to contact me via{" "}
              <a
                href="https://www.linkedin.com/in/matias-lopez-ferrando/"
                target="_blank"
              >
                LinkedIn
              </a>{" "}
              or email.
            </p>
            <h2>List of tecnologies im experienced with</h2>

            <div className="parent">
              <div class="div1 p">
                {" "}
                <img src=" https://icongr.am/devicon/babel-original.svg?size=93&color=02254b"alt="" />{" "}
                <p>Babel</p>
              </div>
              <div class="div2 p">
                {" "}
                <img src=" https://icongr.am/devicon/bootstrap-plain.svg?size=90&color=02254b" />
                <p>Bootstrap</p>{" "}
              </div>
              <div class="div3 p">
                {" "}
                <img src=" https://icongr.am/devicon/css3-original.svg?size=93&color=02254b" />{" "}
                <p>CSS</p>
              </div>
              <div class="div4 p ">
                {" "}
                <img src=" https://icongr.am/devicon/git-original.svg?size=93&color=02254b" />
                <p>GIT</p>
              </div>
              <div class="div5 p ">
                {" "}
                <img src=" https://icongr.am/devicon/github-original.svg?size=93&color=02254b" />
                <p>Git Hub</p>
              </div>
              <div class="div6 p">
                {" "}
                <img src=" https://icongr.am/devicon/heroku-original.svg?size=93&color=02254b" />{" "}
                <p>Heroku</p>
              </div>
              <div class="div7 p">
                {" "}
                <img src=" https://icongr.am/devicon/html5-original.svg?size=93&color=02254b" />
                <p>HTML</p>{" "}
              </div>
              <div class="div8 p">
                {" "}
                <img src=" https://icongr.am/devicon/javascript-original.svg?size=93&color=02254b" />{" "}
                <p>JS</p>
              </div>
              <div class="div9 p">
                {" "}
                <img src=" https://icongr.am/devicon/jquery-original.svg?size=93&color=02254b" />
                <p>Jquery</p>
              </div>
              <div class="div10 p">
                {" "}
                <img src=" https://icongr.am/devicon/less-plain-wordmark.svg?size=93&color=02254b" />
                <p>Less</p>{" "}
              </div>
              <div class="div11 p">
                {" "}
                <img src=" https://icongr.am/devicon/npm-original-wordmark.svg?size=93&color=02254b" />
                <p>Npm</p>
              </div>
              <div class="div12 p">
                {" "}
                <img src=" https://icongr.am/devicon/react-original.svg?size=93&color=02254b" />
                <p>React</p>
              </div>
              <div class="div13 p">
                {" "}
                <img src="https://icongr.am/devicon/sass-original.svg?size=93&color=02254b" />
                <p>Sass</p>
              </div>
              <div class="div14 p">
                <img src="https://icongr.am/devicon/webpack-plain.svg?size=93&color=02254b" />
                <p>Webpack</p>
              </div>
              <div class="div15 p">
                {" "}
                <img src="assets/router.svg" width="150" height="100" />
                <p>React Router</p>{" "}
              </div>
              <div class="div16 p">
                {" "}
                <img
                  className="redux"
                  src="assets/redux.svg"
                  width="150"
                  height="100"
                />
                <p>Redux</p>{" "}
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