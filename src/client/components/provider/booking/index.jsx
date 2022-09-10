import React, { Component } from "react";
import Sidebar from "../sidebar";
import service01 from "../../../assets/images/services/service-01.jpg";
import service02 from "../../../assets/images/services/service-02.jpg";
import service03 from "../../../assets/images/services/service-03.jpg";
import service04 from "../../../assets/images/services/service-04.jpg";
import service05 from "../../../assets/images/services/service-05.jpg";
import service06 from "../../../assets/images/services/service-06.jpg";
import service07 from "../../../assets/images/services/service-07.jpg";

import user1 from "../../../assets/images/customer/user-01.jpg";
import user2 from "../../../assets/images/customer/user-02.jpg";
import user3 from "../../../assets/images/customer/user-03.jpg";
import user4 from "../../../assets/images/customer/user-04.jpg";
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
								<h4 className="widget-title mb-0">Booking List</h4>
							</div>
							<div className="col-auto">
								<div className="sort-by">
									<select className="form-control-sm custom-select searchFilter" id="status">
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
						<div id="dataList">
							<div className="bookings">
								<div className="booking-list">
									<div className="booking-widget">
										<Link to="/pages/service-details" className="booking-img">
											<img src={service02} alt="User Image" />  
										</Link>
										<div className="booking-det-info">
											<h3>
												<Link to="/pages/service-details">Car Repair Services</Link>
											</h3>
											<ul className="booking-details">
												<li>
													<span>Booking Date</span> 23 Jul 2020 <span className="badge badge-pill badge-prof bg-success">Complete Request sent to User</span>
												</li>
												<li><span>Booking time</span> 13:00:00 - 14:00:00</li>
												<li><span>Amount</span> $500</li>
												<li><span>Location</span> 223 Jehovah Drive Roanoke</li>
												<li><span>Phone</span> 410-242-3850</li>
												<li>
													<span>User</span>
													<div className="avatar avatar-xs mr-1">
														<img className="avatar-img rounded-circle" alt="User Image" src={user1} />
													</div>
													Jeffrey Akridge
												</li>
											</ul>
										</div>
									</div>
									<div className="booking-action"></div>
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
												<Link to="/pages/service-details">Electric Panel Repairing Service</Link>
											</h3>
											<ul className="booking-details">
												<li>
													<span>Booking Date</span> 21 Jul 2020 <span className="badge badge-pill badge-prof bg-primary">Inprogress</span>
												</li>
												<li><span>Booking time</span> 17:00:00 - 18:00:00</li>
												<li><span>Amount</span> $500</li>
												<li><span>Location</span> 3281 West Fork Street Great Falls</li>
												<li><span>Phone</span> 410-242-3850</li>
												<li>
													<span>User</span>
													<div className="avatar avatar-xs mr-1">
														<img className="avatar-img rounded-circle" alt="User Image" src={user2} />
													</div>
													Nancy Olson
												</li>
											</ul>
										</div>
									</div>
									<div className="booking-action">
										<a href="#" className="btn btn-sm bg-info-light"><i className="far fa-eye"></i> Chat</a>
										<a href={"#"} className="btn btn-sm bg-danger-light" data-toggle="modal" data-target="#myCancel"><i className="fas fa-times"></i> Cancel the Service</a>
										<a href={"#"} className="btn btn-sm bg-success-light"><i className="fas fa-check"></i> Complete Request to user</a>
									</div>
								</div>
							</div>
							
							<div className="bookings">
								<div className="booking-list">
									<div className="booking-widget">
										<Link to="/pages/service-details" className="booking-img">
											<img src={service04} alt="User Image" />
										</Link>
										<div className="booking-det-info">
											<h3>
												<Link to="/pages/service-details">Steam Car Wash</Link>
											</h3>
											<ul className="booking-details">
												<li>
													<span>Booking Date</span> 21 Jul 2020 <span className="badge badge-pill badge-prof bg-warning">Pending</span>
												</li>
												<li><span>Booking time</span> 13:00:00 - 14:00:00</li>
												<li><span>Amount</span> $500</li>
												<li><span>Location</span> 596 Walton Street Ogden</li>
												<li><span>Phone</span> 410-242-3850</li>
												<li>
													<span>User</span>
													<div className="avatar avatar-xs mr-1">
														<img className="avatar-img rounded-circle" alt="User Image" src={user3} />
													</div>
													Ramona Kingsley
												</li>
											</ul>
										</div>
									</div>
									<div className="booking-action">
										<a href={"#"} className="btn btn-sm bg-success-light"><i className="fas fa-check"></i> User Request Accept</a>
										<a href={"#"} className="btn btn-sm bg-danger-light" data-toggle="modal" data-target="#myCancel">	<i className="fas fa-times"></i> Cancel the Service</a>
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
												<Link to="/pages/service-details">House Cleaning Services</Link>
											</h3>
											<ul className="booking-details">
												<li>
													<span>Booking Date</span> 23 Jul 2020 <span className="badge badge-pill badge-prof bg-danger">Rejected by User</span>
												</li>
												<li><span>Booking time</span> 12:00:00 - 13:00:00</li>
												<li><span>Amount</span> $500</li>
												<li><span>Location</span> 4371 Maloy Court Rush Center</li>
												<li><span>Phone</span> 410-242-3850</li>
												<li>
													<span>User</span>
													<div className="avatar avatar-xs mr-1">
														<img className="avatar-img rounded-circle" alt="User Image" src={user4} />
													</div>
													Ricardo Lung
												</li>
											</ul>
										</div>
									</div>
									<div className="booking-action">
										<button type="button" data-id="542" className="btn btn-sm bg-default-light"><i className="fas fa-info-circle"></i> Reason</button>
									</div>
								</div>
							</div>
							<div className="bookings">
								<div className="booking-list">
									<div className="booking-widget">
										<Link to="/pages/service-details" className="booking-img">
											<img src={service06} alt="User Image" />
										</Link>
										<div className="booking-det-info">
											<h3>
												<Link to="/pages/service-details">Computer & Server AMC Service</Link>
											</h3>
											<ul className="booking-details">
												<li>
													<span>Booking Date</span> 22 Jul 2020 <span className="badge badge-pill badge-prof bg-warning">Pending</span>
												</li>
												<li><span>Booking time</span> 12:00:00 - 13:00:00</li>
												<li><span>Amount</span> $4</li>
												<li><span>Location</span> 1346 Simpson Street Davenport</li>
												<li><span>Phone</span> 410-242-3850</li>
												<li>
													<span>User</span>
													<div className="avatar avatar-xs mr-1">
														<img className="avatar-img rounded-circle" alt="User Image" src={user5} />
													</div>
													Annette Silva
												</li>
											</ul>
										</div>
									</div>
									<div className="booking-action">
										<a href={"#"} className="btn btn-sm bg-success-light"><i className="fas fa-check"></i> User Request Accept</a>
										<a href={"#"} className="btn btn-sm bg-danger-light" data-toggle="modal" data-target="#myCancel"><i className="fas fa-times"></i> Cancel the Service</a>
									</div>
								</div>
							</div>
							
							<div className="bookings">
								<div className="booking-list">
									<div className="booking-widget">
										<Link to="/pages/service-details" className="booking-img">
											<img src={service07} alt="User Image" />
										</Link>
										<div className="booking-det-info">
											<h3>
												<Link to="/pages/service-details">Interior Designing</Link>
											</h3>
											<ul className="booking-details">
												<li>
													<span>Booking Date</span> 22 Jul 2020 <span className="badge badge-pill badge-prof bg-warning">Pending</span>
												</li>
												<li><span>Booking time</span> 11:00:00 - 12:00:00</li>
												<li><span>Amount</span> $100</li>
												<li><span>Location</span> 171 Jadewood Farms Newark</li>
												<li><span>Phone</span> 412-355-7471</li>
												<li>
													<span>User</span>
													<div className="avatar avatar-xs mr-1">
														<img className="avatar-img rounded-circle" alt="User Image" src={user5} />
													</div>
													Stephen Wilson
												</li>
											</ul>
										</div>
									</div>
									<div className="booking-action">
										<a href={"#"} className="btn btn-sm bg-success-light"><i className="fas fa-check"></i> User Request Accept</a>
										<a href={"#"} className="btn btn-sm bg-danger-light" data-toggle="modal" data-target="#myCancel"><i className="fas fa-times"></i> Cancel the Service</a>
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
										<a href={"#"}><i className="fas fa-angle-right"></i></a>
									</li>
								</ul>
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
export default Booking;