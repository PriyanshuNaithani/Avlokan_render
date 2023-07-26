const express = require('express');
const blogController = require("../controllers/blog");

const router = express.Router();

router.post("/postBlog",blogController.postBlog);

module.exports = router;