import axios from "axios";

const ROOT = "https://us-central1-blog-302823.cloudfunctions.net";

const functionPrefix = "tech-blog-api-dev";

const action = ROOT + `/${functionPrefix}-action`;
const addComment = ROOT + `/${functionPrefix}-addComment`;
const countLikes = ROOT + `/${functionPrefix}-countLikes`;
const countReads = ROOT + `/${functionPrefix}-countReads`;
const deleteComment = ROOT + `/${functionPrefix}-deleteComment`;
const findComments = ROOT + `/${functionPrefix}-findComments`;
const isLiked = ROOT + `/${functionPrefix}-isLiked`;
const read = ROOT + `/${functionPrefix}-read`;

const keys = {
 action,
 addComment,
 countLikes,
 countReads,
 deleteComment,
 findComments,
 isLiked,
 read
};

export const invoke = async (type, body = {}) => {
 const res = await axios.post(keys[type], body);

 if (res.status >= 400) throw new Error(res.data.err);

 return Promise.resolve({ ...res.data });
};
