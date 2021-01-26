import React from "react";
import { Markdown, ArticleActions } from "../../components";
import * as utils from "../../utils";

const Article = props => {
 const { id } = props.match.params;
 const [content, setContent] = React.useState("");
 const url = `/md/${id}.md`;

 const loadContent = async () => {
  const item = await utils.loadMarkdown(url);
  setContent(item);
 };

 React.useEffect(() => {
  loadContent().then(() => {
   console.log("Loaded Markdown!!!");
  });
 });

 return (
  <div className="container" style={{ marginTop: "2em" }}>
   <div
    className="content is-medium"
    style={{ padding: 5, fontFamily: "Roboto, sans-serif" }}
   >
    <Markdown source={content} />
    <ArticleActions id={id} />
   </div>
  </div>
 );
};

export default Article;
