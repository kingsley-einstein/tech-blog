import React from "react";
import { Markdown } from "../../components";
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
  <div className="container">
   <Markdown children={content} />
  </div>
 );
};

export default Article;
