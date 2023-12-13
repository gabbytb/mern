import React from "react";
import { Link } from "react-router-dom";
import FirstImg from "./assets/img/Group.svg";
import SecondImg from "./assets/img/rolly.png";
import ThirdImg from "./assets/img/undraw_happy_news_hxmt.svg";
import FourthImg from "./assets/img/undraw_social_influencer_sgsv.svg"
import FifthImg from "./assets/img/undraw_mention_6k5d.svg"
import PriceIcon from "./assets/img/Price.svg";
import PriceInfo from "./assets/img/PriceInfo.svg";
import FacebookIcon from "./assets/img/Facebook.svg";
import LinkedInIcon from "./assets/img/LinkedIn.svg";
import TwitterIcon from "./assets/img/Twitter.svg";
import YoutubeIcon from "./assets/img/Youtube.svg";
import InstagramIcon from "./assets/img/Instagram.svg";








const App = () => {

       
    return (
        <>
        <nav className="container-fluid px-0">
            <div className="container-fluid px-0 py-3 d-flex flex-column align-items-end">
                <div className="row justify-content-xl-center justify-content-lg-center justify-content-md-center justify-content-sm-center w-75 mx-auto align-items-center w-100">
                    <div className="col-sm-4 col-md-3 col-lg-2 px-0 d-flex justify-content-md-between justify-content-lg-around">
                        <ul className="list-unstyled mb-0 d-flex justify-content-around justify-content-sm-around justify-content-md-between justify-content-lg-between w-100">
                            <li>
                                <small><Link className="text-secondary text-decoration-none" to="/">About</Link></small>
                            </li>
                            <li>
                                <small><Link className="text-secondary text-decoration-none" to="/blog">Blog</Link></small>
                            </li>
                            <li>
                                <small><Link className="text-secondary text-decoration-none" to="/admin/dashboard">Dashboard</Link></small>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-2 col-md-4 col-lg-5 mb-0 p-0 d-flex justify-content-center justify-content-xs-center justify-content-sm-center justify-content-md-center justify-content-lg-center">
                        <h4 className="fw-bold">Landing</h4>
                    </div>
                    <div className="col-sm-4 col-md-3 col-lg-2 mb-0 p-0 d-flex justify-content-center justify-content-md-end justify-content-lg-end">
                        <button type="button" className="btn btn-md px-5 bg-dark">
                            <Link to="#shop" className="text-light text-decoration-none">Buy now</Link>
                        </button>   
                    </div>
                </div>                  
            </div>
        </nav>
        


        <section>
            <div className="container-md p-0 flex-column m-0 mw-100">
                <div className="row p-0 mx-auto">

                    {/* CONTENTS STARTS HERE */}
                    <div className="container p-0">




                        {/* START:  Row Col 1 */}
                        <div className="row align-items-center pb-lg-4 justify-content-lg-end justify-content-md-center justify-content-between w-100 m-0 ps-lg-5 mb-md-5">                
                            <div className="col-xl-5 col-lg-6 col-md-10 col-sm px-0 justify-content-md-center d-flex ">    
                                <div className="container mx-0 px-0">
                                    <div className="row m-0 px-0">

                                        <div className="container px-0">
                                            <h1 className="fw-bold p-0">Introduce Your Product Quickly & Effectively</h1>                           
                                            <p className="text-muted px-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
                                            <p className="text-muted px-0">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                                                
                                            <div className="col p-0">
                                                <div className="row g-3 m-0">
                                                    <div className="col-5 col-sm-4 col-md-3 col-lg-5 col-xl-5 p-0 ms-0 me-3 my-0">
                                                        <button type="button" className="border w-100 p-0 bg-dark d-flex justify-content-center">
                                                            <small className="mb-0 py-2 text-white fw-bold bg-dark"><Link to="#shop" className="text-decoration-none text-white">Purchase UI Kit</Link></small>
                                                        </button>           
                                                    </div>
                                                    <div className="col-5 col-sm-4 col-md-3 col-lg-5 col-xl-5 p-0 m-0">
                                                        <button type="button" className="border bg-0 border-dark w-100 p-0 d-flex justify-content-center">
                                                        <small className="mb-0 py-2 fw-bold"><Link to="#study" className="text-decoration-none text-dark">Learn more</Link></small>
                                                        </button>            
                                                    </div>
                                                </div>
                                            </div>  

                                        </div>
                                    </div>
                                </div>
                            </div>       


                            <div className="col-xl-6 col-lg-5 d-lg-flex d-md-none d-none p-0">
                                <img className="img-fluid" src={FirstImg} alt="icon" />
                            </div>
                        </div>
                        {/* END:  Row Col 1 */}




                        {/* START:  Row Col 2 */}
                        <div className="row justify-content-center py-lg-5  mx-auto align-items-center mb-md-5">
                            <div className="col-lg-5 p-0">
                                <div className="container px-0">
                                    <div className="row flex-column mx-auto">
                                        <div className="col p-0">
                                            <div className="row flex-column g-5 m-0">
                                                <div className="col ps-lg-5 pe-lg-0 px-md-0">
                                                    <h2 className="fw-bold p-0">Light, Fast & Powerful</h2>                           

                                                    <p className="text-muted px-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                                                    <p className="text-muted px-0 mb-lg-0">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                                                </div>
                                                <div className="col px-lg-5 px-md-0 mt-md-3">
                                                    <div className="row">
                                                        <div className="col">
                                                            <h5 className="fw-bold">This goes here</h5>
                                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                                                        </div>
                                                        <div className="col">
                                                            <h5 className="fw-bold">This goes here</h5>
                                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                                                        </div>    
                                                    </div>
                                                </div>
                                            </div>                                      
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-5 d-none d-md-none d-lg-block p-0">
                                <img className="img-fluid" src={SecondImg} alt="icon" />
                            </div>
                        </div>
                        {/* END:  Row Col 2 */}




                        {/* START:  Row Col 3 */}
                        <div className="row justify-content-center py-lg-5  mx-auto align-items-center mb-md-5">
                            <div className="col-lg-5 d-none d-md-none d-lg-block p-0">
                                <div className="row w-75 m-0"> 
                                    <img className="img-fluid p-0" src={ThirdImg} alt="icon" /> 
                                </div>
                            </div>

                            <div className="col-lg-5 p-0">
                                <div className="container px-4 px-md-0 d-flex">
                                    <div className="row flex-column mx-auto p-0">

                                        <h2 className="fw-bold p-0">Light, Fast & Powerful</h2>                           

                                        <p className="text-muted px-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                                        <p className="text-muted px-0 mb-lg-0">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END:  Row Col 3 */}



                        {/* START:  Row Col 4 */}
                        <div className="row justify-content-center py-lg-5  mx-auto align-items-center mb-md-5">
                            <div className="col-lg-5 d-none d-md-none d-lg-block p-0">
                                <div className="row w-75 m-0"> 
                                    <img className="img-fluid p-0" src={FourthImg} alt="icon" /> 
                                </div>
                            </div>

                            <div className="col-lg-5 p-0">
                                <div className="container px-4 px-md-0 d-flex">
                                    <div className="row flex-column mx-auto p-0">
                                        <h2 className="fw-bold p-0">Light, Fast & Powerful</h2>                           
                                        <p className="text-muted px-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                                        <p className="text-muted px-0 mb-lg-0">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END:  Row Col 4 */}



                        {/* START:  Row Col 5 */}
                        <div className="row justify-content-center py-lg-5  mx-auto align-items-center mb-md-5">
                            <div className="col-lg-5 d-none d-md-none d-lg-block p-0">
                                <div className="row w-75 m-0"> 
                                    <img className="img-fluid p-0" src={FifthImg} alt="icon" /> 
                                </div>
                            </div>
                            <div className="col-lg-5 p-0">
                                <div className="container px-4 px-md-0 d-flex">
                                    <div className="row flex-column mx-auto p-0">
                                        <h2 className="fw-bold p-0">Light, Fast & Powerful</h2>                           
                                        <p className="text-muted px-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                                        <p className="text-muted px-0">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                                            
                                        <div className="row g-3 m-0 p-0">
                                            <div className="col-5 col-sm-4 col-md-3 col-lg-5 col-xl-5 p-0 ms-0 me-3 my-0">
                                                <button type="button" className="border w-100 p-0 bg-dark d-flex justify-content-center">
                                                    <small className="mb-0 py-2 text-white fw-bold bg-dark"><Link to="#shop" className="text-decoration-none text-white">Purchase Now</Link></small>
                                                </button>           
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END:  Row Col 5 */}



                        {/* START:  Row Col 6 */}
                        <div className="footer pt-5">
                            <div className="row bg-info g-5 py-5 mt-5 mx-auto">
                                <div className="d-flex flex-column align-items-center py-5">
                                    <div className="col-xl-4 d-flex justify-content-center mb-4">
                                        <h3 className="pricing-title fw-medium mb-0 text-dark">A Price To Suit Everyone</h3>
                                    </div>
                                    <div className="col-xl-6 col-lg-8 col-md-8 col-sm-8 col-8 mb-5">
                                        <p className="pricing-body mb-0 text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                                    </div>
                                    <div className="col-xl-6 col-lg-8 col-md-8 col-sm-8 col-8 mb-5">
                                        <div className="row">
                                            <div className="col-12 d-flex justify-content-center">
                                                <p className="pricing-price text-primary mb-2">
                                                    <img className="" src={PriceIcon} alt="pricing price" />
                                                </p>
                                            </div>
                                            <div className="col-12 d-flex justify-content-center">
                                                <p className="pricing-info text-primary">
                                                    <img className="" src={PriceInfo} alt="pricing info" />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-xs-4">
                                        <div className="d-flex flex-column align-items-center">
                                            <div className="col-12 text-center">
                                                <h3 className="text-secondary">See, One price. Simple.</h3>
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <Link role="button" className="btn btn-sm bg-dark text-light border border-sm justify-content-center w-100 py-2 fw-bold" to="#" alt="purchase-now">Purchase Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END:  Row Col 6 */}


                    </div>
                    {/* CONTENTS ENDS HERE */}

                </div>
            </div>
        </section>



        <footer>
            <div className="container-sm px-5">
                <div className="row mx-auto">


                    <div className="container-sm px-0 pt-5 pb-4 d-flex flex-column align-items-end border-bottom">


                        <div className="row justify-content-sm-center justify-content-md-between justify-content-lg-between justify-content-xl-between mx-auto align-items-center w-100 d-flex flex-sm-column flex-md-row flex-lg-row flex-xl-row g-4 border-bottom pt-5 pb-4">
                            <div className="col-sm-6 col-md-4 col-lg-3 px-0 d-flex">
                                <p className="d-flex mb-0 w-100 justify-content-center justify-content-sm-center justify-content-md-start justify-content-lg-start justify-content-xl-start">©2023 Yourcompany</p>
                            </div>

                            <div className="col-sm-6 col-md-3 col-lg-4 mb-0 p-0 d-flex justify-content-center justify-content-xs-center justify-content-sm-center justify-content-md-center justify-content-lg-center">
                                <h4 className="fw-bold d-flex mb-0 w-100 justify-content-center">Landing</h4>
                            </div>

                            <div className="col-sm-6 col-md-5 col-lg-4 mb-0 p-0 d-flex justify-content-center justify-content-md-end justify-content-lg-end">
                                <button type="button" className="btn btn-md px-5 bg-dark">
                                    <Link to="#shop" className="text-light text-decoration-none">Purchase now</Link>
                                </button>   
                            </div>
                        </div>   


                        <div className="row justify-content-sm-center justify-content-md-between justify-content-lg-between justify-content-xl-between mx-auto align-items-center w-100 d-flex flex-sm-column flex-md-row flex-lg-row flex-xl-row g-4 py-4">
                            <div className="col-sm-8 col-md-4 col-lg-3 col-xl-2 px-0 d-flex justify-content-md-between justify-content-lg-around">
                                <ul className="list-unstyled mb-0 d-flex justify-content-around justify-content-sm-around justify-content-md-between justify-content-lg-between w-100">
                                    <li>
                                        <small><Link className="text-secondary text-decoration-none" to="/">Home</Link></small>
                                    </li>
                                    <li>
                                        <small><Link className="text-secondary text-decoration-none" to="/demo">About</Link></small>
                                    </li>
                                    <li>
                                        <small><Link className="text-secondary text-decoration-none" to="/admin/dashboard">Contact</Link></small>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-sm-6 col-md-3 col-lg-2 px-0 d-flex justify-content-around justify-content-sm-between justify-content-md-between justify-content-lg-around">
                                <img src={FacebookIcon} alt="Facebook" />
                                <img src={LinkedInIcon} alt="LinkedIn" />
                                <img src={TwitterIcon} alt="Twitter" />
                                <img src={YoutubeIcon} alt="YouTube" />
                                <img src={InstagramIcon} alt="Instagram" />
                            </div>
                        </div>


                    </div>


                </div>
            </div>                    
        </footer>
        </>
    );
}


export default App;