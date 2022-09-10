import React, { Component } from "react";
import user from "../../assets/images/customer/user-01.jpg";
import {Link} from "react-router-dom";

class Sidebar extends Component {
  render() {
	const pathname = window.location.pathname;
	
    return (
      <>
       	<div className="col-xl-3 col-md-4">
						<div className="mb-4">
							<div className="d-sm-flex flex-row flex-wrap text-center text-sm-left align-items-center">
								<img alt="profile image" src={user} className="avatar-lg rounded-circle" />
								<div className="ml-sm-3 ml-md-0 ml-lg-3 mt-2 mt-sm-0 mt-md-2 mt-lg-0">
									<h6 className="mb-0">Jeffrey Akridge</h6>
									<p className="text-muted mb-0">Member Since Apr 2020</p>
								</div>
							</div>
						</div>
						<div className="widget settings-menu">
							<ul role="tablist" className="nav nav-tabs">
								<li className="nav-item current">
									<Link to="/customer/customer-dashboard" className={`${'/template/customer/customer-dashboard' === pathname ? 'nav-link active' : 'nav-link' }`} >
										<i className="fas fa-chart-line"></i> <span>Dashboard</span>
									</Link>
								</li>
								<li className="nav-item current">
									<Link to="/customer/customer-favourites" className={`${'/template/customer/customer-favourites' === pathname ? 'nav-link active' : 'nav-link' }`} >
										<i className="fas fa-heart"></i> <span>Favourites</span>
									</Link>
								</li>
								<li className="nav-item current">
									<Link to="/customer/customer-booking" className={`${'/template/customer/customer-booking' === pathname ? 'nav-link active' : 'nav-link' }`}>
										<i className="far fa-calendar-check"></i> <span>My Bookings</span>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/customer/customer-setting" className={`${'/template/customer/customer-setting' === pathname ? 'nav-link active' : 'nav-link' }`}>
										<i className="far fa-user"></i> <span>Profile Settings</span>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/customer/customer-wallet" className={`${'/template/customer/customer-wallet' === pathname ? 'nav-link active' : 'nav-link' }`}>
										<i className="far fa-money-bill-alt"></i> <span>Wallet</span>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/customer/customer-review" className={`${'/template/customer/customer-review' === pathname ? 'nav-link active' : 'nav-link' }`}>
										<i className="far fa-star"></i> <span>Reviews</span>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/customer/customer-payment" className={`${'/template/customer/customer-payment' === pathname ? 'nav-link active' : 'nav-link' }`}>
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
