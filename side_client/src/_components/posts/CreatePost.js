import React, { useState } from 'react';
import axios from 'axios';
import Header from '../../header';








const CreatePost = () => {
       
    const [post, setPost] = useState({ 
        page_title: '', 
        page_description: '', 
        author: '', 
        tags: '', 
        categories: '', 
        isActive: false 
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    

    function handleOnKeyUp(e) {
        console.clear();
        console.log('Post Title: ', post.page_title)
        console.log('Page Description: ', post.page_description)
        console.log('Author: ', post.author);
        console.log('Tags: ', post.tags);
        console.log('Categories: ', post.categories);
        console.log('Post published? ', post.isActive)
    };


    function handleChange(e) {
        const { name, value } = e.target;
        setPost({
            ...post,
            [name]: value
        });
    };


    function handleSubmit(e) {
        e.preventDefault();

        axios.post('https://127.0.0.1:8000/v1/api/admin/posts/manage/create', post)
        // .then((response) => {
        //     if (response.data.isActive === false) {
                
        //     }
        // })
        .then((response) => { 
            console.log('Creating New Post: ', response.data)
        })
        .catch((error) => {
            console.log('Error encountered while saving New Post: ', error);
        })
    }

    return (
        <div className="Registration">
            <Header />
            <main>
                <h1 className="page-title">Create Article</h1>

                <div className='d-flex container justify-content-center'>
                    <div className='row flex-column mx-auto' style={{width:360}}>

                        {/* <div className={`alert valhalla ${inputValidation ? 'alert-shown' : 'alert-hidden'}`}>
                            <h2 className='alert alert-danger'>{inputValidation}</h2>
                        </div> 
                        <div className={`alert winter ${emailExistsMsg ? 'alert-shown' : 'alert-hidden'}`}>
                            <h2 className='alert alert-danger'>{emailExistsMsg}</h2>
                        </div>
                        <div className={`alert thrones ${usernameExistsMsg ? 'alert-shown' : 'alert-hidden'}`}>
                            <h2 className='alert alert-danger'>{usernameExistsMsg}</h2>
                        </div>                     */}

                        <form className='' onSubmit={handleSubmit}>
                            <label htmlFor="page_title">Post Title
                                <input type="text" name="page_title" className="form-control" placeholder="Post Title" onChange={handleChange} onKeyUp={handleOnKeyUp}/>
                            </label>

                            <label htmlFor="page_description">Post Description
                                <input type="textarea" name="page_description" className="form-control" placeholder="Post Description" onChange={handleChange} onKeyUp={handleOnKeyUp}/>
                            </label>

                            <label htmlFor="author">Author
                                <input type="text" name="author" className="form-control" placeholder="Author" onChange={handleChange} onKeyUp={handleOnKeyUp}/>
                            </label>

                            <label htmlFor="tags">Tags
                                <input type="text" name="tags" className="form-control" placeholder="Tags" onChange={handleChange} onKeyUp={handleOnKeyUp}/>
                            </label>

                            <label htmlFor="categories">Categories
                                <input type="text" name="categories" className="form-control" placeholder="Categories" onChange={handleChange} onKeyUp={handleOnKeyUp}/>
                            </label>

                            {/* onClick={() => setIsSubmitting(false)} */}
                            <button type="submit" className="form-control" onClick={(e) => setPost({ isActive: true })}>Publish</button>

                            <button type="submit" className="form-control" onClick={(e) => setPost({ isActive: false })}>Save as draft?</button>
                            
                            <div className={`alert alert-success ${isSubmitting ? 'alert-shown' : 'alert-hidden'}`} onTransitionEnd={() => setIsSubmitting(false)}>
                                <strong className='isSubmitting'>submitting...</strong>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}


export default CreatePost;