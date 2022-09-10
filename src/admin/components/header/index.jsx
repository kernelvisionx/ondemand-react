import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import logoicon from "../../assets/images/logo-icon.png";
import avatar from "../../assets/images/customer/user-01.jpg";

import $ from "jquery";

import IMG01 from "../../assets/images/provider/provider-01.jpg";
import IMG02 from "../../assets/images/provider/provider-02.jpg";
import IMG03 from "../../assets/images/provider/provider-03.jpg";
import IMG04 from "../../assets/images/provider/provider-04.jpg";
import IMG05 from "../../assets/images/provider/provider-05.jpg";
import IMG06 from "../../assets/images/provider/provider-06.jpg";
import IMG07 from "../../assets/images/provider/provider-07.jpg";

import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      isSelectedUserMenu: false
    }
    this.toggle = this.toggle.bind(this);
    this.toggleUserMenu = this.toggleUserMenu.bind(this);
  }

  toggle() {
    this.setState({
      isSelected: !this.state.isSelected,
      isSelectedUserMenu: false,
    });
  }

  toggleUserMenu() {
    this.setState({
      isSelectedUserMenu: !this.state.isSelectedUserMenu,
      isSelected: false,
    });
  }

  componentDidMount() {

    
    if (window.location.pathname.includes('admin')) {
      require('../../assets/css/style.css')
      require('../../assets/css/feathericon.min.css')
      require('../../assets/js/jquery-3.2.1.min.js');
      require('../../assets/js/jquery.slimscroll.min.js');
      require('../../assets/plugins/fontawesome/css/fontawesome.min.css')
      require('../../assets/plugins/fontawesome/css/all.min.css')
    }
    
      let $wrapper = $(".main-wrapper")
      let $slimScrolls = $('.slimscroll');

      // $(window).scroll(function() {    
      //   var scroll = $(window).scrollTop();
    
      //   //>=, not <=
      //   if (scroll >= 200) {
      //       //clearHeader, not clearheader - caps H
      //       $('.header').toggleClass('fixed-header');
      //   }
      // }); //missing );
    // scroll down
    $(window).scroll(function() {
			if ($(window).scrollTop() >= 30) {
				$('.header').addClass('fixed-header');
			} else {
				$('.header').removeClass('fixed-header');
			}
		});
			
      $('#toggle_btn').on('click', function (e) {
        if($('body').hasClass('mini-sidebar')) {
          $('body').removeClass('mini-sidebar');
          $('.subdrop + ul').slideDown();
        } else {
          $('body').addClass('mini-sidebar');
          $('.subdrop + ul').slideUp();
        }
        return false;
      });

      $('body').append('<div class="sidebar-overlay"></div>');
        $(document).on('click', '#mobile_btn', function() {
          
          $wrapper.toggleClass('slide-nav');
          $('.sidebar-overlay').toggleClass('opened');
          $('html').addClass('menu-opened');
          $('#task_window').removeClass('opened');
          return false;
      });

      $('body').append('<div class="sidebar-overlay"></div>');

      // Sidebar overlay

      if($slimScrolls.length > 0) {
        $slimScrolls.slimScroll({
          height: 'auto',
          width: '100%',
          position: 'right',
          size: '7px',
          color: '#ccc',
          wheelStep: 10,
          touchScrollStep: 100
        });
        var wHeight = $(window).height() - 60;
        $slimScrolls.height(wHeight);
        $('.sidebar .slimScrollDiv').height(wHeight);
        $(window).resize(function() {
          var rHeight = $(window).height() - 60;
          $slimScrolls.height(rHeight);
          $('.sidebar .slimScrollDiv').height(rHeight);
        });
      }
      
      $(".sidebar-overlay").on("click", function () {
        $wrapper.removeClass('slide-nav');
        $(".sidebar-overlay").removeClass("opened");
        $('html').removeClass('menu-opened');
      });	

      $(document).on('mouseover', function(e) {
        e.stopPropagation();
        if($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
          var targ = $(e.target).closest('.sidebar').length;
          if(targ) {
            $('body').addClass('expand-menu');
            $('.subdrop + ul').slideDown();
          } else {
            $('body').removeClass('expand-menu');
            $('.subdrop + ul').slideUp();
          }
          return false;
        }
        
        $(window).scroll(function() {
          if ($(window).scrollTop() >= 30) {
            $('.header').addClass('fixed-header');
          } else {
            $('.header').removeClass('fixed-header');
          }
        });
        
        $(document).on('click', '#loginSubmit', function() {
          $("#adminSignIn").submit();
        });
        
      });
  }


  render() {
    const exclusionArray = [
      "/admin/login",
      "/admin/register",
      "/admin/forgotPassword",
      "/admin/lockscreen",
      "/admin/404",
      "/admin/500",
    ];
    if (exclusionArray.indexOf(this.props.location.pathname) >= 0) {
      return "";
    }
    return (
    <div className="header">
    <div className="header-left"> 
      <a href="/admin" className="logo">
        <img src={logo} alt="Logo" />
      </a>
      <a href="/admin" className="logo logo-small">
        <img src={logoicon} alt="Logo" width="30" height="30" />
      </a>
    </div>
    <a href="#0" id="toggle_btn">
          <i className="fe fe-text-align-left" />
        </a>
     
        {/* Mobile Menu Toggle */}
        <a  className="mobile_btn" id="mobile_btn">
          <i className="fa fa-bars" />
        </a>
    <ul className="nav user-menu">
      {/* Notifications */}
      {/* Notifications */}
<li className= {`${this.state.isSelected ? "show" : ""} nav-item dropdown noti-dropdown`}>
  <a href="#" className="dropdown-toggle nav-link" onBlur={() => this.toggle()} onClick={() => this.toggle()} data-toggle="dropdown">
    <i className="far fa-bell" />  <span className="badge badge-pill" />
  </a>
  <div  className={`${this.state.isSelected ? "show" : ""} dropdown-menu dropdown-menu-right notifications`}>
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
      {/* /Notifications */}
      {/* User Menu */}
      <li className={`${this.state.isSelectedUserMenu ? "show" : ""} nav-item dropdown`}>
          <a href={"#"} onBlur={() => this.toggleUserMenu()} onClick={() => this.toggleUserMenu()} className="dropdown-toggle user-link  nav-link" data-toggle="dropdown">
            <span className="user-img">
              <img className="rounded-circle" src={avatar} width={40} alt="Admin" />
            </span>
          </a>
          <div className={`${this.state.isSelectedUserMenu ? "show" : ""} dropdown-menu dropdown-menu-right`}>
            <Link className="dropdown-item" to="/admin/profile">Profile</Link>
            <Link className="dropdown-item" to="/admin">Logout</Link>
          </div>
        </li>
      {/* /User Menu */}
    </ul>
  </div>
    );
  }
}

export default Header;
