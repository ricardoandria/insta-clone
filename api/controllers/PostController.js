import Post from "../models/Post.js";

export const createPost = async (req, res, next) => {
  const newPost = new Post(req.body);
  try {
    const savePost = await newPost.save();
    res.status(200).json({ savePost });
  } catch (err) {
    next(err);
  }
};

export const updatePost = async (req, res, next) => {
  try {
    const updatePost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatePost);
  } catch (err) {
    next(err);
  }
};
export const deletePost = async (req, res, next) => {
  try {
    const deletePost = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json(deletePost);
  } catch (err) {
    next(err);
  }
};
export const getPost = async (req, res, next) => {
  try {
    const getHotel = await Post.findById(req.params.id);
    res.status(200).json(getHotel);
  } catch (err) {
    next(err);
  }
};

export const getPosts = async (req, res, next) => {
  try {
    const getHotels = await Post.find();
    res.status(200).json(getHotels);
  } catch (err) {
    next(err);
  }
};
