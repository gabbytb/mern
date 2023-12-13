import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "../img/Dashboard.svg";
import CalendarIcon from "../img/calendar-vector.svg";
import ProfileIcon from "../img/profile.svg";
import TaskIcon from "../img/Taskicon.svg";
import Pro from "../img/GoPro.svg";
import LogoIcon from "../img/Logo.svg";
import FormsIcon from "../img/Forms.svg";
import TableIcon from "../img/Tables.svg";
import PagesIcon from "../img/Pages.svg";
import MessagesIcon from "../img/Messages.svg";
import InboxIcon from "../img/Inbox.svg";
import InvoiceIcon from "../img/Invoice.svg"
import ChartIcon from "../img/Chart.svg";
import UiElements from "../img/ui-elements.svg";
import AuthIcon from "../img/Authentication.svg";












const LeftAside = ({ loggedInUser }) => {
    loggedInUser = JSON.parse(sessionStorage.getItem("userDetails"));
    loggedInUser = loggedInUser ? loggedInUser : handleLogout();


    useEffect(() => {

    }, []);

    function handleLogout() {
        sessionStorage.clear();
        window.location.replace("http://127.0.0.1:3000/user/login");
    }

    return (
        <aside className="aside-container row w-100 m-0 bg-dark">
            <div className="col px-0">
                <div className="pt-0 pb-5 px-0 d-flex flex-column">
                  
                        {/* ***************************************************************** */}  
                        {/* ASIDE NAV */}
                        {/* ***************************************************************** */}  
                        {/* Aside Logo */}
                        <div className="logo py-4 px-5 d-flex justify-content-center w-100 position-sticky top-0 bg-dark">
                            <Link to={"/admin/dashboard"} alt="logo">
                                <img className="w-25 w-50 w-75" src={LogoIcon} alt="logo"/>
                            </Link>
                        </div>                  
                        {/* END:  Aside Logo */}
                        {/* ***************************************************************** */}  
                        {/* ***************************************************************** */}  



                        {/* ***************************************************************** */}  
                        {/* ASIDE CONTENTS */}
                        {/* ***************************************************************** */}  \
                        {/* Aside MENU */}
                        <div className="row w-100 mt-4 mx-auto mb-0">

                            {/* MENU TITLE */}
                            <div className="d-flex p-0 mb-3 px-3">
                                <p className="w-100 header-style m-0 px-3">MENU</p>
                            </div>
                            {/* END:  MENU TITLE */}


                            {/* MENU LINKS */}
                            <div className="row w-100 m-0 px-3">
                                <div className="p-0 m-0 row g-1" id="accordion">

                                    {/* START:  Menu 1 */}
                                    <div className="card p-0 border-0">
                                        <div className="card-header p-0 border-0" id="headingOne">
                                            <div className="d-flex border-0 w-100 dropdown align-items-center justify-content-between p-0">
                                                <h4 className="mb-0 w-100">                
                                                    <button className="d-flex btn btn-dark border-0 rounded rounded-0 w-100 dropdown-toggle align-items-center justify-content-between px-3 py-2" type="button" data-bs-toggle="collapse" data-bs-target="#dashboard" aria-expanded="false" aria-pressed="true" aria-controls="headingOne">
                                                        <Link className="text-light" to="#" alt="dashboard">
                                                            <img className="pe-3" src={DashboardIcon} alt="icon" />
                                                            Dashboard                                                        
                                                        </Link>
                                                    </button>
                                                </h4>
                                            </div>
                                            <div className="collapse bg-dark" id="dashboard" aria-labelledby="dashboard">
                                                <div className="card-body d-flex flex-column row-gap-3">
                                                    <div className="d-flex justify-content-between">
                                                        <Link className="text-light" href="#" alt="eCommerce">
                                                            eCommerce
                                                        </Link>
                                                        <img className="btn btn-primary" src={Pro} alt="premium" />
                                                    </div>
                                                    <Link className="text-white text-decoration-none" href="#" alt="analytics">
                                                        Analytics
                                                    </Link>
                                                    <div className="d-flex justify-content-between">
                                                        <Link className="text-light" href="#" alt="marketing">
                                                            Marketing
                                                        </Link>
                                                        <img className="btn btn-primary" src={Pro} alt="premium" />
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <Link className="text-light" href="#" alt="crm">
                                                            CRM
                                                        </Link>
                                                        <img className="btn btn-primary" src={Pro} alt="premium" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* END:  Menu 1 */}


                                    {/* START:  Menu 2 */}
                                    <div className="card p-0 border-0">
                                        <div className="card-header p-0 border-0">
                                            <h4 className="mb-0">
                                                <button className="d-flex btn btn-dark w-100 px-3 border-0 rounded rounded-0" type="button">
                                                    <Link className="text-light" to="#" alt="calendar">
                                                        <img className="pe-3" src={CalendarIcon} alt="icon" />
                                                        Calendar
                                                    </Link>
                                                </button>
                                            </h4>
                                        </div>
                                    </div>
                                    {/* END:  Menu 2 */}


                                    {/* START:  Menu 3 */}
                                    <div className="card p-0 border-0">
                                        <div className="card-header p-0 border-0">
                                            <h4 className="mb-0">
                                                <button className="d-flex btn btn-dark w-100 px-3 border-0 rounded rounded-0 " type="button">
                                                    <Link className="text-light" to="#" alt="profile">
                                                        <img className="pe-3" src={ProfileIcon} alt="icon" />
                                                        Profile
                                                    </Link>
                                                </button>
                                            </h4>
                                        </div>
                                    </div>
                                    {/* END:  Menu 3 */}


                                    {/* START:  Menu 4 */}
                                    <div className="card p-0 border-0">
                                        <div className="card-header p-0 border-0" id="headingFour">
                                            <div className="d-flex border-0 w-100 dropdown align-items-center justify-content-between p-0">
                                                <h4 className="mb-0 w-100">                
                                                    <button className="d-flex btn btn-dark border-0 rounded rounded-0 w-100 dropdown-toggle align-items-center justify-content-between px-3 py-2" type="button" data-bs-toggle="collapse" data-bs-target="#task" aria-expanded="false" aria-pressed="true" aria-controls="headingFour">
                                                        <Link className="text-light" to="#" alt="task">
                                                            <img className="pe-3" src={TaskIcon} alt="icon" />
                                                            Task                                                        
                                                        </Link>
                                                    </button>
                                                </h4>
                                            </div>
                                            <div className="collapse bg-dark" id="task" aria-labelledby="task">
                                                <div className="card-body d-flex flex-column row-gap-3">
                                                    <div className="d-flex">
                                                        <Link className="dropdown-item text-white text-decoration-none" href="#">
                                                            List
                                                        </Link>
                                                        <img className="btn btn-primary" src={Pro} alt="premium" />
                                                    </div>
                                                    <div className="d-flex">
                                                        <Link className="dropdown-item text-light" href="#">
                                                            Kanban
                                                        </Link>
                                                        <img className="btn btn-primary" src={Pro} alt="premium" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* END:  Menu 4 */}


                                    {/* START:  Menu 5 */}
                                    <div className="card p-0 border-0">
                                        <div className="card-header p-0 border-0" id="headingFive">
                                            <div className="d-flex border-0 w-100 dropdown align-items-center justify-content-between p-0">
                                                <h4 className="mb-0 w-100">                
                                                    <button className="d-flex btn btn-dark border-0 rounded rounded-0 w-100 dropdown-toggle align-items-center justify-content-between px-3 py-2" type="button" data-bs-toggle="collapse" data-bs-target="#forms" aria-expanded="false" aria-pressed="true" aria-controls="headingFive">
                                                        <Link className="text-light" to="#" alt="forms">
                                                            <img className="pe-3" src={FormsIcon} alt="icon" />
                                                            Forms                                                    
                                                        </Link>
                                                    </button>
                                                </h4>
                                            </div>
                                            <div className="collapse bg-dark" id="forms" aria-labelledby="forms">
                                                <div className="card-body d-flex flex-column row-gap-3">
                                                    <Link className="dropdown-item text-white text-decoration-none" href="#">
                                                        Form Elements
                                                    </Link>
                                                    <Link className="dropdown-item text-light" href="#">
                                                        Form Layout
                                                    </Link>
                                                    <div className="d-flex">
                                                        <Link className="dropdown-item text-light" href="#">
                                                            Form Validation
                                                        </Link>
                                                        <img className="btn btn-primary" src={Pro} alt="premium" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* END:  Menu 5 */}

                                
                                    {/* START:  Menu 6 */}
                                    <div className="card p-0 border-0">
                                        <div className="card-header p-0 border-0">
                                            <h4 className="mb-0">
                                                <button className="d-flex btn btn-dark w-100 px-3 border-0 rounded rounded-0" type="button">
                                                    <Link className="text-light" to="#" alt="tables">
                                                        <img className="pe-3" src={TableIcon} alt="icon" />
                                                        Tables
                                                    </Link>
                                                </button>
                                            </h4>
                                        </div>
                                    </div>
                                    {/* END:  Menu 6 */}


                                    {/* START:  Menu 7 */}
                                    <div className="card p-0 border-0">
                                        <div className="card-header p-0 border-0" id="headingSeven">
                                            <div className="d-flex border-0 w-100 dropdown align-items-center justify-content-between p-0">
                                                <h4 className="mb-0 w-100">                
                                                    <button className="d-flex btn btn-dark border-0 rounded rounded-0 w-100 dropdown-toggle align-items-center justify-content-between px-3 py-2" type="button" data-bs-toggle="collapse" data-bs-target="#pages" aria-expanded="false" aria-pressed="true" aria-controls="headingSeven">
                                                        <Link className="text-light" to="#" alt="pages">
                                                            <img className="pe-3" src={PagesIcon} alt="icon" />
                                                            Pages                                                    
                                                        </Link>
                                                    </button>
                                                </h4>
                                            </div>
                                            <div className="collapse bg-dark" id="pages" aria-labelledby="pages">
                                                <div className="card-body d-flex flex-column row-gap-3">
                                                    <Link className="dropdown-item text-white text-decoration-none" href="#settings">
                                                        Settings
                                                    </Link>
                                                    <div className="d-flex">
                                                        <Link className="dropdown-item text-light" href="#file-manager">
                                                            File Manager
                                                        </Link>
                                                        <img className="btn btn-primary" src={Pro} alt="premium" />
                                                    </div>
                                                    <div className="d-flex">
                                                        <Link className="dropdown-item text-light" href="#data-tables">
                                                            Data Tables
                                                        </Link>
                                                        <img className="btn btn-primary" src={Pro} alt="premium" />
                                                    </div>
                                                    <div className="d-flex">
                                                        <Link className="dropdown-item text-light" href="#pricing-tables">
                                                            Pricing Tables
                                                        </Link>
                                                        <img className="btn btn-primary" src={Pro} alt="premium" />
                                                    </div>
                                                    <div className="d-flex">
                                                        <Link className="dropdown-item text-light" href="#error-page">
                                                            Error Page
                                                        </Link>
                                                        <img className="btn btn-primary" src={Pro} alt="premium" />
                                                    </div>
                                                    <div className="d-flex">
                                                        <Link className="dropdown-item text-light" href="#mail-success">
                                                            Mail Success
                                                        </Link>
                                                        <img className="btn btn-primary" src={Pro} alt="premium" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* END:  Menu 7 */}

                                </div>
                            </div>
                            {/* END:  MENU LINKS */}

                        </div>
                        {/* END:  Aside MENU */}



                        {/* Aside SUPPORT */}
                        <div className="row w-100 mt-4 mx-auto mb-0">

                            {/* SUPPORT TITLE */}          
                            <div className="d-flex p-0 mb-3 px-3">
                                <p className="w-100 header-style m-0 px-3">SUPPORT</p>
                            </div>
                            {/*END:  SUPPORT TITLE */}

                                        
                            {/* SUPPORT LINKS */}
                            <div className="row w-100 m-0 px-3">
                                <div className="p-0 m-0 row g-1" id="accordion">

                                    {/* START:  Support Menu 1 */}
                                    <div className="card p-0 border-0">
                                        <div className="card-header p-0 border-0">
                                            <h4 className="mb-0">
                                                <button className="d-flex btn btn-dark w-100 px-3 border-0 rounded rounded-0" type="button">
                                                    <Link className="text-light" to="#" alt="messages">
                                                        <img className="pe-3 menu-style" src={MessagesIcon} alt="icon" />
                                                        Messages
                                                    </Link>
                                                </button>
                                            </h4>
                                        </div>
                                    </div>
                                    {/* END:  Support Menu 1 */}

   
                                    {/* START:  Support Menu 2 */}
                                    <div className="card p-0 border-0">
                                        <div className="card-header p-0 border-0">
                                            <h4 className="mb-0">
                                                <button className="container btn btn-dark w-100 align-items-center border-0 rounded rounded-0" type="button">
                                                    <div className="row w-100 m-0 justify-content-between">

                                                        <div className="col-lg-1 m-0 px-0 justify-content-start">
                                                            <img className="p-0" src={InboxIcon} alt="icon" />
                                                        </div>

                                                        <div className="col-lg-11 p-0">
                                                            <div className="row m-0 justify-content-end ps-3">
                                                                <div className="col-lg-10 d-flex mb-0 px-0">
                                                                    <p className="text-light mb-0">Inbox</p>
                                                                </div>
                                                                <div className="col-lg-2 d-flex p-0 justify-content-end">
                                                                    <img className="btn btn-primary" src={Pro} alt="premium" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </button>
                                            </h4>
                                        </div>
                                    </div>
                                    {/* END:  Support Menu 2 */}


                                    {/* START:  Support Menu 3 */}
                                    <div className="card p-0 border-0">
                                        <div className="card-header p-0 border-0">
                                            <h4 className="mb-0">
                                                <button className="container btn btn-dark w-100 align-items-center border-0 rounded rounded-0" type="button">
                                                    <div className="row w-100 m-0 justify-content-between">

                                                        <div className="col-lg-1 m-0 px-0 justify-content-start">
                                                            <img className="p-0" src={InvoiceIcon} alt="icon" />
                                                        </div>

                                                        <div className="col-lg-11 p-0">
                                                            <div className="row m-0 justify-content-end ps-3">
                                                                <div className="col-lg-10 d-flex mb-0 px-0">
                                                                    <p className="text-light mb-0">Invoice</p>
                                                                </div>
                                                                <div className="col-lg-2 d-flex p-0 justify-content-end">
                                                                    <img className="btn btn-primary" src={Pro} alt="premium" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </button>
                                            </h4>
                                        </div>
                                    </div>
                                    {/* END:  Support Menu 3 */}

                                </div>
                            </div>
                            {/* END:  SUPPORT LINKS */}

                        </div>
                        {/* END:  Aside SUPPORT */}



                        {/* Aside OTHERS */}
                        <div className="row w-100 mt-4 mx-auto mb-0">

                            {/* OTHERS TITLE */}
                            <div className="d-flex p-0 mb-3 px-3">
                                <p className="w-100 header-style m-0 px-3">OTHERS</p>
                            </div>
                            {/* END:  OTHERS TITLE */}

                                    
                            {/* OTHERS LINKS */}
                            <div className="row w-100 m-0 px-3">
                                <div className="p-0 m-0 row g-1" id="accordion">

                                    {/* START:  Other Menu 1 */}
                                    <div className="card p-0 border-0">
                                        <div className="card-header p-0 border-0">
                                            <h4 className="mb-0">
                                                <button className="d-flex btn btn-dark w-100 px-3 border-0 rounded rounded-0 align-items-center" type="button">
                                                    <Link className="text-light text-decoration-none" to="#" alt="chart">
                                                        <img className="pe-3" src={ChartIcon} alt="icon" />
                                                        Chart
                                                    </Link>
                                                </button>
                                            </h4>
                                        </div>
                                    </div>
                                    {/* END:  Other Menu 1 */}


                                    {/* START:  Other Menu 2 */}
                                    <div className="card p-0 border-0">
                                        <div className="card-header p-0 border-0" id="otherTwo">
                                            <div className="d-flex border-0 rounded rounded-0 w-100 dropdown align-items-center justify-content-between p-0">
                                                <h4 className="mb-0 w-100">                
                                                    <button className="d-flex btn btn-dark border-0 rounded rounded-0 w-100 dropdown-toggle align-items-center justify-content-between px-3 py-2" type="button" data-bs-toggle="collapse" data-bs-target="#uielements" aria-expanded="false" aria-pressed="true" aria-controls="otherTwo">
                                                        <Link className="text-light text-decoration-none" to="#" alt="ui elements">
                                                            <img className="pe-3" src={UiElements} alt="icon" />
                                                            UI Elements                                                    
                                                        </Link>
                                                    </button>
                                                </h4>
                                            </div>
                                            <div className="collapse bg-dark" id="uielements" aria-labelledby="uielements">
                                                <div className="card-body d-flex flex-column row-gap-3">
                                                    <Link className="text-white text-decoration-none d-flex justify-content-between ps-4" href="#">
                                                        Alerts
                                                    </Link>
                                                    <Link className="text-light d-flex justify-content-between ps-4" href="#">
                                                        Buttons
                                                    </Link>
                                                    <Link className="text-light d-flex justify-content-between ps-4" href="#">
                                                        Buttons Group
                                                        <img className="btn btn-primary" src={Pro} alt="icon" />                                                            
                                                    </Link>
                                                    <Link className="text-light d-flex justify-content-between ps-4" href="#">
                                                        Badge
                                                        <img className="btn btn-primary" src={Pro} alt="icon" />   
                                                    </Link>
                                                    <Link className="text-light d-flex justify-content-between ps-4" href="#">
                                                        Breadcrumb
                                                        <img className="btn btn-primary" src={Pro} alt="icon" />   
                                                    </Link>
                                                    <Link className="text-light d-flex justify-content-between ps-4" href="#">
                                                        Cards
                                                        <img className="btn btn-primary" src={Pro} alt="icon" /> 
                                                    </Link>
                                                    <Link className="text-light d-flex justify-content-between ps-4" href="#">
                                                        Dropdowns
                                                        <img className="btn btn-primary" src={Pro} alt="icon" /> 
                                                    </Link>
                                                    <Link className="text-light d-flex justify-content-between ps-4" href="#">
                                                        Modals
                                                        <img className="btn btn-primary" src={Pro} alt="icon" /> 
                                                    </Link>
                                                    <Link className="text-light d-flex justify-content-between ps-4" href="#">
                                                        Tabs
                                                        <img className="btn btn-primary" src={Pro} alt="icon" /> 
                                                    </Link>
                                                    <Link className="text-light d-flex justify-content-between ps-4" href="#">
                                                        Tooltips
                                                        <img className="btn btn-primary" src={Pro} alt="icon" /> 
                                                    </Link>
                                                    <Link className="text-light d-flex justify-content-between ps-4" href="#">
                                                        Popovers
                                                        <img className="btn btn-primary" src={Pro} alt="icon" /> 
                                                    </Link>
                                                    <Link className="text-light d-flex justify-content-between ps-4" href="#">
                                                        Accordion
                                                        <img className="btn btn-primary" src={Pro} alt="icon" /> 
                                                    </Link>
                                                    <Link className="text-light d-flex justify-content-between ps-4" href="#">
                                                        Notifications
                                                        <img className="btn btn-primary" src={Pro} alt="icon" /> 
                                                    </Link>
                                                    <Link className="text-light d-flex justify-content-between ps-4" href="#">
                                                        Pagination
                                                        <img className="btn btn-primary" src={Pro} alt="icon" /> 
                                                    </Link>
                                                    <Link className="text-light d-flex justify-content-between ps-4" href="#">
                                                        Progress
                                                        <img className="btn btn-primary" src={Pro} alt="icon" /> 
                                                    </Link>
                                                    <Link className="text-light d-flex justify-content-between ps-4" href="#">
                                                        Carousel
                                                        <img className="btn btn-primary" src={Pro} alt="icon" /> 
                                                    </Link>
                                                    <Link className="text-light d-flex justify-content-between ps-4" href="#">
                                                        Images
                                                        <img className="btn btn-primary" src={Pro} alt="icon" /> 
                                                    </Link>
                                                    <Link className="text-light d-flex justify-content-between ps-4" href="#">
                                                        Videos
                                                        <img className="btn btn-primary" src={Pro} alt="icon" /> 
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* END:  Other Menu 2 */}
                                

                                    {/* START:  Other Menu 3 */}
                                    <div className="card p-0 border-0">
                                        <div className="card-header p-0 border-0" id="otherThree">
                                            <div className="d-flex border-0 w-100 dropdown align-items-center justify-content-between p-0">
                                                <h4 className="mb-0 w-100">                
                                                    <button className="d-flex btn btn-dark border-0 rounded rounded-0 w-100 dropdown-toggle align-items-center justify-content-between px-3 py-2" type="button" data-bs-toggle="collapse" data-bs-target="#authentication" aria-expanded="false" aria-pressed="true" aria-controls="otherThree">
                                                        <Link className="text-light text-decoration-none" to="#" alt="authentication">
                                                            <img className="pe-3" src={AuthIcon} alt="icon" />
                                                            Authentication
                                                        </Link>
                                                    </button>
                                                </h4>
                                            </div>
                                            <div className="collapse bg-dark" id="authentication" aria-labelledby="authentication">
                                                <div className="card-body d-flex flex-column row-gap-3">
                                                    <Link className="text-light ps-4" href="/user/signup">
                                                        Sign up
                                                    </Link>
                                                    <Link className="text-light ps-4" href="/reset-password">
                                                        Reset Password
                                                    </Link>
                                                    <Link className="text-white ps-4 text-decoration-none" to={"/admin/dashboard?logout"} onClick={handleLogout} alt="log out">
                                                        Log Out
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* END:  Other Menu 3 */}
                                
                                </div>
                            </div>
                            {/* END:  OTHERS LINKS */}
                            
                        </div>
                        {/* END:  Aside OTHERS */}
                        {/* ***************************************************************** */}  
                        {/* ***************************************************************** */}  
               </div>
            </div>
        </aside>
    )
};



export default LeftAside;