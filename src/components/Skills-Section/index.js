import React from "react";
import Card from "../Card";
import Column from "../Column";
import Columns from "../Columns";
import "./index.css";

const SkillsSection = () => {
  const languages = [
    {
      name: "Java",
      image: "/img/java.svg"
    },
    {
      name: "Javascript",
      image: "/img/javascript.svg"
    },
    {
      name: "Typescript",
      image: "/img/typescript.svg"
    }
  ];

  const frameworks = [
    {
      name: "Spring/Spring Boot",
      image: "/img/spring-3.svg"
    },
    {
      name: "Express.Js",
      image: "/img/express-109.svg"
    },
    {
      name: "Angular",
      image: "/img/angular-icon-1.svg"
    },
    {
      name: "React.js",
      image: "/img/react-2.svg"
    }
  ];

  const devops = [
    {
      name: "Docker",
      image: "/img/docker.svg"
    },
    {
      name: "Kubernetes",
      image: "/img/kubernets.svg"
    },
    {
      name: "Jenkins",
      image: "/img/jenkins-1.svg"
    },
    {
      name: "Travis",
      image: "/img/travis-ci.svg"
    }
  ];

  const patterns = [
    {
      name: "Serverless",
      image: "/img/serveless.svg"
    },
    {
      name: "Microservices",
      image: "/img/computer.svg"
    },
    {
      name: "GraphQL",
      image: "/img/graphql.svg"
    }
  ];

  return (
    <div>
      <section className="section is-medium">
        <div className="container">
          <h4 className="title">Technologies</h4>
          <div className="block">
            <h5 className="subtitle">Languages</h5>
            <Columns>
              {languages.map(lang => (
                <Column className="column" key={lang.name}>
                  <Card className="card skill-card">
                    <div className="card-image">
                      <figure className="image is-square">
                        <img src={lang.image} alt={lang.name} height="100px" />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content" style={{ textAlign: "center" }}>
                        <h5>{lang.name}</h5>
                      </div>
                    </div>
                  </Card>
                </Column>
              ))}
            </Columns>
          </div>
          <div className="block">
            <h5 className="subtitle">Frameworks/Libraries</h5>
            <Columns>
              {frameworks.map(framework => (
                <Column className="column" key={framework.name}>
                  <Card className="card skill-card">
                    <div className="card-image">
                      <figure className="image is-square">
                        <img src={framework.image} alt={framework.name} />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content" style={{ textAlign: "center" }}>
                        <h5>{framework.name}</h5>
                      </div>
                    </div>
                  </Card>
                </Column>
              ))}
            </Columns>
          </div>
          <div className="block">
            <h5 className="subtitle">DevOps</h5>
            <Columns>
              {devops.map(ops => (
                <Column className="column" key={ops.name}>
                  <Card className="card skill-card">
                    <div className="card-image">
                      <figure className="image is-square">
                        <img src={ops.image} alt={ops.name} />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content" style={{ textAlign: "center" }}>
                        <h5>{ops.name}</h5>
                      </div>
                    </div>
                  </Card>
                </Column>
              ))}
            </Columns>
          </div>
          <div className="block">
            <h5 className="subtitle">Patterns/Architecture</h5>
            <Columns>
              {patterns.map(pattern => (
                <Column className="column" key={pattern.name}>
                  <Card className="card skill-card">
                    <div className="card-image">
                      <figure className="image is-square">
                        <img src={pattern.image} alt={pattern.name} />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content" style={{ textAlign: "center" }}>
                        <h5>{pattern.name}</h5>
                      </div>
                    </div>
                  </Card>
                </Column>
              ))}
            </Columns>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsSection;
