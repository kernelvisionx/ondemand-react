import React, { Component } from "react";
import provider from "../../assets/images/provider/provider-01.jpg";
import {Link} from "react-router-dom";


class Sidebar extends Component {
  render() {
    const pathname = window.location.pathname
    return (
      <>
        <div className="col-xl-3 col-md-4 theiaStickySidebar">
          <div className="mb-4">
            <div className="d-sm-flex flex-row flex-wrap text-center text-sm-left align-items-center">
              <img
                alt="profile"
                src={provider}
                className="avatar-lg rounded-circle"
              />
              <div className="ml-sm-3 ml-md-0 ml-lg-3 mt-2 mt-sm-0 mt-md-2 mt-lg-0">
                <h6 className="mb-0">Thomas Herzberg</h6>
                <p className="text-muted mb-0">Member Since Apr 2020</p>
              </div>
            </div>
          </div>
          <div className="widget settings-menu">
            <ul>
              <li className="nav-item">
                <Link to="/provider/provider-dashboard" className={`${'/template/provider/provider-dashboard' === pathname ? 'nav-link active' : 'nav-link' }`} >
                  <i className="fas fa-chart-line"></i> <span>Dashboard</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/provider/provider-services" className={`${'/template/provider/provider-services' === pathname ? 'nav-link active' : 'nav-link' }`}>
                  <i className="far fa-address-book"></i>{" "}
                  <span>My Services</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/provider/provider-booking" className={`${'/template/provider/provider-booking' === pathname ? 'nav-link active' : 'nav-link' }`}>
                  <i className="far fa-calendar-check"></i>{" "}
                  <span>Booking List</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/provider/provider-settings" className={`${'/template/provider/provider-settings' === pathname ? 'nav-link active' : 'nav-link' }`}>
                  <i className="far fa-user"></i> <span>Profile Settings</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/provider/provider-wallet" className={`${'/template/provider/provider-wallet' === pathname ? 'nav-link active' : 'nav-link' }`}>
                  <i className="far fa-money-bill-alt"></i> <span>Wallet</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/provider/provider-subscription" className={`${'/template/provider/provider-subscription' === pathname ? 'nav-link active' : 'nav-link' }`}>
                  <i className="far fa-calendar-alt"></i>{" "}
                  <span>Subscription</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/provider/provider-availability" className={`${'/template/provider/provider-availability' === pathname ? 'nav-link active' : 'nav-link' }`}>
                  <i className="far fa-clock"></i> <span>Availability</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/provider/provider-reviews" className={`${'/template/provider/provider-reviews' === pathname ? 'nav-link active' : 'nav-link' }`}>
                  <i className="far fa-star"></i> <span>Reviews</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/provider/provider-payment" className={`${'/template/provider/provider-payment' === pathname ? 'nav-link active' : 'nav-link' }`}>
                  <i className="fas fa-hashtag"></i> <span>Payment</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default Sidebar;
