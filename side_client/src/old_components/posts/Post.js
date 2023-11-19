import React from "react";
import Header from "../../header";
import "./posts/posts.css";
import Post1 from "./post1";
import Post2 from "./post2";
import Post3 from "./post3";


export default function Post() {


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