module.exports = mongoose => {
    var postSchema = new mongoose.Schema({
            page_title: {
                type: String,
                unique: true,
            },
            page_description: {
                type: String,
            },
            author: {
                type: String,
            },
            tags: {
                type: String,
            },
            categories: {
                type: String,
            },
            isActive: {
                type: Boolean,
            },
        }, 
        { timestamps: true }
    );
            

    const Post = mongoose.model("Post", postSchema);
    // User.create({ username: "admin", first_name: "Oyebanji", last_name: "Gabriel", phone: 2347038662402, address: '11a, Chidison str', address2: '14, Lekan Muritala str, Aboru, Lagos', city: 'Iba', state: 'Oyo', country: 'Nigeria', zipCode: 23401, email: "igabrieloyebanji@gmail.com", password: "Administrativerightsonly", role: "admin", permission: ["project-index", "project-create", "project-delete"], isActive: true });
    // console.log("***** Created New User: ", User);
    return Post;
};

















// Rename "_id" to "id" in the JSON representation
// userSchema.virtual('id').get(function () {
//     return this._id.toHexString();
// });

// userSchema.method("toJSON", function() {
//     const { _v, _id, ...object } = this.toObject();
//     object.id = _id;
//     return object;
// });
