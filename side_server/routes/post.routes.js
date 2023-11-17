module.exports = app => {
    const posts = require("../controllers/post.controller.js");
    var router = require("express").Router();


    // Create a New User
    router.post("/admin/posts/manage/create", posts.createPost);
    
    // Retrieve all Users 
    router.get("/admin/posts/manage", posts.findAllPosts);

    // Retrieve all active Users
    router.get("/admin/posts/manage/active", posts.findAllActivePosts);

    // Retrieve a single user by Id
    router.get("/admin/posts/manage/:id", posts.findPostById);

    // Retrieve a single user by Id
    router.put("/admin/posts/manage/update/:id", posts.updatePost);

    // Retrieve a single user by Id
    router.delete("/admin/posts/manage/delete/:id", posts.deletePostById);

    // Delete all user entries
    router.delete("/admin/posts/manage/delete", posts.deleteAllPosts);

    app.use("/v1/api", router);

};