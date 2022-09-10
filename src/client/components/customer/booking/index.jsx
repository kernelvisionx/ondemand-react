import React, { Component } from "react";
import Sidebar from "../sidebar";
import service01 from "../../../assets/images/services/service-08.jpg";
import service02 from "../../../assets/images/services/service-09.jpg";
import service03 from "../../../assets/images/services/service-10.jpg";
import service05 from "../../../assets/images/services/service-11.jpg";

import user1 from "../../../assets/images/customer/user-01.jpg";
import user2 from "../../../assets/images/customer/user-02.jpg";
import user3 from "../../../assets/images/customer/user-03.jpg";
import user5 from "../../../assets/images/customer/user-05.jpg";
import {Link} from "react-router-dom";

class Booking extends Component {
  render() {
    return (
      <>
        <div className="content">
          <div className="container">
            <div className="row">
              <Sidebar />

              <div className="col-xl-9 col-md-8">
                <div className="row align-items-center mb-4">
                  <div className="col">
                    <h4 className="widget-title mb-0">My Bookings</h4>
                  </div>
                  <div className="col-auto">
                    <div className="sort-by">
                      <select className="form-control-sm custom-select">
                        <option>All</option>
                        <option>Pending</option>
                        <option>Inprogress</option>
                        <option>Complete Request</option>
                        <option>Rejected</option>
                        <option>Cancelled</option>
                        <option>Completed</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="bookings">
                  <div className="booking-list">
                    <div className="booking-widget">
                      <Link to="/pages/service-details" className="booking-img">
                        <img src={service01} alt="User Image" />
                      </Link>
                      <div className="booking-det-info">
                        <h3>
                          <Link to="/pages/service-details">
                            Building Construction Services
                          </Link>
                        </h3>
                        <ul className="booking-details">
                          <li>
                            <span>Booking Date</span> 23 Jul 2020{" "}
                            <span className="badge badge-pill badge-prof bg-primary">
                              Inprogress
                            </span>
                          </li>
                          <li>
                            <span>Booking time</span> 12:00:00 - 13:00:00
                          </li>
                          <li>
                            <span>Amount</span> $100
                          </li>
                          <li>
                            <span>Location</span> Kuala Lumpur, Malaysia
                          </li>
                          <li>
                            <span>Phone</span> 412-355-7471
                          </li>
                          <li>
                            <span>Provider</span>
                            <div className="avatar avatar-xs mr-1">
                              <img
                                className="avatar-img rounded-circle"
                                alt="User Image"
                                src={user1}
                              />
                            </div>
                            Thomas Herzberg
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="booking-action">
                      <a href="#" className="btn btn-sm bg-info-light">
                        <i className="far fa-eye"></i> Chat
                      </a>
                      <a href={"#"} className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times"></i> Cancel the Service
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bookings">
                  <div className="booking-list">
                    <div className="booking-widget">
                      <Link to="/pages/service-details" className="booking-img">
                        <img src={service02} alt="User Image" />
                      </Link>
                      <div className="booking-det-info">
                        <h3>
                          <Link to="/pages/service-details">
                            Commercial Painting Services
                          </Link>
                        </h3>
                        <ul className="booking-details">
                          <li>
                            <span>Booking Date</span> 22 Jul 2020{" "}
                            <span className="badge badge-pill badge-prof bg-primary">
                              Inprogress
                            </span>
                          </li>
                          <li>
                            <span>Booking time</span> 11:00:00 - 12:00:00
                          </li>
                          <li>
                            <span>Amount</span> $25
                          </li>
                          <li>
                            <span>Location</span> IFL Building A, Phnom Penh,
                            Cambodia
                          </li>
                          <li>
                            <span>Phone</span> 412-355-7471
                          </li>
                          <li>
                            <span>Provider</span>
                            <div className="avatar avatar-xs mr-1">
                              <img
                                className="avatar-img rounded-circle"
                                alt="User Image"
                                src={user2}
                              />
                            </div>
                            Matthew Garcia
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="booking-action">
                      <Link to="/pages/chat" className="btn btn-sm bg-info-light">
                        <i className="far fa-eye"></i> Chat
                      </Link>
                      <a href={"#"} className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times"></i> Cancel the Service
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bookings">
                  <div className="booking-list">
                    <div className="booking-widget">
                      <Link to="/pages/service-details" className="booking-img">
                        <img src={service03} alt="User Image" />
                      </Link>
                      <div className="booking-det-info">
                        <h3>
                          <Link to="/pages/service-details">Plumbing Services</Link>
                        </h3>
                        <ul className="booking-details">
                          <li>
                            <span>Booking Date</span> 23 Jul 2020{" "}
                            <span className="badge badge-pill badge-prof bg-warning">
                              Pending
                            </span>
                          </li>
                          <li>
                            <span>Booking time</span> 09:00:00 - 10:00:00
                          </li>
                          <li>
                            <span>Amount</span> $50
                          </li>
                          <li>
                            <span>Location</span> K-JJ, Quezon City, National
                            Capital Region, Filipijnen
                          </li>
                          <li>
                            <span>Phone</span>
                          </li>
                          <li>
                            <span>Provider</span>
                            <div className="avatar avatar-xs mr-1">
                              <img
                                className="avatar-img rounded-circle"
                                alt="User Image"
                                src={user3}
                              />
                            </div>
                            Yolanda Potter
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="booking-action">
                      <a href={"#"} className="btn btn-sm bg-danger-light">
                        {" "}
                        <i className="fas fa-times"></i> Cancel the Service
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bookings">
                  <div className="booking-list">
                    <div className="booking-widget">
                      <Link to="/pages/service-details" className="booking-img">
                        <img src={service05} alt="User Image" />
                      </Link>
                      <div className="booking-det-info">
                        <h3>
                          <Link to="/pages/service-details">
                            Wooden Carpentry Work
                          </Link>
                        </h3>
                        <ul className="booking-details">
                          <li>
                            <span>Booking Date</span> 23 Jul 2020{" "}
                            <span className="badge badge-pill badge-prof bg-warning">
                              Pending
                            </span>
                          </li>
                          <li>
                            <span>Booking time</span> 12:00:00 - 13:00:00
                          </li>
                          <li>
                            <span>Amount</span> $14
                          </li>
                          <li>
                            <span>Location</span> 223 Jehovah Drive Roanoke
                          </li>
                          <li>
                            <span>Phone</span> 412-355-7471
                          </li>
                          <li>
                            <span>Provider</span>
                            <div className="avatar avatar-xs mr-1">
                              <img
                                className="avatar-img rounded-circle"
                                alt="User Image"
                                src={user5}
                              />
                            </div>
                            Ricardo Flemings
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="booking-action">
                      <a href={"#"} className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times"></i> Cancel the Service
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pagination">
                  <ul>
                    <li className="active">
                      <a href={"#"}>1</a>
                    </li>
                    <li>
                      <a href={"#"}>2</a>
                    </li>
                    <li>
                      <a href={"#"}>3</a>
                    </li>
                    <li>
                      <a href={"#"}>4</a>
                    </li>
                    <li className="arrow">
                      <a href={"#"}>
                        <i className="fas fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Booking;
