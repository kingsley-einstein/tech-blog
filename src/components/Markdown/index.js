import React from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlight } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import gfm from "remark-gfm";

const renderers = {
 code: ({ language, value }) => (
  <SyntaxHighlight style={dracula} language={language} children={value} />
 )
};

const Md = props => (
 <Markdown plugins={[gfm]} renderers={renderers} {...props} />
);

export default Md;
