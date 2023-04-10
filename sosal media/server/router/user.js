const { Router } = require("express");
const {
  createANewAccount,
  findUserById,
  updateUser,
  findAllUser,
  deleteUser,
} = require("../controllers/user");

const userRouterPost = Router();

userRouterPost.post("/users", createANewAccount);
userRouterPost.get("/users/:id", findUserById);
userRouterPost.patch("/users/:id", updateUser);
userRouterPost.delete("/users/:id", deleteUser);
userRouterPost.get("/analytics/users", findAllUser);

module.exports = {
  userRouterPost,
};
