import React from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlight } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import gfm from "remark-gfm";

const renderers = {
  code: ({ language, value }) => (
    <SyntaxHighlight style={atomDark} language={language} children={value} />
  ),
  heading: ({ children, level }) =>
    React.createElement(
      `h${level}`,
      { className: `title is-${level} has-text-weight-bold` },
      children
    )
};

const Md = props => (
  <Markdown plugins={[gfm]} renderers={renderers} {...props} />
);

export default Md;
