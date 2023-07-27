const Blog = require("../models/blog");
const postBlog = async (req, res) => {
    try {
        const newPost = new Blog(req.body);
        if(!req.body.title || !req.body.text){
          return res.status(200).send({success: false, msg: "kindly fill all the entries."})
        }
        await newPost.save();
        res.status(200).send({success: true, msg:"Blog saved successfully."});
      } catch (error) {
        res.status(200).json({ success: false });
      }
    }

module.exports = {
    postBlog
};