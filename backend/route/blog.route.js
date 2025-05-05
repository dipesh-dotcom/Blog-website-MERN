const {
  createBlog,
  getAllBlogs,
  updateBlog,
  getblog,
  deleteBlog,
} = require("../controller/blog.controller");

const router = require("express").Router();

router.route("/").get(getAllBlogs).post(createBlog);
router.route("/:id").patch(updateBlog).delete(deleteBlog).get(getblog);

module.exports = router;
