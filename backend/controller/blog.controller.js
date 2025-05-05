const { where } = require("sequelize");
const { blogs } = require("../database/connection");

exports.getAllBlogs = async (req, res) => {
  try {
    const blogsData = await blogs.findAll();
    res.status(200).json({
      message: "All blogs fetched successfully",
      data: blogsData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch blogs",
      error: error.message,
    });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const { title, description, author, image } = req.body;

    const blog = await blogs.create({
      title: title,
      description: description,
      author: author,
      image: image,
    });

    res.status(201).json({
      message: "Blog created successfully",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create blog",
      error: error.message,
    });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, author, image } = req.body;

    const [updateCount] = await blogs.update(
      {
        title: title,
        description: description,
        author: author,
        image: image,
      },
      {
        where: {
          id: id,
        },
      }
    );

    if (updateCount === 0) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    const updatedBlog = await blogs.findByPk(id);

    res.status(200).json({
      message: "Blog updated successfully",
      data: updatedBlog,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update blog",
      error: error.message,
    });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteBlog = await blogs.destroy({
      where: {
        id: id,
      },
    });

    if (deleteBlog === 0) {
      res.status(404).json({
        message: "Blog not found",
      });
    }

    res.status(200).json({
      message: "Blog deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete blog",
      error: error.message,
    });
  }
};

exports.getblog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await blogs.findOne({
      where: {
        id: id,
      },
    });

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    res.status(200).json({
      message: "Blog fetched successfully",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch blog",
      error: error.message,
    });
  }
};
