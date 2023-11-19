// import React, { useState } from 'react'; 
// import axios from 'axios';
// import Header from '../header';
// import Form from 'react-bootstrap/Form'; 
// import Button from 'react-bootstrap/Button'; 



// function RegistrationTest() { 

//     const [user, setUser] = useState({ 
//         username: '',
//         first_name: '',
//         last_name: '',
//         email: '',
//         password: '',
//         isActive: false,
//     });
//     const [inputValidation, setInputValidation] = useState(null);
//     const [emailExistsMsg, setEmailExistsMsg] = useState(null);
//     const [usernameExistsMsg, setUsernameExistsMsg] = useState(null);
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     function validateForm() {
//         return user.email.length > 0 && user.password.length > 0;
//     }

//     function handleOnKeyUp(e) {
//         console.clear();
//         console.log(`COLLECTING USER DETAILS.....\nUsername: ${user.username} \nFull Name: ${user.first_name} ${user.last_name} \nEmail: ${user.email} \nPassword: ${user.password} \nisActive: ${user.isActive}`);
//     }
    
//     function handleChange(e) {
//         console.clear();
//         const name = e.target.name;
//         const value = e.target.value;
//         setUser({
//             ...user, 
//             [name]: value
//         });
//     }

//     const handleSubmit = (e) => {
//         setIsSubmitting(false);
        
//         axios.post('http://127.0.0.1:8000/v1/api/admin/users/manage/create', user)
//         .then((response) => {
//             if (response.data === 'Fill all the required inputs') {
//                 setIsSubmitting(false);
//                 setInputValidation('Fill all the required inputs')
//                 console.log('Missing input: ', response.data);
//                 return;
//             } else if(response.data === "User with email exists. Please sign-in.") {
//                 setIsSubmitting(false);
//                 setEmailExistsMsg('User with email exists. Please sign-in.');
//                 console.log('User with Email exists => ', response.data);
//                 return;
//             } else if (response.data === "User with username exists. Please sign-in.") {
//                 setIsSubmitting(false);
//                 setUsernameExistsMsg('User with username exists. Please sign-in.')
//                 console.log('User with Username exists => ', response.data);
//                 return;
//             } else {
//                 setIsSubmitting(true);
//                 console.log('RESPONSE DATA: ', response.data);
//                 return;
//             }
//         })
//         .catch((err) => {
//             console.log('Error saving user', err);
//         })
//     }

//     return ( 
//         <div className="Registration">
//             <Header />
//             <main>
//                 <h1 className="page-title">Sign Up</h1>

//                 <div className='d-flex container justify-content-center'>
//                     <div className='row flex-column mx-auto' style={{width:360}}>

//                         {/* <div className='notification-panel'> */}
//                         <div className={`alert valhalla ${inputValidation ? 'alert-shown' : 'alert-hidden'}`}>
//                             <h2 className='alert alert-danger'>{inputValidation}</h2>
//                         </div> 
//                         <div className={`alert winter ${emailExistsMsg ? 'alert-shown' : 'alert-hidden'}`}>
//                             <h2 className='alert alert-danger'>{emailExistsMsg}</h2>
//                         </div>
//                         <div className={`alert thrones ${usernameExistsMsg ? 'alert-shown' : 'alert-hidden'}`}>
//                             <h2 className='alert alert-danger'>{usernameExistsMsg}</h2>
//                         </div>                    
//                         {/* </div> */}

//                         <Form className='' onSubmit={handleSubmit}>
//                             <Form.Group> 
//                                 <Form.Label htmlFor="username">Enter your full name:</Form.Label> 
//                                 <Form.Control type="text" name="username" className="form-control" placeholder="Username" onChange={handleChange} onKeyUp={handleOnKeyUp}/>
//                             </Form.Group> 

//                             <div className='form-row d-flex justify-content-between'>
//                                 <div className='col' >
//                                     <Form.Group>
//                                         <Form.Label htmlFor="first_name">First Name</Form.Label>
//                                         <Form.Control type="text" name="first_name" className="form-control" placeholder="First Name"  onChange={handleChange} onKeyUp={handleOnKeyUp}/>
//                                     </Form.Group>
//                                 </div>
//                                 <div className='col'>
//                                     <Form.Group>
//                                         <Form.Label htmlFor="last_name">Last Name</Form.Label>
//                                         <Form.Control type="text" name="last_name" className="form-control" placeholder="Last Name" onChange={handleChange} onKeyUp={handleOnKeyUp}/>
//                                     </Form.Group>
//                                 </div>
//                             </div>

//                             <Form.Group> 
//                                 <Form.Label htmlFor="email">Email</Form.Label>
//                                 <Form.Control type="email" name="email" className="form-control" placeholder="Enter e-mail" onChange={handleChange} onKeyUp={handleOnKeyUp}/>
//                             </Form.Group>
                            
//                             <Form.Group>
//                                 <Form.Label htmlFor="password">Password</Form.Label>
//                                 <Form.Control type="password" name="password" className="form-control" placeholder="Enter password" onChange={handleChange} onKeyUp={handleOnKeyUp}/>        
//                             </Form.Group>

//                             <div className='tac d-flex'>
//                                 <Form.Group>
//                                     <Form.Control type="checkbox" className='checkBox' name="isActive" onChange={handleChange} onKeyUp={handleOnKeyUp}/>
//                                     <Form.Label htmlFor="isActive" className='text'>I agree to terms and condition?</Form.Label>                                
//                                 </Form.Group>
//                             </div>

//                             {/* onClick={() => setIsSubmitting(false)} */}
//                             <Button variant="primary" type="submit" disabled={!validateForm()}>Create account</Button>

//                             <div className={`alert alert-success ${isSubmitting ? 'alert-shown' : 'alert-hidden'}`} onTransitionEnd={() => setIsSubmitting(false)}>
//                                 <strong className='isSubmitting'>submitting...</strong>
//                             </div>

//                         </Form> 
//                     </div>
//                 </div>
//             </main>
//         </div>
//     ); 
// }


// export default RegistrationTest;