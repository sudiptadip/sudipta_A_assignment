const { Router } = require("express");
const {
  getPost,
  createPost,
  getSinglePost,
  updatePost,
  delitePost,
  likePost,
} = require("../controllers/content");

const routerpost = Router();

routerpost.get("/posts", getPost);
// routerpost.get("/posts/search", getPostBySearch);
routerpost.get("/posts/:id", getSinglePost);
routerpost.post("/posts", createPost);
routerpost.patch("/posts/:id", updatePost);
routerpost.delete("/posts/:id", delitePost);
routerpost.patch("/posts/:id/like", likePost);

module.exports = { routerpost };
