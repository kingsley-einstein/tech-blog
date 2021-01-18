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
    <div className="card-content">
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
        Software Engineer @ Leadwallet & Notch | Citizen Of Java Nation | Lover
        Of Anything JavaScript | The Mack-Daddy Of Anything Microservices and
        Serverless | GraphQL Junkie | Algonaut | ML/AI Enthusiast | Budding
        Philosopher
       </p>
      </div>
     </div>
     <div className="content">
      Kingsley Victor is a full-stack software engineer with an untamed passion
      for anything code. He looks like your average nerd but his nerdiness is
      far beyond average and like the universe, is a possible infinity.
     </div>
    </div>
    <footer className="card-footer">
     <a href="https://twitter.com/java_warrior" className="card-footer-item">
      <i className="fab fa-twitter"></i>
     </a>
     <a
      href="https://github.com/kingsley-einstein"
      className="card-footer-item"
     >
      <i className="fab fa-github"></i>
     </a>
     <a href="https://instagram.com/javaprodigy56" className="card-footer-item">
      <i className="fab fa-instagram"></i>
     </a>
    </footer>
   </Card>
  </div>
 </div>
);

export default Home;
