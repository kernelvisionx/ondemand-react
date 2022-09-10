import React, { Component } from "react";
import Sidebar from "../sidebar";
import {Link} from "react-router-dom";

class ProviderDashboard extends Component {
  render() {
    return (
      <>
        <div className="content">
          <div className="container">
            <div className="row">
              <Sidebar />
              <div className="col-xl-9 col-md-8">
                <h4 className="widget-title">Dashboard</h4>
                <div className="row">
                  <div className="col-lg-4">
                    <a
                      href="/provider/provider-booking"
                      className="dash-widget dash-bg-1"
                    >
                      <span className="dash-widget-icon">245</span>
                      <div className="dash-widget-info">
                        <span>Bookings</span>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4">
                    <Link
                      to="/provider/provider-services"
                      className="dash-widget dash-bg-2"
                    >
                      <span className="dash-widget-icon">66</span>
                      <div className="dash-widget-info">
                        <span>Services</span>
                      </div>
                    </Link>
                  </div>
                  <div className="col-lg-4">
                    <Link
                      to="/pages/notification"
                      className="dash-widget dash-bg-3"
                    >
                      <span className="dash-widget-icon">8</span>
                      <div className="dash-widget-info">
                        <span>Notification</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="card mb-0">
                  <div className="row no-gutters">
                    <div className="col-lg-8">
                      <div className="card-body">
                        <h6 className="title">Plan Details</h6>
                        <div className="sp-plan-name">
                          <h6 className="title">
                            Gold{" "}
                            <span className="badge badge-success badge-pill">
                              Active
                            </span>
                          </h6>
                          <p>
                            Subscription ID:{" "}
                            <span className="text-base">100394949</span>
                          </p>
                        </div>
                        <ul className="row">
                          <li className="col-6 col-lg-6">
                            <p>Started On 15 Jul, 2020</p>
                          </li>
                          <li className="col-6 col-lg-6">
                            <p>Price $1502.00</p>
                          </li>
                        </ul>
                        <h6 className="title">Last Payment</h6>
                        <ul className="row">
                          <li className="col-sm-6">
                            <p>Paid at 15 Jul 2020</p>
                          </li>
                          <li className="col-sm-6">
                            <p>
                              <span className="text-success">Paid</span>{" "}
                              <span className="amount">$1502.00</span>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="sp-plan-action card-body">
                        <div className="mb-2">
                          <a
                            href="/provider/provider-subscription"
                            className="btn btn-primary"
                          >
                            <span>Change Plan</span>
                          </a>
                        </div>
                        <div className="next-billing">
                          <p>
                            Next Billing on <span>15 Jul, 2021</span>
                          </p>
                        </div>
                      </div>
                    </div>
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
export default ProviderDashboard;
