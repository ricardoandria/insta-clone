import User from "../models/User.js";

export const updateUser = async (req, res, next) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).send("user has been deleted");
  } catch (err) {
    next(err);
  }
};

//follow user

export const followUser = async (req, res, next) => {
  if (req.body.userId !== req.params.id) {
    const user = await User.findById(req.params.id);
    const currentId = await User.findById(req.body.userId);

    if (!user.followers.includes(req.body.userId)) {
      await user.updateOne({ $push: { followers: req.body.userId } });
      await currentId.updateOne({ $push: { followins: req.params.id } });

      res.status(200).json("user has been followed");
    } else {
      res.status(403).json("you have been follow him");
    }
  } else {
    console.log("you cant follow yourself");
  }
};

//unfollow user

export const unfollows = async (req, res, next) => {
  if (req.body.userId !== req.params.id) {
    const user = await User.findById(req.params.id);
    const currentId = await User.findById(req.body.userId);

    if (user.followers.includes(req.body.userId)) {
      await user.updateOne({ $pull: { followers: req.body.userId } });
      await currentId.updateOne({ $pull: { followins: req.params.id } });

      res.status(200).json("user has been unfollowed");
    } else {
      res.status(403).json("you have been unfollow him");
    }
  } else {
    console.log("you cant unfollow yourself");
  }
};
