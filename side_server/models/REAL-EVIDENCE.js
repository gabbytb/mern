// // First Define a Model ==> Then, Model Controller
// // 1: Define Model
// module.exports = mongoose => {
//     var schema = mongoose.Schema(
//         {
//             title: String,
//             description: String,
//             published: Boolean
//         }, 
//         { timestamps: true }
//     );

    
//     //  If you use this app with a front-end that needs id field instead of _id, you have to override toJSON method that map default object to a custom object.
//     schema.method("toJSON", function() {
//         const { _v, _id, ...object } = this.toObject();
//         object.id = _id;
//         return object;
//     });


//     const User = mongoose.model("user", schema);

//     return User;
// };
