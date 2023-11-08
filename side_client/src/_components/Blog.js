import React from "react";
import Header from "../header";
import "./posts/posts.css";
import Post1 from "./posts/post1";
import Post2 from "./posts/post2";
import Post3 from "./posts/post3";


export default function Blog() {


    return (
        <div>
            <Header />
            <main>
                <h1 className="page-title">Blog</h1>

                <div className="blog-container">    
                    <div className="blog-posts">
                        <Post1 />
                        <Post2 />
                        <Post3 />
                    </div>
                </div>
            </main>
        </div>
    )
}