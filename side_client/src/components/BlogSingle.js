import React from "react";
import BlogDetails from "../assets/blog/BlogSingle";
import Header from "../Header";






const BlogSingle = () => {


    return (
        <>
            <Header />
            <main>
                <h1 className="page-title">Blog News</h1>
                <BlogDetails />
            </main>
        </>
    );
}


export default BlogSingle;