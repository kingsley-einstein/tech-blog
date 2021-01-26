/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const ArticleActions = ({ id }) => {
 const like = () => {
  console.log(id);
 };

 const dislike = () => {
  console.log(id);
 };
 return (
  <div className="container">
   <div className="has-text-left">
    <a onClick={like} className="button is-white p-1">
     <i className="fa fa-thumbs-up"></i>
    </a>
    {/* <a onClick={dislike} className="button is-white p-1">
     <i className="fa fa-thumbs-down"></i>
    </a> */}
    <a className="button is-white p-1">
     <i className="fa fa-comment"></i>
    </a>
   </div>
  </div>
 );
};

export default ArticleActions;
