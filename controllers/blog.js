const Blog = require("../models/blog");
const postBlog = async (req, res) => {
    try {
        const newPost = new Blog(req.body);
        const savedPost = await newPost.save();
        res.status(200).send({success: true, msg:"Blog saved successfully.", data:savedPost});
      } catch (error) {
        res.status(200).json({ success: false });
      }
    }

module.exports = {
    postBlog
};