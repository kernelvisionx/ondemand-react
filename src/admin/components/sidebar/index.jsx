import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../../assets/images/logo-icon.png"


import ReactDOM from "react-dom";

class SidebarNav extends Component {
    constructor(props){
      super(props);
      this.state={
        show: null
      }
    }
    componentDidMount() {
      let $slimScrolls = $(".slimscroll")
      if($slimScrolls.length > 0) {
        $slimScrolls.slimScroll({
          height: 'auto',
          width: '100%',
          position: 'right',
          size: '7px',
          color: '#ccc',
          allowPageScroll: false,
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

      $('#sidebar-menu a').on('click', function(e) {
        if($(this).parent().hasClass('submenu')) {
          e.preventDefault();
        }
        if(!$(this).hasClass('subdrop')) {
          $('ul', $(this).parents('ul:first')).slideUp(350);
          $('a', $(this).parents('ul:first')).removeClass('subdrop');
          $(this).next('ul').slideDown(350);
          $(this).addClass('subdrop');
        } else if($(this).hasClass('subdrop')) {
          $(this).removeClass('subdrop');
          $(this).next('ul').slideUp(350);
        }
      });
      $('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
    
    
    }
  handleShow(id){
    this.setState({
        show: id
    })
  }

onhandleCloseMenu = (e) => {
  let allElements = Array.from(document.querySelectorAll('.main-wrapper.slide-nav'))
  for (let element of allElements) {
    element.classList.remove('slide-nav')
  }
  let allElements1 = Array.from(document.querySelectorAll('.sidebar-overlay.opened'))
  for (let element of allElements1) {
    element.classList.remove('opened')
  }
  };

  
  render() {
   
   const {  location } = this.props
   let pathname = location.pathname

   return (
    <div className="sidebar" id="sidebar">
    <div className="sidebar-logo">
      <a><img src={logo} className="img-fluid"></img></a>
    </div>
    <div className="sidebar-inner slimscroll">
      <div id="sidebar-menu" className="sidebar-menu">
        <ul>
          <li className={`${'/admin' === pathname ? 'active' : '' }`}>
              <Link to="/admin" exact="true"><i className="fe fe-home"></i><span>Dashboard</span></Link>
          </li>
          <li className={`${'/admin/category' === pathname || '/admin/add-categories' === pathname || '/admin/edit-categories' === pathname ? 'active' : '' }`} onClick={(e) => this.onhandleCloseMenu(e)}>
              <Link to="/admin/category" exact="true"><i className="fas fa-columns" ></i><span>Categories</span></Link>
          </li>
          <li className={`${'/admin/sub-categories' === pathname || '/admin/add-subcategories' === pathname || '/admin/edit-subcategories' === pathname ? 'active' : '' }`} onClick={(e) => this.onhandleCloseMenu(e)}>
              <Link to="/admin/sub-categories" exact="true"><i className="fab fa-buffer"></i><span>Sub Categories</span></Link>
          </li>
          <li className={`${'/admin/services' === pathname || '/admin/services-view' === pathname  ? 'active' : '' }`} onClick={(e) => this.onhandleCloseMenu(e)}>
              <Link to="/admin/services" exact="true"> <i className="fas fa-bullhorn"></i><span>Services</span></Link>
            </li>
            <li className={`${'/admin/booking' === pathname  ? 'active' : '' }`} onClick={(e) => this.onhandleCloseMenu(e)}>
              <Link to="/admin/booking" exact="true"><i className="far fa-calendar-check"></i><span>Booking List</span></Link>
            </li>
            <li className={`${'/admin/payment' === pathname  ? 'active' : '' }`} onClick={(e) => this.onhandleCloseMenu(e)}>
              <Link to="/admin/payment" exact="true"><i className="fas fa-hashtag"></i><span>Payments</span></Link>
            </li>
            <li className={`${'/admin/ratingtype' === pathname || '/admin/add-ratingtype' === pathname || '/admin/edit-ratingtype' === pathname ? 'active' : '' }`} onClick={(e) => this.onhandleCloseMenu(e)}>
              <Link to="/admin/ratingtype" exact="true"> <i className="fas fa-star-half-alt"></i><span>Rating Type</span></Link>
            </li>
            <li className={`${'/admin/rating' === pathname  ? 'active' : '' }`} onClick={(e) => this.onhandleCloseMenu(e)}>
              <Link to="/admin/rating" exact="true"> <i className="fas fa-star"></i><span>Ratings</span></Link>
            </li>
            <li className={`${'/admin/subscriptions' === pathname || '/admin/add-subscriptions' === pathname || '/admin/edit-subscriptions' === pathname ? 'active' : '' }`} onClick={(e) => this.onhandleCloseMenu(e)}>
              <Link to="/admin/subscriptions" exact="true"> <i className="far fa-calendar-alt"></i><span>Subscriptions</span></Link>
            </li>
            <li className={`${'/admin/wallet' === pathname ? 'active' : '' }`} onClick={(e) => this.onhandleCloseMenu(e)}>
              <Link to="/admin/wallet" exact="true"> <i className="fas fa-wallet"></i><span>Wallet</span></Link>
            </li>
            <li className={`${'/admin/service-provider' === pathname ? 'active' : '' }`} onClick={(e) => this.onhandleCloseMenu(e)}>
              <Link to="/admin/service-provider" exact="true"> <i className="fas fa-user-tie"></i><span>Service provider</span></Link>
            </li>
            <li className={`${'/admin/user' === pathname ? 'active' : '' }`} onClick={(e) => this.onhandleCloseMenu(e)}>
              <Link to="/admin/user" exact="true"> <i className="fas fa-user"></i><span>User</span></Link>
            </li>
            <li className={`${'/admin/settings' === pathname ? 'active' : '' }`} onClick={(e) => this.onhandleCloseMenu(e)}>
              <Link to="/admin/settings" exact="true"> <i className="fas fa-cog"></i><span>Settings</span></Link>
            </li>
        </ul>
      </div>
    </div>
  </div>
  );
}
}

export default withRouter(SidebarNav);
