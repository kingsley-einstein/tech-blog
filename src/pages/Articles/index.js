import React from "react";
import { Columns, Column, Box } from "../../components";
import * as util from "../../utils";

const Articles = () => {
 const [articles, setArticles] = React.useState([]);
 // const [columns, setColumns] = React.useState([]);

 const loadItems = async () => {
  const a = await util.loadArticles();
  setArticles(a);
  // loadCols();
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
 }, []);

 // React.useEffect(() => {
 //  loadCols();
 //  console.log(columns);
 // });

 return (
  <div className="container" style={{ marginTop: "3em" }}>
   {articles.length > 0 ? (
    <ul>
     {articles.map(article => (
      <li key={article.id}>
       <Box style={{ marginTop: 12 }}>
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
         </div>
        </article>
       </Box>
      </li>
     ))}
    </ul>
   ) : (
    <span>None yet</span>
   )}
  </div>
 );
};

export default Articles;
