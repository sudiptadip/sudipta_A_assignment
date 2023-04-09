const { default: mongoose } = require("mongoose");
const { PostMessage } = require("../models/content");

const getPost = async (req, res) => {
  try {
    const posts = await PostMessage.find().sort({_id: -1})
    res.status(200).json({data: posts});
  } catch (error) {
    res.status(404).json({ message: 'something went wrong'});
  }
};

// const getPostBySearch = async (req, res) => {
//   const { q } = req.query;
//   try {
//     const title = new RegExp(q, "i");
//     const posts = await PostMessage.find({
//       $or: [{ title }],
//     });
//     res.send({data: posts})
//   } catch (error) {
//     res.send(error.message)
//   }
// };
 
const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage({
    ...post
  });
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: 'faild post request' });
  }
};

const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  const updPost = {
    ...post,
    updated_at: new Date()
  }
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post With this id");

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, updPost, {
    new: true,
  });
  res.send(updatedPost);
};

const delitePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post With this id");

   await PostMessage.findByIdAndDelete(id);
  res.send({ message: "Delete successfuly done" });
};

const likePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post With this id");

  const post = await PostMessage.findById(id);

  const index = post.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    post.likes.push(req.userId);
  } else {
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }

  const updatePost = await PostMessage.findByIdAndUpdate(id, post, {
    new: true,
  });
  res.send(updatePost);
};

const getSinglePost = async (req,res) => {
  const {id} = req.params
  try {
    const post = await PostMessage.findById(id)
    res.status(200).json(post)
  } catch (error) {
    res.status(404).send({message: error.message})
  }
}


module.exports = {
  getPost,
  createPost,
  getSinglePost,
  updatePost,
  delitePost,
  likePost,
};