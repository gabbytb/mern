import React from "react";
import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

import ToggleNotification from "../img/Toggle.svg"
import DashboardImg from "../img/Ellipse 2824.svg";
import Message from "../img/alarm.svg";
import Notification from "../img/chat-alt-8.svg"
import SearchIcon from "../img/search-2.svg";
import moreIcon from "../img/more-alt.svg";

import USAFlag from "../img/countries/country-usa.svg";
import CanadaFlag from "../img/countries/country-canada.svg";
import FranceFlag from "../img/countries/country-france.svg";
import ItalyFlag from "../img/countries/country-italy.svg";
import AustraliaFlag from "../img/countries/country-australia.svg";
import IndiaFlag from "../img/countries/country-india.svg";

import BarChart from "./BarChart";
import PieChart from "./PieChart";
import MapChart from "./MapChart";













const RightSection = ({ loggedInUser }) => {
    
    loggedInUser = JSON.parse(sessionStorage.getItem("userDetails"));
    const userUsername = loggedInUser ? loggedInUser.username : handleLogout();
    const userFirstName = loggedInUser ? loggedInUser.first_name : handleLogout();
    const userLastName = loggedInUser ? loggedInUser.last_name : handleLogout();
    const userRole = loggedInUser ? loggedInUser.role : handleLogout();
    const userToken = loggedInUser ? loggedInUser.token : handleLogout();
    console.log("Bearer Token: ", userToken);
    

    const token =  sessionStorage.getItem("token");
    console.log("Session Token, for Logged-in User: ", token, "\n","Token belongs to: ", userFirstName + " " + userLastName + " as it matches his/her AccessToken: " + userToken);


    function handleLogout() {
        sessionStorage.clear();
        window.location.replace("http://127.0.0.1:3000/user/login");
    }


    return (
        <section className="section-container p-0 m-0 mw-100 position-sticky top-0">
            

            {/* Section Nav */}
            <div className="row p-0 m-0 justify-content-between position-sticky top-0 bg-white">

                {/* L:  Search/Notifications */}
                <div className="col-xl-9 col-lg-9 col-md-8 p-0">
                    <div className="container border-bottom border-1 p-0 row justify-content-between align-items-center m-0 ps-4 pe-2 pt-4 pb-4 pe-lg-0">
                        <div className="row justify-content-between m-0 w-100 p-0">
                            <div className="col-xl-3 col-lg-4 col-md-7 px-0 d-flex">
                                <div className="row border-0 m-0 justify-content-between">
                                    <div className="col-2 d-flex p-0">
                                        <img className="text-secondary w-50 w-75" src={SearchIcon}  alt="search-icon" /> 
                                    </div>
                                    <div className="col-10 d-flex p-0">
                                        <input className="text-secondary border-start border-top border-end border-light w-100" type="search" placeholder="Type to search..." />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 d-flex px-xl-3 px-lg-0 d-block d-xl-block d-lg-block d-md-none">
                                <div className="row justify-content-between w-100 m-0 h-100" id="toggleNotify">
                                    <div className="col-xl-5 col-lg-5 col-md-5 px-0 d-flex">
                                        <img className="mw-75 w-75" src={ToggleNotification} alt="toggle-notification" />
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-md-7 px-0 d-flex">
                                        <img className="w-50 mw-50 px-2" src={Message} alt="notification-message" />        
                                        <img className="w-50 mw-50 px-2" src={Notification} alt="chat-message" />        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                {/* END:  Search/Notifications */}

            {/* ***************************************************************** */}  

                {/* R:  User Info */}
                <div className="col-xl-3 col-lg-3 col-md-4 p-0">
                    <div className="container border-sm border-md border-lg border-bottom border-1 p-0 d-flex align-items-center h-100">
                        <div className="row w-100 p-0 m-0 justify-content-end align-items-center">
                            <div className="col-xl-8 col-lg-8 col-md-8 p-0 w-100">
                            
                                <button className="dropdown-toggle btn align-items-center w-100 m-0 border-0 ps-xl-0 pe-xl-3 ps-lg-0 pe-lg-3 d-flex" data-bs-toggle="collapse" data-bs-target="#userInfo" aria-expanded="false" aria-controls="dashboardDropdown">
                                    <div className="row m-0 w-100 md-flex-column align-items-center justify-content-xl-between justify-content-lg-between justify-content-md-end ps-xl-0 pe-xl-0 px-lg-0 pe-md-3">
                                        <div className="col-xl-8 col-lg-11 col-md-0 p-0 pe-lg-1">
                                            <Link className="profile text-dark w-100 d-flex flex-column p-0 justify-content-end align-items-end fw-medium text-capitalize" to={"/admin/dashboard"} alt="profile">
                                                {userUsername}
                                            </Link>
                                            <small className="text-secondary fw-md d-flex justify-content-end text-capitalize">{userRole}</small>
                                        </div>
                                        <div className="col-xl-4 col-lg-0 col-md-9 p-0 profile-icon d-md-none d-lg-none d-xl-block">
                                            <img className="w-xl-50" src={DashboardImg} alt="profile-icon" />                                        
                                        </div>
                                    </div>
                                </button>

                            </div>
                        </div>
                    </div>
                    {/* END:  User Info */}


                    {/* User Info (Toggle/Options) */}
                    <div className="row position-fixed shadow-lg bg-white">
                        <div className="collapse px-4 py-2 g-2" id="userInfo" aria-labelledby="dashboardDropdown">
                            <div className="dropdown-item pb-2">
                                <Link className="text-dark" to="#" alt="reset password">
                                    CRM Dashboard
                                </Link>
                            </div>
                            <div className="dropdown-item pb-2">
                                <Link className="text-dark" to="/admin/dashboard?logout" onClick={handleLogout} alt="log out">
                                    Logout
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* END:  User Info (Toggle/Options) */}

                </div>
                {/* User Info:  End */}

            </div>
            {/* END:  Section Nav */}





            {/* Section Body:  Row 1 [Date] */}
            <div className="row">
                <div className="container">
                    <div className="row">
                        <div className="col">

                        </div>
                        <div className="col">

                        </div>
                    </div>
                </div>
            </div>
            {/* Section Body:  Row 1 [END] */}



            {/* Section Body:  Row 2 [Bar Chart] */}
            <div className="row m-0 justify-content-center mb-4">
                <div className="col-11 m-0 shadow-lg p-4">
                    <BarChart token={userToken}/>
                </div>
            </div>
            {/* Section Body:  Row 2 [END] */}

            



            {/* Section Body:  Row 3 [Engagements] */}
            <div className="row m-0 justify-content-center mb-4">
                <div className="col-11 m-0 p-0 shadow-lg bg-light">
                    <div className="container p-0">
                        <div className="row m-0 justify-content-between">

                            <div className="col-3 d-flex flex-column p-0 align-items-center py-4">
                                <div>
                                    <h4 className="engagements6 d-sm d-md d-lg d-flex justify-content-around">18.6K</h4>
                                    <h6>Unique Visitors</h6>
                                </div>
                            </div>
                            <div className="col-3 d-flex flex-column p-0 align-items-center py-4">
                                <div>
                                    <h4 className="engagements6 d-sm d-md d-lg d-flex justify-content-around">55.9K</h4>
                                    <h6>Total Pageviews</h6>
                                </div>
                            </div>
                            <div className="col-3 d-flex flex-column p-0 align-items-center py-4">
                                <div>
                                    <h4 className="engagements6 d-sm d-md d-lg d-flex justify-content-around">54%</h4>
                                    <h6>Bounce Rate</h6>
                                </div>
                            </div>
                            <div className="col-3 d-flex flex-column p-0 align-items-center py-4">
                                <div>
                                    <h4 className="engagements6 d-sm d-md d-lg d-flex justify-content-around">2m 56s</h4>
                                    <h6>Visit Duration</h6>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Section Body:  Row 3 [END] */}

                                    
            
            {/* Section Body:  Row 4 [Map / Countries] */}
            <div className="row m-0 justify-content-center">
                <div className="col-11 d-flex mx-0 px-0">
                    <div className="row w-100 justify-content-between m-0 g-4">

                        {/* Column 1: [Map] */}
                        <div className="col-xl-6 px-0 bg-light shadow-lg mt-0 mb-4">
                            <div className="d-flex flex-column bg-light px-0">
                                
                                {/* MAP ITSELF */}
                                <div className="col">
                                    {/* Map Title */}
                                    <div className="d-flex px-4 pt-4 justify-content-between">
                                        <h6 className="fw-bold mb-0">Top Countries</h6>
                                    </div>

                                    {/* Map Integration */}
                                    <div>
                                        <MapChart />
                                    </div>
                                </div>
                                {/* MAP ITSELF */}
                            {/* ***************************************************************** */}                                
                                {/* MAP - COUNTRIES */}
                                <div className="col px-4 py-4">
                                    <div className="row m-0 mb-2 justify-content-between">
                                        <div className="col-xl-4 col-md-4 d-flex px-0 align-items-center">
                                            <p className="mb-0">
                                                <img src={USAFlag} alt="usa flag" /> United States
                                            </p>
                                        </div>
                                        <div className="col-xl-7 col-md-8 d-flex align-items-center px-0">
                                            <ProgressBar variant="success" now={55} label={35 + '%'} />
                                        </div>
                                    </div>
                                    <div className="row m-0 mb-2 justify-content-between">
                                        <div className="col-xl-4 col-md-4 d-flex px-0 align-items-center">
                                            <p className="mb-0">
                                                <img src={CanadaFlag} alt="canada flag" /> Canada
                                            </p>
                                        </div>
                                        <div className="col-xl-7 col-md-8 d-flex align-items-center px-0">
                                            <ProgressBar variant="success" now={48} label={26 + '%'} />
                                        </div>
                                    </div>
                                    <div className="row m-0 mb-2 justify-content-between">
                                        <div className="col-xl-4 col-md-4 d-flex px-0 align-items-center">
                                            <p className="mb-0">
                                                <img src={FranceFlag} alt="France flag" /> France
                                            </p>
                                        </div>
                                        <div className="col-xl-7 col-md-8 d-flex align-items-center px-0">
                                            <ProgressBar variant="success" now={38} label={18 + '%'} />
                                        </div>
                                    </div>
                                    <div className="row m-0 mb-2 justify-content-between">
                                        <div className="col-xl-4 col-md-4 d-flex px-0 align-items-center">
                                            <p className="mb-0">
                                                <img src={ItalyFlag} alt="Italy flag" /> Italy
                                            </p>
                                        </div>
                                        <div className="col-xl-7 col-md-8 d-flex align-items-center px-0">
                                            <ProgressBar variant="success" now={30} label={14 + '%'} />
                                        </div>
                                    </div>
                                    <div className="row m-0 mb-2 justify-content-between">
                                        <div className="col-xl-4 col-md-4 d-flex px-0 align-items-center">
                                            <p className="mb-0">
                                                <img src={AustraliaFlag} alt="Australia flag" /> Australia
                                            </p>
                                        </div>
                                        <div className="col-xl-7 col-md-8 d-flex align-items-center px-0">
                                            <ProgressBar variant="success" now={25} label={10 + '%'} />
                                        </div>
                                    </div>
                                    <div className="row m-0 mb-2 justify-content-between">
                                        <div className="col-xl-4 col-md-4 d-flex px-0 align-items-center">
                                            <p className="mb-0">
                                                <img src={IndiaFlag} alt="India flag" /> India
                                            </p>
                                        </div>
                                        <div className="col-xl-7 col-md-8 d-flex align-items-center px-0">
                                            <ProgressBar variant="success" now={20} label={7 + '%'} />
                                        </div>
                                    </div>
                                </div>
                                {/* MAP - COUNTRIES */}

                            </div>
                        </div>
                        {/* End:  Column 1: [Map] */}

                    {/* ***************************************************************** */}                                

                        {/* Column 2: [Top Content & Top Channels] */}
                        <div className="col-xl-6 px-md-0 ps-xl-4 pe-xl-0 ps-lg-0 pe-lg-0 mt-lg-0 mt-md-4">
                            <div className="bg-light row m-0 g-4">    
                            
                                {/* Column 1: [Top Content] */}
                                <div className="col-xl-12 p-0 d-flex flex-column px-4 py-4 shadow-lg bg-light mt-0">
                                    <div className="row justify-content-between m-0 mb-3">
                                        <div className="col-5 d-flex p-0 justify-content-start">
                                            <h6 className="fw-bold mb-0">Top Content</h6>
                                        </div>
                                        <div className="col-2 d-flex p-0 justify-content-end">
                                            <img className="w-25" src={moreIcon} alt="click for more" />
                                        </div>
                                    </div>

                                    <div className="row m-0">
                                        <div className="col-xl-10 col-md-10 px-0 d-flex">
                                            <div className="row m-0 w-100">     
                                                <div className="d-flex flex-column px-0">
                                                    <div className="d-flex justify-content-between mb-3">
                                                        <p className="text-secondary m-0">URL</p>
                                                        <p className="text-secondary m-0">Views</p>
                                                    </div>      


                                                    <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-primary py-2 ps-3 pe-2 rounded mb-2">
                                                        / 
                                                        <p className="mb-0">4.2K</p>
                                                    </div>
                                                    <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-primary py-2 ps-3 pe-2 rounded mb-2">
                                                        /blog 
                                                        <p className="mb-0">1.9K</p>
                                                    </div>
                                                    <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-primary py-2 ps-3 pe-2 rounded mb-2">
                                                        /reserve/success 
                                                        <p className="mb-0">1.5K</p>
                                                    </div>
                                                    <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-primary py-2 ps-3 pe-2 rounded mb-2">
                                                        /product/product-details 
                                                        <p className="mb-0">974</p>
                                                    </div>
                                                    <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-primary py-2 ps-3 pe-2 rounded">
                                                        /blog/digital-marketing 
                                                        <p className="mb-0">179</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-2 col-md-2 d-flex flex-column px-0">
                                            <div className="text-end d-flex flex-column justify-content-between">

                                                <div className="row m-0 mb-3">
                                                    <p className="m-0 px-0 d-flex justify-content-end text-secondary">Uniques</p>
                                                </div>   
                                                                            
                                                <div className="row m-0">
                                                    <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-light py-0 px-0 rounded mb-2">
                                                        <div className="d-flex flex-row w-100 justify-content-end py-2 ps-3 pe-1 mb-0"><p className="mb-0">2.1K</p></div>
                                                    </div>
                                                    <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-light py-0 px-0 rounded mb-2">
                                                        <div className="d-flex flex-row w-100 justify-content-end py-2 ps-3 pe-1 mb-0"><p className="mb-0">139</p></div>
                                                    </div>
                                                    <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-light py-0 px-0 rounded mb-2">
                                                        <div className="d-flex flex-row w-100 justify-content-end py-2 ps-3 pe-1 mb-0"><p className="mb-0">290</p></div>
                                                    </div>
                                                    <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-light py-0 px-0 rounded mb-2">
                                                        <div className="d-flex flex-row w-100 justify-content-end py-2 ps-3 pe-1 mb-0"><p className="mb-0">176</p></div>
                                                    </div>
                                                    <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-light py-0 px-0 rounded mb-2">
                                                        <div className="d-flex flex-row w-100 justify-content-end py-2 ps-3 pe-1 mb-0"><p className="mb-0">57</p></div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End:  Column 1: [Top Content] */}

                            {/* ***************************************************************** */}
                            
                                {/* Column 2: [Top Channels] */}
                                <div className="col-xl-12 p-0 d-flex flex-column px-4 py-4 shadow-lg bg-light">

                                    <div className="row justify-content-between m-0 mb-3">
                                        <div className="col-6 d-flex p-0 justify-content-start">
                                            <h6 className="fw-bold mb-0">Top Channels</h6>
                                        </div>
                                        
                                        <div className="col-2 d-flex p-0 justify-content-end">
                                            <img className="w-25" src={moreIcon} alt="click for more" />
                                        </div>
                                    </div>

                                    <div className="row m-0">

                                        <div className="col-xl-10 col-md-10 px-0 d-flex">
                                            <div className="row m-0 w-100">     
                                                <div className="d-flex flex-column px-0">
                                                    
                                                    <div className="d-flex justify-content-between mb-3">
                                                        <p className="text-secondary m-0">URL</p>
                                                        <p className="text-secondary m-0">Views</p>
                                                    </div>     


                                                    <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-primary py-2 ps-3 pe-2 rounded mb-2">Google <p className="mb-0">4.2K</p></div>
                                                    <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-primary py-2 ps-3 pe-2 rounded mb-2">Github <p className="mb-0">1.9K</p></div>
                                                    <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-primary py-2 ps-3 pe-2 rounded mb-2">Producthunt <p className="mb-0">1.5K</p></div>
                                                    <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-primary py-2 ps-3 pe-2 rounded mb-2">Facebook <p className="mb-0">974</p></div>
                                                    <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-primary py-2 ps-3 pe-2 rounded">Twitter <p className="mb-0">179</p></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-2 col-md-2 d-flex flex-column px-0">
                                            <div className="text-end d-flex flex-column justify-content-between">

                                                <div className="row m-0 mb-3">
                                                    <p className="m-0 px-0 d-flex justify-content-end text-secondary">Uniques</p>
                                                </div>                            

                                                <div className="row m-0">
                                                    <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-light py-0 px-0 rounded mb-2">
                                                        <div className="d-flex flex-row w-100 justify-content-end py-2 ps-3 pe-1 mb-0"><p className="mb-0">3.9K</p></div>
                                                    </div>
                                                    <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-light py-0 px-0 rounded mb-2">
                                                        <div className="d-flex flex-row w-100 justify-content-end py-2 ps-3 pe-1 mb-0"><p className="mb-0">509</p></div>
                                                    </div>
                                                    <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-light py-0 px-0 rounded mb-2">
                                                        <div className="d-flex flex-row w-100 justify-content-end py-2 ps-3 pe-1 mb-0"><p className="mb-0">986</p></div>
                                                    </div>
                                                    <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-light py-0 px-0 rounded mb-2">
                                                        <div className="d-flex flex-row w-100 justify-content-end py-2 ps-3 pe-1 mb-0"><p className="mb-0">639</p></div>
                                                    </div>
                                                    <div className="d-flex flex-row w-100 justify-content-between progress-bar bg-light py-0 px-0 rounded mb-2">
                                                        <div className="d-flex flex-row w-100 justify-content-end py-2 ps-3 pe-1 mb-0"><p className="mb-0">57</p></div>
                                                    </div>   
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                </div>
                                {/* End:  Column 2: [Top Channels] */}

                            </div>
                        </div>
                        {/* End:  Column 2: [Top Content & Top Channels] */}


                    </div>
                </div>
            </div>
            {/* Section Body:  Row 4 [END] */}
                



            {/* Section Body:  Row 5 [Pie Chart] */}
            <div className="row m-0 justify-content-center">
                <div className="col-11 d-flex mx-0 px-0">
                    <div className="row w-100 justify-content-between m-0 g-4">

                        {/* Column 1: [Pie Chart] */}
                        <div className="col-xl-5 px-xl-0 mt-0 mx-0 shadow-lg d-flex">
                            <div className="d-flex flex-column bg-light px-0 w-100">
                                
                                {/* PIE CHART ITSELF */}
                                <div className="col d-flex flex-column">

                                    {/* Pie Chart Title */}
                                    <div className="d-flex px-4 pt-4 justify-content-between">
                                        <h6 className="fw-bold mb-0">Visitors Analytics</h6>
                                    </div>
                                    {/* END:  Pie Chart Title */}

                                {/* ***************************************************************** */}

                                    {/* Pie Chart Integration */}
                                    <div className="px-4 py-5 d-flex justify-content-center">
                                        <PieChart />
                                    </div>
                                    {/* END:  Pie Chart Integration */}

                                </div>
                                {/* PIE CHART ITSELF */}

                            </div>
                        </div>
                        {/* End:  Column 1: [Pie Chart] */}

                    {/* ***************************************************************** */}

                        {/* Column 2: [Top Channels] */}
                        <div className="col-xl-7 px-md-0 ps-xl-4 pe-xl-0 ps-lg-0 pe-lg-0 mt-lg-0 mt-md-4">
                            <div className="bg-light row m-0 g-4">    

                                <div className="col-xl-12 p-0 d-flex flex-column px-0 py-4 shadow-lg bg-light mt-0">

                                    {/* Top Channels [TITLE] */}
                                    <div className="row justify-content-between m-0 mb-3 px-4">
                                        <div className="col d-flex p-0 justify-content-start">
                                            <h6 className="fw-bold mb-0">Top Channels</h6>
                                        </div>
                                    </div>
                                    {/* END: Top Channels [TITLE] */}

                                {/* ***************************************************************** */}

                                    {/* Top Channels [PRODUCTS] */}
                                    <div className="row m-0 border-top border-bottom px-4">
                                        <div className="col-xl-10 col-md-10 px-0 d-flex w-100 py-3">
                                            <div className="row m-0 w-100 justify-content-between">     
                                                <div className="col-xl-4 px-0 d-flex justify-content-lg-start">
                                                    Product Name
                                                </div>
                                                <div className="col-xl-2 px-0 d-flex justify-content-lg-center">
                                                    Category
                                                </div>
                                                <div className="col-xl-1 px-0 d-flex justify-content-lg-center">
                                                    Price
                                                </div>
                                                <div className="col-xl-1 px-0 d-flex justify-content-lg-center">
                                                    Sold
                                                </div>
                                                <div className="col-xl-2 px-0 d-flex justify-content-lg-center">
                                                    Profit
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* END:  Top Channels [PRODUCTS] */}


                                </div>

                            </div>
                        </div>
                        {/* END:  Column 2: [Top Channels] */}

                    </div>
                </div>
            </div> 
            {/* Section Body:  Row 5 [END] */}


        </section>
    )
};


export default RightSection;