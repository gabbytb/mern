module.exports = mongoose => {    
    var blogSchema = new mongoose.Schema({
            post_img: {
                type: String,
            },
            post_title: {
                type: String,
                unique: true,
            },
            post_description: {
                type: String,
            },
            post_author: {
                type: String,
            },
            post_tags: {
                type: String,
            },
            post_categories: {
                type: String,
            },
            isPublished: {
                type: Boolean,
            },
            token: {
                type: String,
            },
        }, 
        { timestamps: true }
    );
            

    const Blog = mongoose.model("Blog", blogSchema);
    // Blog.create({ post_title: 'More Love, Less Ego', post_description: 'Album by Wizkid, aka Ayo Balogun', post_author: 'Gabby', post_tags: 'Best 2023 Afrobeats Album', post_categories: 'Afrobeats', isPublished: true });
    // console.log("***** Created New Blog Post: ", Blog);
    return Blog;

};