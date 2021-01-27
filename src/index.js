import React from "react";
import ReactDOM from "react-dom";
import { v4 as uuid } from "uuid";
import CodersRankSkillsChart from "@codersrank/skills-chart";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

window.customElements.define("codersrank-skills-chart", CodersRankSkillsChart);
// window.customElements.define("codersrank-summary", CodersRankSummary);

if (!localStorage.getItem("Client_Id")) {
 const Client_Id = uuid();
 localStorage.setItem("Client_Id", Client_Id);
}

ReactDOM.render(
 <React.StrictMode>
  <App />
 </React.StrictMode>,
 document.getElementById("root")
);

console.log(`App is running in ${process.env.NODE_ENV} mode`);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
if (process.env.NODE_ENV === "production") {
 serviceWorkerRegistration.register();
} else {
 serviceWorkerRegistration.unregister();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
