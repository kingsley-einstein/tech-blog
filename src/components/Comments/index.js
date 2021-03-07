/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import * as api from "../../api";
import Empty from "../NoData";

const Comments = ({ id }) => {
  const [comments, setComments] = React.useState([]);

  const populateCommentsArray = async () => {
    const res = await api.invoke("findComments", { articleId: id });
    setComments(res.data);
  };

  React.useEffect(() => {
    populateCommentsArray().then(() => {
      console.log("Loaded Comments!!!");
    });
  }, [id]);

  return (
    <div className="container" style={{ marginTop: "2em" }}>
      {comments.length > 0 &&
        comments.map(comment => (
          <article className="message is-link" key={comment.id}>
            <div className="message-header">
              <p>{comment.name}</p>
            </div>
            <div className="message-body">{comment.content}</div>
          </article>
        ))}
      {comments.length === 0 && (
        <Empty className="hero is-danger">
          <div className="hero-body">
            <div className="container">
              <div className="icon-text">
                <span className="icon has-text-warning">
                  <i className="fa fa-exclamation-triangle p-1"></i>
                </span>
                <span className="subtitle">No Comments</span>
              </div>
            </div>
          </div>
        </Empty>
      )}
    </div>
  );
};

export default Comments;
