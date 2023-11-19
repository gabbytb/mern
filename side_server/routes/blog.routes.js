module.exports = app => {
    const blogs = require("../controllers/blog.controller.js");
    var router = require("express").Router();


    // Create a New User
    router.post("/manage/create", blogs.create);
       
    // Retrieve all Posts 
    router.get("/manage", blogs.findAllPosts);

    // Retrieve all published Posts
    router.get("/manage/published", blogs.findAllPublished);

    // Retrieve a single post by Id
    router.get("/manage/:id", blogs.findBlogById);

    // Retrieve a single post by Id
    router.put("/manage/update/:id", blogs.updateBlog);

    // Retrieve a single post by Id
    router.delete("/manage/delete/:id", blogs.deleteBlog);

    // Delete all post entries
    router.delete("/manage/delete", blogs.deleteAllBlogs);


    app.use("/v1/api/admin/posts", router);

};