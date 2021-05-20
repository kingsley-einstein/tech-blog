const express = require("express");
const fs = require("fs");
const path = require("path");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { StaticRouter } = require("react-router-dom");
const App = require("./src/App");

const app = express();

const port = parseInt(process.env.PORT || "19000");

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  try {
    const context = {};
    const application = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );
    const p = path.join(__dirname, "build/index.html");
    const data = fs.readFileSync(p, "utf8");
    return res.send(
      data.replace(
        `<div id="root"></div>`,
        `<div id="root">${application}</div>`
      )
    );
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
