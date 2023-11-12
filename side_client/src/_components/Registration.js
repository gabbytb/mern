import React, { useEffect, useState } from 'react';
import "../app.css";
import Header from '../header';
import axios from 'axios';
// import $ from 'jquery';






function Registration() {
    
    const [user, setUser] = useState({
        username: '', 
        first_name: '', 
        last_name: '', 
        email: '',
        password: '', 
        isActive: false,
        // role: '',
        // permission: [""],
        token: ''
    });
    const [inputValidation, setInputValidation] = useState(null);
    const [emailExistsMsg, setEmailExistsMsg] = useState(null);
    const [usernameExistsMsg, setUsernameExistsMsg] = useState(null);
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
        // console.log('User Role: ', user.role)
        // console.log('User Permission: ', user.permission)
        console.log('Account isActive: ', user.isActive)
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

        axios.post("http://127.0.0.1:8000/v1/api/admin/users/manage/create", user)
        .then((response) => {
            if (response.data === 'Fill all entries') {
                setIsSubmitting(false);
                setInputValidation("Please fill all required inputs.");              
                return;
            } else if (response.data === 'User with email exists. Please sign-in.') {
                setIsSubmitting(false);
                setEmailExistsMsg(`${user.email.toLowerCase()} exists. Please log-in`);
                return;
            } else if (response.data === 'User with username exists. Please sign-in.') {
                setIsSubmitting(false);
                setUsernameExistsMsg(`${user.username.toLowerCase()} exists. Please log-in`);
                return;
            } else {
                setIsSubmitting(true);
                // setTimeout(() => {
                //     window.location.href = "http://127.0.0.1:3000/user/login";
                // }, 3000);
                return;
            };
        })
        .catch((error) => {
            console.log("Error occurred while creating new user: ", error);
        });
    }

    
    return (
        <div className="Registration">
            <Header />
            <main>
                <h1 className="page-title">CREATE USER</h1>

                <div className='d-flex container justify-content-center'>
                    <div className='row flex-column' style={{width:360}}>

                        {/* <div className='notification-panel'> */}
                        <div className={`alert valhalla ${inputValidation ? 'alert-shown' : 'alert-hidden'}`}>
                            <h2 className='alert alert-danger'>{inputValidation}</h2>
                        </div> 
                        <div className={`alert winter ${emailExistsMsg ? 'alert-shown' : 'alert-hidden'}`}>
                            <h2 className='alert alert-danger'>{emailExistsMsg}</h2>
                        </div>
                        <div className={`alert thrones ${usernameExistsMsg ? 'alert-shown' : 'alert-hidden'}`}>
                            <h2 className='alert alert-danger'>{usernameExistsMsg}</h2>
                        </div>                    
                        {/* </div> */}

                        <form onSubmit={handleSubmit}>

                            
                            <label htmlFor="username">Username
                                <input type="text" name="username" class="form-control" placeholder="Username" onChange={handleChange} onKeyUp={handleOnKeyUp}/>
                            </label>

                            <div className='form-row d-flex justify-content-between'>
                                <div className='col' >
                                    <label htmlFor="first_name">First Name
                                        <input type="text" name="first_name" class="form-control" placeholder="First Name"  onChange={handleChange} onKeyUp={handleOnKeyUp}/>
                                    </label>
                                </div>
                                <div className='col'>
                                    <label htmlFor="last_name">Last Name
                                        <input type="text" name="last_name" class="form-control" placeholder="Last Name" onChange={handleChange} onKeyUp={handleOnKeyUp}/>
                                    </label>
                                </div>
                            </div>

                            {/* <label htmlFor="phone">Phone Number
                                <input type="number" name="phone" placeholder="Phone Number"  onChange={handleChange} onKeyUp={handleOnKeyUp} value={user.phone} />
                            </label>

                            <label htmlFor="state">State
                                <select id="state" name="state" onChange={handleChange} onKeyUp={handleOnKeyUp} value={user.state}>
                                    <option defaultValue="">Choose...</option><option value="Abia">Abia</option><option value="Adamawa">Adamawa</option><option value="Akwa Ibom">Akwa Ibom</option><option value="Anambra">Anambra</option><option value="Bauchi">Bauchi</option><option value="Bayelsa">Bayelsa</option><option value="Benue">Benue</option><option value="Borno">Borno</option><option value="Cross River">Cross River</option><option value="Delta">Delta</option><option value="Ebonyi">Ebonyi</option><option value="Edo">Edo</option><option value="Ekiti">Ekiti</option><option value="Enugu">Enugu</option><option value="Gombe">Gombe</option><option value="Imo">Imo</option><option value="Jigawa">Jigawa</option><option value="Kaduna">Kaduna</option><option value="Kano">Kano</option><option value="Katsina">Katsina</option><option value="Kebbi">Kebbi</option><option value="Kogi">Kogi</option><option value="Kwara">Kwara</option><option value="Lagos">Lagos</option><option value="Nasarawa">Nasarawa</option><option value="Niger">Niger</option><option value="Ogun">Ogun</option><option value="Ondo">Ondo</option><option value="Osun">Osun</option><option value="Oyo">Oyo</option><option value="Plateau">Plateau</option><option value="Rivers">Rivers</option><option value="Sokoto">Sokoto</option><option value="Taraba">Taraba</option><option value="Yobe">Yobe</option><option value="Zamfara">Zamfara</option><option value="FCT, Abuja">FCT, Abuja</option>
                                </select>
                            </label> */}

                            <label htmlFor="email">Email
                                <input type="email" name="email" class="form-control" placeholder="Enter e-mail" onChange={handleChange} onKeyUp={handleOnKeyUp}/>
                            </label>
                        
                            <label htmlFor="password">Password
                                <input type="password" name="password" class="form-control" placeholder="Enter password" onChange={handleChange} onKeyUp={handleOnKeyUp}/>        
                            </label>

                            <div className='tac d-flex'>
                                <label htmlFor="isActive" className='text'>I agree to terms and condition?
                                    <input type="checkbox" className='checkBox' name="isActive" onChange={handleChange} onKeyUp={handleOnKeyUp}/>
                                </label>
                            </div>

                            {/* onClick={() => setIsSubmitting(false)} */}
                            <button type="submit" class="form-control" disabled={!validateForm()}>Create account</button>

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


export default Registration;