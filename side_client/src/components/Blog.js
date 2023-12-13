import React from "react";
import BlogList from "../assets/blog/BlogList";
import Header from "../Header";






const Blog = () => {

    return (
        <>
            <Header />
            <main>
                <h1 className="page-title">Blog News</h1>
                <BlogList />
            </main>
        </>
    );
}

export default Blog;