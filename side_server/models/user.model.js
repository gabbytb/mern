module.exports = mongoose => {
    var userSchema = new mongoose.Schema({
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
            },
            token: {
                type: String,
            }
        }, 
        { timestamps: true }
    );
    
        
    const User = mongoose.model("User", userSchema);
    // User.create({ username: "admin", first_name: "Oyebanji", last_name: "Gabriel", phone: 2347038662402, address: '11a, Chidison str', address2: '14, Lekan Muritala str, Aboru, Lagos', city: 'Iba', state: 'Oyo', country: 'Nigeria', zipCode: 23401, email: "igabrieloyebanji@gmail.com", password: "Administrativerightsonly", role: "admin", permission: ["project-index", "project-create", "project-delete"], isActive: true });
    // console.log("***** Created New User: ", User);
    return User;
};

