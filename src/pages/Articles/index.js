/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Box, Empty } from "../../components";
import * as util from "../../utils";
import * as api from "../../api";

const Articles = props => {
  const [articles, setArticles] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [likes, setLikes] = React.useState([]);
  const [reads, setReads] = React.useState([]);
  // const [columns, setColumns] = React.useState([]);

  const incrementPage = () => {
    if (
      !articles
        .slice((page - 1) * 10, page * 10)
        .find(v => articles[articles.length - 1].id === v.id)
    )
      setPage(page + 1);
  };

  const decrementPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const countLikes = async () => {
    for (const article of articles) {
      const res = await api.invoke("countLikes", { articleId: article.id });
      console.log(res.data, "======", res);
      setLikes([...likes, { [article.id]: res.data }]);
      // setLikes({ ...likes, [article.id]: res.data });
    }
  };

  const countReads = async () => {
    for (const article of articles) {
      const res = await api.invoke("countReads", { articleId: article.id });
      console.log(res.data, "++++++", res);
      setReads([...reads, { [article.id]: res.data }]);
      // setReads({ ...reads, [article.id]: res.data });
    }
  };

  const loadItems = async () => {
    const a = await util.loadArticles();
    setArticles(a);

    // await countLikes();
    // loadCols();
  };

  const navigateToArticlePage = id => {
    return props.history.push(`/article/${id}`);
  };

  // const loadCols = () => {
  //  const cols = [];
  //  for (let i = 0; i < articles.length / 4; i++)
  //   cols.push(i);

  //  setColumns(cols);
  // };

  React.useEffect(() => {
    loadItems().then(() => {
      console.log("Articles Loaded!!!");
    });

    // countLikes().then(() => {
    //  console.log("Data Received!!!");
    // });

    // countReads().then(() => {
    //  console.log("Data Received!!!");
  }, []);

  React.useEffect(() => {
    countLikes().then(() => {
      console.log("Data Received!!!");
    });
  }, [articles]);

  React.useEffect(() => {
    countReads().then(() => {
      console.log("Data Received!!!");
    });
  }, [articles]);

  // React.useEffect(() => {
  //  loadCols();
  //  console.log(columns);
  // });

  return (
    <div className="container" style={{ marginTop: "3em" }}>
      {articles.length > 0 ? (
        <ul>
          {articles.slice((page - 1) * 10, page * 10).map(article => (
            <li key={article.id}>
              <Box
                style={{
                  marginTop: 12,
                  cursor: "pointer",
                  fontFamily: "Montserrat, sans-serif"
                }}
                onClick={() => navigateToArticlePage(article.id)}
              >
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-64x64">
                      <img src={article.image} alt={article.title} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>{article.title}</strong>{" "}
                        <small>{article.date}</small>
                        <br />
                        {article.description}
                      </p>
                    </div>
                    <nav className="level is-mobile">
                      <div className="level-left">
                        <a
                          className="button is-white level-item"
                          aria-label="likes"
                        >
                          <span className="icon is-small">
                            <i className="fa fa-thumbs-up"></i>
                          </span>
                          <strong>
                            {
                              likes
                                .filter(
                                  like =>
                                    Object.keys(like).includes(article.id) ||
                                    !!like[article.id]
                                )
                                .map(like => like[article.id])[0]
                            }
                          </strong>
                        </a>
                        {/* <a className="level-item" aria-label="dislikes">
             <span className="icon is-small">
              <i className="fa fa-thumbs-down"></i>
             </span>
            </a> */}
                        <a
                          className="button is-white level-item"
                          aria-label="reads"
                        >
                          <span className="icon is-small">
                            <i className="fa fa-book-reader"></i>
                          </span>
                          <strong>
                            {
                              reads
                                .filter(
                                  read =>
                                    Object.keys(read).includes(article.id) ||
                                    !!read[article.id]
                                )
                                .map(read => read[article.id])[0]
                            }
                          </strong>
                        </a>
                      </div>
                    </nav>
                  </div>
                </article>
              </Box>
            </li>
          ))}
        </ul>
      ) : (
        <Empty className="hero is-danger">
          <div className="hero-body">
            <div className="container">
              <div className="icon-text">
                <span className="icon has-text-warning">
                  <i className="fa fa-exclamation-triangle p-1"></i>
                </span>
                <span className="subtitle">Nothing To Show</span>
              </div>
            </div>
          </div>
        </Empty>
      )}
      <div style={{ marginTop: "3em" }}>
        <nav
          className="pagination is-small"
          role="navigation"
          aria-label="pagination"
        >
          <a
            className="pagination-previous is-primary"
            title="Previous"
            disabled={!(page > 1)}
            onClick={decrementPage}
          >
            <i className="fa fa-minus"></i>
          </a>
          <a
            className="pagination-next is-primary"
            title="Next"
            disabled={
              !!articles
                .slice((page - 1) * 10, page * 10)
                .find(v => articles[articles.length - 1].id === v.id)
            }
            onClick={incrementPage}
          >
            <i className="fa fa-plus"></i>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Articles;
