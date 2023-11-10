import React, { useEffect, useState } from 'react';
import "../app.css";
import Header from '../header';
import axios from 'axios';






function Registration() {
    
    const [user, setUser] = useState({ 
        username: '', 
        first_name: '', 
        last_name: '', 
        email: '',
        password: '', 
        isActive: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    
    useEffect(() => {
        document.title = "Sign Up | Samuel Akinola Foundation";        
    }, []);


    function validateForm() {
        return user.email.length > 0 && user.password.length > 0;
    }    

    function handleOnKeyUp(e) {
        console.clear();
        console.log('Username: ', user.username)
        console.log('First Name: ', user.first_name)
        console.log('Last Name: ', user.last_name)
        console.log('Email: ', user.email)
        console.log('Password: ', user.password)
        console.log('Account Active: ', user.isActive)
    }
        
    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;     
        setUser({
          ...user,
          [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        function validateInput(req, res) {

            if (!(user.email && user.username && user.password)) {
                return res.status(400).send("Fill required inputs");
            } else {
                axios.post("http://127.0.0.1:8000/v1/api/admin/users/manage/create", user)
                .then((response) => {
                    console.log("User Created Successfully: ", response.data);
                })
                .catch((error) => {
                    console.log("Error creating user: ", error);
                });
            }
            // setTimeout(() => {
            //     window.location.href = "http://127.0.0.1:3000/user/login";
            // }, 3000);
        }
    }

    
    return (
        <div className="Registration">
            <Header />

            <main>
                <h1 className="page-title">CREATE USER</h1>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username
                        <input type="text" name="username" placeholder="Username" onChange={handleChange} onKeyUp={handleOnKeyUp} />
                    </label>

                    <label htmlFor="first_name">First Name
                        <input type="text" name="first_name" placeholder="First Name"  onChange={handleChange} onKeyUp={handleOnKeyUp} />
                    </label>

                    <label htmlFor="last_name">Last Name
                        <input type="text" name="last_name" placeholder="Last Name" onChange={handleChange} onKeyUp={handleOnKeyUp} />
                    </label>

                    {/* <label htmlFor="phone">Phone Number
                        <input type="number" name="phone" placeholder="Phone Number"  onChange={handleChange} onKeyUp={handleOnKeyUp} value={user.phone} />
                    </label>

                    <label htmlFor="state">State
                        <select id="state" name="state" onChange={handleChange} onKeyUp={handleOnKeyUp} value={user.state}>
                            <option defaultValue="">Choose...</option><option value="Abia">Abia</option><option value="Adamawa">Adamawa</option><option value="Akwa Ibom">Akwa Ibom</option><option value="Anambra">Anambra</option><option value="Bauchi">Bauchi</option><option value="Bayelsa">Bayelsa</option><option value="Benue">Benue</option><option value="Borno">Borno</option><option value="Cross River">Cross River</option><option value="Delta">Delta</option><option value="Ebonyi">Ebonyi</option><option value="Edo">Edo</option><option value="Ekiti">Ekiti</option><option value="Enugu">Enugu</option><option value="Gombe">Gombe</option><option value="Imo">Imo</option><option value="Jigawa">Jigawa</option><option value="Kaduna">Kaduna</option><option value="Kano">Kano</option><option value="Katsina">Katsina</option><option value="Kebbi">Kebbi</option><option value="Kogi">Kogi</option><option value="Kwara">Kwara</option><option value="Lagos">Lagos</option><option value="Nasarawa">Nasarawa</option><option value="Niger">Niger</option><option value="Ogun">Ogun</option><option value="Ondo">Ondo</option><option value="Osun">Osun</option><option value="Oyo">Oyo</option><option value="Plateau">Plateau</option><option value="Rivers">Rivers</option><option value="Sokoto">Sokoto</option><option value="Taraba">Taraba</option><option value="Yobe">Yobe</option><option value="Zamfara">Zamfara</option><option value="FCT, Abuja">FCT, Abuja</option>
                        </select>
                    </label> */}

                    <label htmlFor="email">Email
                        <input type="email" name="email" placeholder="Enter e-mail" onChange={handleChange} onKeyUp={handleOnKeyUp} />
                    </label>
                
                    <label htmlFor="password">Password
                        <input type="password" name="password" placeholder="Enter password" onChange={handleChange} onKeyUp={handleOnKeyUp} />        
                    </label>

                    <label htmlFor="isActive">I agree to terms and condition?
                        <input type="checkbox" name="isActive" onChange={handleChange} onKeyUp={handleOnKeyUp}/>
                    </label>

                    <button type="submit" disabled={!validateForm()} onClick={() => setIsSubmitting(true)}>Create account</button>

                    <div className={`alert alert-success ${isSubmitting ? 'alert-shown' : 'alert-hidden'}`} onTransitionEnd={() => setIsSubmitting(false)}>
                        <strong>submitting...</strong>
                    </div>
                </form>
            </main>
        </div>
    );
}


export default Registration;