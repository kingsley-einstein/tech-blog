import articles from "../assets/articles";

const load = () => {
 return Promise.resolve(articles.data);
};

export default load;
