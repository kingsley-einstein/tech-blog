import React from "react";
import { Card } from "../../components";
import "./index.css";

const Home = props => (
  <div className="container">
    <div className="marginize card-holder">
      <Card>
        <header className="card-header">
          <p className="card-header-icon">
            <i className="fa fa-code"></i>
          </p>
        </header>
        <div
          className="card-content"
          style={{ fontFamily: "Roboto, sans-serif " }}
        >
          <div className="media">
            <div className="media-left">
              <figure className="image is-128x128">
                <img
                  src="/img/kingsley.png"
                  className="is-rounded"
                  width="300"
                  height="300"
                  alt="Kingsley"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Kingsley Victor</p>
              <p className="subtitle is-6">
                Software Engineer @ Leadwallet & DeSpace Ecosystem | Citizen Of
                Java Nation | Lover Of Anything JavaScript | The Mack-Daddy Of
                Microservices and Serverless | Potential GraphQL Junkie |
                Algonaut | ML/AI Enthusiast | Budding Philosopher
              </p>
            </div>
          </div>
          <div className="content">
            Kingsley Victor is a full-stack software engineer with an untamed
            passion for anything code. He looks like your average nerd but his
            nerdiness is far beyond average and like the universe, is a possible
            infinity. This dude is proficient in Java, JavaScript & Typescript
            and would likely add a new tech to his repertoire this year{" "}
            {new Date().getFullYear()}. Do not get too bedazzled, he's an idiot.
            Scratch that, he's a mega-idiot. <br />
            <p>
              He's created this blog to help other developers who are willing to
              learn or relearn and to also sharpen his writing skills and also
              aid his own learning. It is not necessary you make this blog your
              preferred one but c'mon you've got to admit this is one heck of a
              blog.
            </p>
            <p>
              <strong>PS:</strong> He loves philosophy. Feel free to check him
              out via any of the links below.
            </p>
          </div>
        </div>
        <footer className="card-footer">
          <a
            href="https://twitter.com/java_warrior"
            className="card-footer-item"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a
            href="https://github.com/kingsley-einstein"
            className="card-footer-item"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://instagram.com/javaprodigy56"
            className="card-footer-item"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </footer>
      </Card>
    </div>
    {/* <div className="bottom-flex">
   <Button className="button bottom-button" href="/">
    <span>
     Articles
    </span>
    <i className="fa fa-arrow-right" style={{ padding: 8 }}></i>
   </Button>
  </div> */}
  </div>
);

export default Home;
