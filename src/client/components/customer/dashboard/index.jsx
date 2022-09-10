import React, { Component } from "react";
import Sidebar from "../sidebar";
import {Link} from "react-router-dom";

class CustomerDashboard extends Component {
  render() {
    return (
      <>
        <div className="content">
          <div className="container">
            <div className="row">
              <Sidebar />
              <div className="col-xl-9 col-md-8">
						<div className="row">
							<div className="col-lg-4">
								<Link to="/customer/customer-booking" className="dash-widget dash-bg-1">
									<span className="dash-widget-icon">223</span>
									<div className="dash-widget-info">
										<span>Bookings</span>
									</div>
								</Link>
							</div>
							<div className="col-lg-4">
								<Link to="/customer/customer-review" className="dash-widget dash-bg-2">
									<span className="dash-widget-icon">16</span>
									<div className="dash-widget-info">
										<span>Reviews</span>
									</div>
								</Link>
							</div>
							<div className="col-lg-4">
								<Link to="/pages/notification" className="dash-widget dash-bg-3">
									<span className="dash-widget-icon">1</span>
									<div className="dash-widget-info">
										<span>Notification</span>
									</div>
								</Link>
							</div>
						</div>
					</div>
           </div>
          </div>
        </div>
      </>
    );
  }
}
export default CustomerDashboard;
