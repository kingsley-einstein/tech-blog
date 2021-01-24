/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Box } from "../../components";
import * as util from "../../utils";

const Articles = props => {
 const [articles, setArticles] = React.useState([]);
 const [page, setPage] = React.useState(1);
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

 const loadItems = async () => {
  const a = await util.loadArticles();
  setArticles(a);
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
 }, [page]);

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
        style={{ marginTop: 12, cursor: "pointer" }}
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
            <strong>{article.title}</strong> <small>{article.date}</small>
            <br />
            {article.description}
           </p>
          </div>
          <nav className="level is-mobile">
           <div className="level-left">
            <a className="level-item" aria-label="likes">
             <span className="icon is-small">
              <i className="fa fa-heart"></i>
             </span>
            </a>
            <a className="level-item" aria-label="reads">
             <span className="icon is-small">
              <i className="fa fa-book-reader"></i>
             </span>
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
    <span>None yet</span>
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
