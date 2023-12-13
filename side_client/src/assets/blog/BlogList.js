import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardHeader, CardTitle, CardBody, CardText, CardLink, CardFooter } from "react-bootstrap";
import axios from "axios";







const BlogList = () => {
    
    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        axios.get("http://127.0.0.1:8000/v1/api/admin/posts/manage")
        .then(response => setBlogs(response.data))
        .catch(err => console.log("Error caught while fetching all Blog Posts! Visit BlogList.js Component: ", err));
    }, []);


    return (
        <div className="container px-0 d-flex">
            <div className="d-flex justify-content-start m-0 w-100">
                <div className="">

                    {
                        blogs.map(blog => {
                            return (
                                <Card key={blog._id} className="blog blog-post">
                                    <div className="post-img-wrapper">
                                        <CardImg src={blog.post_img} alt="post image placeholder" />
                                    </div>
                                    <CardHeader className="">
                                        <CardTitle className=""> 
                                            <Link className="text-decoration-none" to={`/blog/${blog._id}`} alt="post-title nav">{blog.post_title}</Link>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardBody className="">
                                        <CardText className="">{blog.post_description}</CardText>
                                        <CardLink className="text-decoration-none text-dark" to={`/blog/${blog._id}`} alt="post link">Read more</CardLink>
                                    </CardBody>
                                    <CardFooter className="">
                                        <CardLink className="text-decoration-none" to={`/blog/${blog.post_author}`} alt="author link">{blog.post_author}</CardLink>
                                    </CardFooter>
                                </Card>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    );
}




export default BlogList;