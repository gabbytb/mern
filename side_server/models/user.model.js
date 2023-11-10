module.exports = mongoose => {
    var Schema = new mongoose.Schema({
            username: {
                type: String,
                unique: true,
            },
            first_name: {
                type: String,
            },
            last_name: {
                type: String,
            },
            phone: {
                type: Number,
            },
            address: {
                type: String,
            },
            address2: {
                type: String,
            },
            city: {
                type: String,
            },
            state: {
                type: String,
            },
            country: {
                type: String,
            },
            zipCode: {
                type: Number,
            },
            email: {
                type: String,
                unique: true,
            },
            password: {
                type: String,
                max: 1022,
                min: 8,
            },
            role: {
                type: String,
            },
            permission: [String],
            isActive: {
                type: Boolean,
            }
        }, 
        { timestamps: true }
    );

    
    //  If you use this app with a front-end that needs "id" field instead of "_id",
    //  you have to override toJSON method that map default object to a custom object.
    Schema.method("toJSON", function() {
        const { _v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    
    const User = mongoose.model("User", Schema);
    // User.create({ username: "admin", first_name: "Oyebanji", last_name: "Gabriel", phone: 2347038662402, address: '11a, Chidison str', address2: '14, Lekan Muritala str, Aboru, Lagos', city: 'Iba', state: 'Oyo', country: 'Nigeria', zipCode: 23401, email: "igabrieloyebanji@gmail.com", password: "Administrativerightsonly", role: "admin", permission: ["project-index", "project-create", "project-delete"], isActive: true });
    // console.log("***** Created New User: ", User);
    return User;
};

