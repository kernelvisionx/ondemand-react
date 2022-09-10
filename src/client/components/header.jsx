import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
//icon
import { Modal} from 'react-bootstrap';

import logo from "../assets/images/logo.png";
import Dropdown from "react-bootstrap/Dropdown";
import $ from "jquery";
import { useEffect } from "react";

import IMG01 from "../assets/images/customer/user-01.jpg";
import IMG02 from "../assets/images/customer/user-02.jpg";
import IMG03 from "../assets/images/customer/user-03.jpg";
import IMG04 from "../assets/images/customer/user-04.jpg";
import IMG05 from "../assets/images/customer/user-05.jpg";
import IMG06 from "../assets/images/customer/user-06.jpg";
import IMG07 from "../assets/images/customer/user-07.jpg";
import wallet from "../assets/images/wallet.png";

import Provider1 from "../assets/images/provider/provider-01.jpg";

const Header = (props) => {
  let pathnames = window.location.pathname

  const [active, setActive] = useState(false);
  const [activeModal, setActivemodal] = useState(false);
  const [isSelected, setSelected] = useState(false);
  const [isSelectedUserMenu, setSelectedUserMenu] = useState(false);
  const url = pathnames.split("/").slice(0, -1).join("/");

  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };

  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };

 

  useEffect(() => {

  
    $(window).scroll(function(){
      if ($(this).scrollTop() > 50) {
        $('.fixed-header').addClass('top-fixed');
      } else {
        $('.fixed-header').removeClass('top-fixed');
      }
    });
    $(".main-nav a").on("click", function (e) {
      if ($(this).parent().hasClass("has-submenu")) {
        e.preventDefault();
      }
      if (!$(this).hasClass("submenu")) {
        $("ul", $(this).parents("ul:first")).slideUp(350);
        $("a", $(this).parents("ul:first")).removeClass("submenu");
        $(this).next("ul").slideDown(350);
        $(this).addClass("submenu");
      } else if ($(this).hasClass("submenu")) {
        $(this).removeClass("submenu");
        $(this).next("ul").slideUp(350);
      }
    });	// Mobile menu sidebar overlay
  }, []);

  const toggle = () => {
    setSelected(!isSelected)
    setSelectedUserMenu(false)
  }

  const toggleUserMenu = () => {
    setSelected(false)
    setSelectedUserMenu(!isSelectedUserMenu)
  }


  const openModal = () => setActivemodal("login");

  const handleCloseModal = () => setActivemodal("close");
  
  return (
    <header className={pathnames.includes("/home") || pathnames == "/template2/" ? "header fixed-header" : "header"} >
  <nav className="navbar navbar-expand-lg header-nav">
    <div className="navbar-header">
      <a id="mobile_btn" href="#" onClick={() => onHandleMobileMenu()}>
        <span className="bar-icon">
          <span />
          <span />
          <span />
        </span>
      </a>
      <Link to="/home" className="navbar-brand logo">
          <img src={logo} className="img-fluid" alt="Logo" />
      </Link>
    </div>
    <div className="main-menu-wrapper">
      <div className="menu-header">
        <Link to="/home" className="menu-logo">
          <img src={logo} className="img-fluid" alt="Logo" />
        </Link>
          <a
            href="#0"
            id="menu_close"
            className="menu-close"
            onClick={() => onhandleCloseMenu()}
            >
              <i className="fas fa-times"></i>
          </a>
      </div>
      <ul className="main-nav">
      <li className={pathnames.includes("/home") || pathnames == "/template2/" ? "active" : ""}><Link to="/home">Home</Link></li>
            <li className={pathnames.includes("/categories") ? "active" : ""}><Link to="/categories">Categories</Link></li>
            <li className={`has-submenu ${url.includes("/provider") ? "active" : ""}`}>
              <a href="#0">
               Providers<i className="fas fa-chevron-down" aria-hidden="true"></i>
              </a>
              <ul className={`submenu`}>
                <li className={pathnames.includes("provider-dashboard") ? "active" : ""}>
                  <Link to="/provider/provider-dashboard" onClick={() => onhandleCloseMenu()}>Dashboard</Link>
                </li>
                <li className={pathnames.includes("provider-services") ? "active" : ""}>
                  <Link to="/provider/provider-services" onClick={() => onhandleCloseMenu()}>Services</Link>
                </li>
                <li className={pathnames.includes("provider-booking") ? "active" : ""}>
                  <Link to="/provider/provider-booking" onClick={() => onhandleCloseMenu()}>Booking</Link>
                </li>
                <li className={pathnames.includes("provider-settings") ? "active" : ""}>
                  <Link to="/provider/provider-settings" onClick={() => onhandleCloseMenu()}>Profile Settings</Link>
                </li>
                <li className={pathnames.includes("provider-wallet") ? "active" : ""}>
                  <Link to="/provider/provider-wallet" onClick={() => onhandleCloseMenu()}>Wallet</Link>
                </li>
                <li className={pathnames.includes("provider-subscription") ? "active" : ""}>
                  <Link to="/provider/provider-subscription" onClick={() => onhandleCloseMenu()}>Subscription</Link>
                </li>
                <li className={pathnames.includes("provider-availability") ? "active" : ""}>
                  <Link to="/provider/provider-availability" onClick={() => onhandleCloseMenu()}>Availability</Link>
                </li>
                <li className={pathnames.includes("provider-reviews") ? "active" : ""}>
                  <Link to="/provider/provider-reviews" onClick={() => onhandleCloseMenu()}>Reviews</Link>
                </li>
                <li className={pathnames.includes("provider-payment") ? "active" : ""}>
                  <Link to="/provider/provider-payment" onClick={() => onhandleCloseMenu()}>Payments</Link>
                </li>
              </ul>
            </li>
            <li className={`has-submenu ${url.includes("/customer") ? "active" : ""}`}>
              <a href="#0"> Customers<i className="fas fa-chevron-down" aria-hidden="true"></i>
              </a>
              <ul className={`submenu`}>
                <li className={pathnames.includes("dashboard") ? "active" : ""}>
                  <Link to="/customer/customer-dashboard" onClick={() => onhandleCloseMenu()}>Dashboard</Link>
                </li>
                <li className={pathnames.includes("favourites") ? "active" : ""}>
                  <Link to="/customer/customer-favourites" onClick={() => onhandleCloseMenu()}>Favourites</Link>
                </li>
                <li className={pathnames.includes("customer-booking") ? "active" : ""}>
                  <Link to="/customer/customer-booking" onClick={() => onhandleCloseMenu()}>Booking</Link>
                </li>
                <li className={pathnames.includes("customer-setting") ? "active" : ""}>
                  <Link to="/customer/customer-setting" onClick={() => onhandleCloseMenu()}>Profile Setting</Link>
                </li>
                <li className={pathnames.includes("wallet") ? "active" : ""}>
                  <Link to="/customer/customer-wallet" onClick={() => onhandleCloseMenu()}>Wallet</Link>
                </li>
                <li className={pathnames.includes("review") ? "active" : ""}>
                  <Link to="/customer/customer-review" onClick={() => onhandleCloseMenu()}>Review</Link>
                </li>
                <li className={pathnames.includes("customer-payment") ? "active" : ""}>
                  <Link to="/customer/customer-payment" onClick={() => onhandleCloseMenu()}>Payment</Link>
                </li>
              </ul>
            </li>
            <li className={`has-submenu ${url.includes("pages") || pathnames.includes("book-service") ? "active" : ""}`}>
              <a href="#0">
              Pages<i className="fas fa-chevron-down" aria-hidden="true"></i>
              </a>
              <ul className={`submenu`}>
                <li className={pathnames.includes("search") ? "active" : ""}>
                  <Link to="/pages/search" onClick={() => onhandleCloseMenu()}>Search</Link>
                </li>
                <li className={pathnames.includes("service-details") || pathnames.includes("book-service") ? "active" : ""}>
                  <Link to="/pages/service-details" onClick={() => onhandleCloseMenu()}>Service details</Link>
                </li>
                <li className={pathnames.includes("add-service") ? "active" : ""}>
                  <Link to="/pages/add-service" onClick={() => onhandleCloseMenu()}>Add service</Link>
                </li>
                <li className={pathnames.includes("edit-service") ? "active" : ""}>
                  <Link to="/pages/edit-service" onClick={() => onhandleCloseMenu()}>Edit service</Link>
                </li>
                <li className={pathnames.includes("chat") ? "active" : ""}>
                  <Link to="/pages/chat" onClick={() => onhandleCloseMenu()}>Chat</Link>
                </li>
                <li className={pathnames.includes("notification") ? "active" : ""}>
                  <Link to="/pages/notification" onClick={() => onhandleCloseMenu()}>Notifications</Link>
                </li>
                <li className={pathnames.includes("about-us") ? "active" : ""}>
                  <Link to="/pages/about-us" onClick={() => onhandleCloseMenu()}>About us</Link>
                </li>
                <li className={pathnames.includes("contact-us") ? "active" : ""}>
                  <Link to="/pages/contact-us" onClick={() => onhandleCloseMenu()}>Contact us</Link>
                </li>
                <li className={pathnames.includes("faq") ? "active" : ""}>
                  <Link to="/pages/faq" onClick={() => onhandleCloseMenu()}>FAQ</Link>
                </li>
                <li className={pathnames.includes("terms") ? "active" : ""}>
                  <Link to="/pages/terms" onClick={() => onhandleCloseMenu()}>Terms & condition</Link>
                </li>
                <li className={pathnames.includes("privacy") ? "active" : ""}>
                  <Link to="/pages/privacy" onClick={() => onhandleCloseMenu()}>Privacy policy</Link>
                </li>
              </ul>
            </li>
            <li className={pathnames.includes("admin") ? "active" : ""}>
              <a href="/template/admin" target="_blank">Admin</a>
            </li>
            { (!props.location.pathname.includes("provider") && !props.location.pathname.includes("customer"))  && 
            <>
              <li className={pathnames.includes("change-password") ? "active" : ""}>
                <Link to="#" onClick={() => openModal("user")}>Become a Professional</Link>
              </li>
              <li className={pathnames.includes("change-password") ? "active" : ""}>
                <Link to="#" onClick={() => openModal("user")}>Become a User</Link>
              </li>
              </>
            }
      </ul>
    </div>
    <ul className="nav header-navbar-rht">
      { props.location.pathname.includes("provider") && 
        <>
          <li className="nav-item desc-list">
            <Link to="/pages/add-service" className="nav-link header-login">
              <i className="fas fa-plus-circle mr-1" /> <span>Post a Service</span>
            </Link>
          </li>
        </>
      }
     
      { props.location.pathname.includes("customer") && 
        <>
            <li className="nav-item desc-list wallet-menu">
              <Link to="/wallet" className="nav-link header-login">
                <img src={wallet} alt="" className="mr-2 wallet-img" /><span>Wallet:</span> $1875
              </Link>
					  </li>
        </>
      }
      { (props.location.pathname.includes("provider") || props.location.pathname.includes("customer")) && 
      <>
        <li className= {`${isSelected ? "show" : ""} nav-item dropdown logged-item`}>
          <a href="#" className="dropdown-toggle nav-link" onBlur={() => toggle()} onClick={() => toggle()} data-toggle="dropdown">
            <i className="far fa-bell" /> <span className="badge badge-pill bg-yellow">1</span>
          </a>
          <div  className={`${isSelected ? "show" : ""} dropdown-menu dropdown-menu-right  notifications`}>
            <div className="topnav-dropdown-header">
              <span className="notification-title">Notifications</span>
              <a href={"#"} className="clear-noti"> Clear All </a>
            </div>
            <div className="noti-content">
              <ul className="notification-list">
                <li className="notification-message">
                  <a href={"#"}>
                    <div className="media">
                      <span className="avatar avatar-sm">
                        <img className="avatar-img rounded-circle" alt="true" src={IMG01} />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Thomas Herzberg have been subscribed</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">15 Sep 2020 10:20 PM</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href={"#"}>
                    <div className="media">
                      <span className="avatar avatar-sm">
                        <img className="avatar-img rounded-circle" alt="true" src={IMG02} />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Matthew Garcia have been subscribed</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">13 Sep 2020 03:56 AM</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href={"#"}>
                    <div className="media">
                      <span className="avatar avatar-sm">
                        <img className="avatar-img rounded-circle" alt="true" src={IMG03} />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Yolanda Potter have been subscribed</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">12 Sep 2020 09:25 PM</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href={"#"}>
                    <div className="media">
                      <span className="avatar avatar-sm">
                        <img className="avatar-img rounded-circle" alt="User Image" src={IMG04} />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Ricardo Flemings have been subscribed</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">11 Sep 2020 06:36 PM</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href={"#"}>
                    <div className="media">
                      <span className="avatar avatar-sm">
                        <img className="avatar-img rounded-circle" alt="User Image" src={IMG05} />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Maritza Wasson have been subscribed</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">10 Sep 2020 08:42 AM</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href={"#"}>
                    <div className="media">
                      <span className="avatar avatar-sm">
                        <img className="avatar-img rounded-circle" alt="User Image" src={IMG06} />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Marya Ruiz have been subscribed</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">9 Sep 2020 11:01 AM</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href={"#"}>
                    <div className="media">
                      <span className="avatar avatar-sm">
                        <img className="avatar-img rounded-circle" alt="User Image" src={IMG07} />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Richard Hughes have been subscribed</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">8 Sep 2020 06:23 AM</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <a href={"#"}>View all Notifications</a>
            </div>
          </div>
        </li>
        <li className="nav-item logged-item">
        <Link to="/pages/chat" className="nav-link">
          <i className="fa fa-comments" aria-hidden="true" />
        </Link>
      </li>
      {/* /chat */}
      {/* User Menu */}
      </>
      }

      {  props.location.pathname.includes("provider") && 
            <li className={`${isSelectedUserMenu ? "show" : ""} nav-item dropdown has-arrow logged-item`}>
            <a href="#" className="dropdown-toggle nav-link"  onBlur={() => toggleUserMenu()} onClick={() => toggleUserMenu()} data-toggle="dropdown" aria-expanded="false">
              <span className="user-img">
                <img className="rounded-circle" src={Provider1}  width={31} />
              </span>
            </a>
            <div className={`${isSelectedUserMenu ? "show" : ""} dropdown-menu dropdown-menu-right`}>
              <div className="user-header">
                <div className="avatar avatar-sm">
                  <img className="avatar-img rounded-circle" src={Provider1} />
                </div>
                <div className="user-text">
                  <h6 className="text-truncate">Thomas</h6>
                  <p className="text-muted mb-0">Provider</p>
                </div>
              </div>
                <Link className="dropdown-item" to="/provider/provider-dashboard" onClick={() => onhandleCloseMenu()}>Dashboard</Link>
                <Link className="dropdown-item" to="/provider/provider-services" onClick={() => onhandleCloseMenu()}>My Services</Link>
                <Link className="dropdown-item" to="/provider/provider-booking" onClick={() => onhandleCloseMenu()}>Booking List</Link>
                <Link className="dropdown-item" to="/provider/provider-settings" onClick={() => onhandleCloseMenu()}>Profile Settings</Link>
                <Link className="dropdown-item" to="/provider/provider-wallet" onClick={() => onhandleCloseMenu()}>Wallet</Link>
                <Link className="dropdown-item" to="/provider/provider-subscription" onClick={() => onhandleCloseMenu()}>Subscription</Link>
                <Link className="dropdown-item" to="/provider/provider-availability" onClick={() => onhandleCloseMenu()}>Availability</Link>
                <Link className="dropdown-item" to="/pages/chat" onClick={() => onhandleCloseMenu()}>Chat</Link>
                <Link className="dropdown-item" to="/home" onClick={() => onhandleCloseMenu()}>Logout</Link>
            </div>
          </li>
      }

      {  props.location.pathname.includes("customer") && 
            <li className={`${isSelectedUserMenu ? "show" : ""} nav-item dropdown has-arrow logged-item`}>
            <a href="#" className="dropdown-toggle nav-link"  onBlur={() => toggleUserMenu()} onClick={() => toggleUserMenu()} data-toggle="dropdown" aria-expanded="false">
              <span className="user-img">
                <img className="rounded-circle" src={IMG01}  width={31} />
              </span>
            </a>
            <div className={`${isSelectedUserMenu ? "show" : ""} dropdown-menu dropdown-menu-right`}>
              <div className="user-header">
                <div className="avatar avatar-sm">
                  <img className="avatar-img rounded-circle" src={IMG01} />
                </div>
                <div className="user-text">
                  <h6 className="text-truncate">Jeffrey Akridge</h6>
                  <p className="text-muted mb-0">User</p>
                </div>
              </div>
                <Link className="dropdown-item" to="/customer/customer-dashboard" onClick={() => onhandleCloseMenu()}>Dashboard</Link>
                <Link className="dropdown-item" to="/customer/customer-booking" onClick={() => onhandleCloseMenu()}>Booking List</Link>
                <Link className="dropdown-item" to="/customer/customer-setting" onClick={() => onhandleCloseMenu()}>Profile Settings</Link>
                <Link className="dropdown-item" to="/customer/customer-wallet" onClick={() => onhandleCloseMenu()}>Wallet</Link>
                <Link className="dropdown-item" to="/pages/chat" onClick={() => onhandleCloseMenu()}>Chat</Link>
                <Link className="dropdown-item" to="/home" onClick={() => onhandleCloseMenu()}>Logout</Link>
            </div>
          </li>
      }

        { (!props.location.pathname.includes("provider") && !props.location.pathname.includes("customer"))  && 
               <>
               <li className="nav-item">
                 <Link to="#" className="nav-link header-login"  onClick={()=>openModal('login')}>
                   login{" "}
                 </Link>
               </li>{" "}
             </>
        }
    </ul>
  </nav>
  <Modal show={activeModal === 'login' } onHide={()=>handleCloseModal()} centered >
      <Modal.Header closeButton>
          <Modal.Title><h3>Login <span>Truelysell</span></h3></Modal.Title>
        </Modal.Header>
        
        <div className="modal-body">
					<form >
						<div className="form-group form-focus">
							<label className="focus-label">Email</label>
							<input type="email" className="form-control" placeholder="truelysell@example.com" />
						</div>
						<div className="form-group form-focus">
							<label className="focus-label">Password</label>
							<input type="password" className="form-control" placeholder="********" />
						</div>
						<div className="text-right">	
						</div>
						<button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Login</button>
						<div className="login-or">	<span className="or-line"></span>
							<span className="span-or">or</span>
						</div>
						<div className="row form-row social-login">
							<div className="col-6">	<a href="#" className="btn btn-facebook btn-block"><i className="fab fa-facebook-f mr-1"></i> Login</a>
							</div>
							<div className="col-6">	<a href="#" className="btn btn-google btn-block"><i className="fab fa-google mr-1"></i> Login</a>
							</div>
						</div>
						<div className="text-center dont-have">Don’t have an account? <a href="#">Register</a>
						</div>
					</form>
          </div>
				</Modal>
      <Modal show={activeModal === 'user' } onHide={()=>handleCloseModal()} centered >
      <Modal.Header closeButton>
          <Modal.Title><h3>Login <span>Join as a User</span></h3></Modal.Title>
        </Modal.Header>
        
        <div className="modal-body">
        <form action="/template/home">
						<div className="form-group form-focus">
							<label className="focus-label">Name</label>
							<input type="text" className="form-control" placeholder="johndoe@exapmle.com" />
						</div>
						<div className="form-group form-focus">
							<label className="focus-label">Mobile Number</label>
							<input type="text" className="form-control" placeholder="986 452 1236" />
						</div>
						<div className="form-group form-focus">
							<label className="focus-label">Create Password</label>
							<input type="password" className="form-control" placeholder="********" />
						</div>
						<div className="text-right">
							<a className="forgot-link" href="#">Already have an account?</a>
						</div>
						<button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Signup</button>
						<div className="login-or">
							<span className="or-line"></span>
							<span className="span-or">or</span>
						</div>
						<div className="row form-row social-login">
							<div className="col-6">
								<a href="#" className="btn btn-facebook btn-block"><i className="fab fa-facebook-f mr-1"></i> Login</a>
							</div>
							<div className="col-6">
								<a href="#" className="btn btn-google btn-block"><i className="fab fa-google mr-1"></i> Login</a>
							</div>
						</div>
					</form>
          </div>
				</Modal>

        <Modal show={activeModal === 'professional' } onHide={()=>handleCloseModal()} centered >
      <Modal.Header closeButton>
          <Modal.Title><h3>Login <span>Join as a User</span></h3></Modal.Title>
        </Modal.Header>
        
        <div className="modal-body">
        <form>
						<div className="form-group form-focus">
							<label className="focus-label">Name</label>
							<input type="text" className="form-control" placeholder="johndoe@exapmle.com" />
						</div>
						<div className="form-group form-focus">
							<label className="focus-label">Mobile Number</label>
							<input type="text" className="form-control" placeholder="986 452 1236" />
						</div>
						<div className="form-group form-focus">
							<label className="focus-label">Create Password</label>
							<input type="password" className="form-control" placeholder="********" />
						</div>
						<div className="text-right">
							<a className="forgot-link" href="#">Already have an account?</a>
						</div>
						<button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Signup</button>
						<div className="login-or">
							<span className="or-line"></span>
							<span className="span-or">or</span>
						</div>
						<div className="row form-row social-login">
							<div className="col-6">
								<a href="#" className="btn btn-facebook btn-block"><i className="fab fa-facebook-f mr-1"></i> Login</a>
							</div>
							<div className="col-6">
								<a href="#" className="btn btn-google btn-block"><i className="fab fa-google mr-1"></i> Login</a>
							</div>
						</div>
					</form>
          </div>
				</Modal>
    </header>
  );
};

export default Header;
