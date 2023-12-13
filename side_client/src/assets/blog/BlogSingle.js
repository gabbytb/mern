import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';






const BlogSingle = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchPost = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/v1/api/admin/posts/manage/${blogId}`);
            setBlog(response.data);
        } catch (error) {
            console.error('Error fetching post:', error);
        } finally {
            setLoading(false);
        }
    };

    fetchPost();
  }, [blogId]);


  if (loading) {
    return <p>Loading...</p>;
  }


  // if (!blog) {
  //   return <p>Post not found!</p>;
  // }

  return (
    <div key={blog.post_Id}>
      <h2>{blog.post_title}</h2>
      <p>{blog.post_description}</p>
      {/* You can display other post details here */}
    </div>
  );
};

export default BlogSingle;