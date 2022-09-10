import React, { Component } from "react";
import Sidebar from "../sidebar";

class Availability extends Component {
  render() {
    return (
      <>
        <div className="content">
          <div className="container">
            <div className="row">
              <Sidebar />
					<div className="col-xl-9 col-md-8">
						<div className="card mb-0">
							<div className="card-body">
								<form>
									<div className="form-group">
										<p>Availability <span className="text-danger">*</span>
										</p>
										<div className="row">
											<div className="col-md-12">
												<div className="table-responsive">
													<table className="table availability-table">
														<tbody>
															<tr>
																<td>
																	<input type="checkbox" className="mr-1" /> All Days
																</td>
																<td className="w-180">
																	From time 
																	<span className="time-select mb-1">
																		<select className="form-control">
																			<option>Select Time</option>
																			<option>00:00 AM</option>
																			<option>01:00 AM</option>
																			<option>02:00 AM</option>
																			<option>03:00 AM</option>
																			<option>04:00 AM</option>
																			<option>05:00 AM</option>
																			<option>06:00 AM</option>
																			<option>07:00 AM</option>
																			<option>08:00 AM</option>
																			<option>09:00 AM</option>
																			<option>10:00 AM</option>
																			<option>11:00 AM</option>
																			<option>12:00 PM</option>
																			<option>01:00 PM</option>
																			<option>02:00 PM</option>
																			<option>03:00 PM</option>
																			<option>04:00 PM</option>
																			<option>05:00 PM</option>
																			<option>06:00 PM</option>
																			<option>07:00 PM</option>
																			<option>08:00 PM</option>
																			<option>09:00 PM</option>
																			<option>10:00 PM</option>
																			<option>11:00 PM</option>
																		</select>
																	</span>
																</td>
																<td className="w-155">
																	To time
																	<span className="time-select">
																		<select className="form-control">
																			<option>Select Time</option>
																			<option>00:00 AM</option>
																			<option>01:00 AM</option>
																			<option>02:00 AM</option>
																			<option>03:00 AM</option>
																			<option>04:00 AM</option>
																			<option>05:00 AM</option>
																			<option>06:00 AM</option>
																			<option>07:00 AM</option>
																			<option>08:00 AM</option>
																			<option>09:00 AM</option>
																			<option>10:00 AM</option>
																			<option>11:00 AM</option>
																			<option>12:00 PM</option>
																			<option>01:00 PM</option>
																			<option>02:00 PM</option>
																			<option>03:00 PM</option>
																			<option>04:00 PM</option>
																			<option>05:00 PM</option>
																			<option>06:00 PM</option>
																			<option>07:00 PM</option>
																			<option>08:00 PM</option>
																			<option>09:00 PM</option>
																			<option>10:00 PM</option>
																			<option>11:00 PM</option>
																		</select>
																	</span>
																</td>
															</tr>
													
															<tr>
																<td>
																	<input type="checkbox" className="mr-1" /> Monday
																</td>
																<td className="w-180">
																	From time 
																	<span className="time-select mb-1">
																		<select className="form-control">
																			<option>Select Time</option>
																			<option>00:00 AM</option>
																			<option>01:00 AM</option>
																			<option>02:00 AM</option>
																			<option>03:00 AM</option>
																			<option>04:00 AM</option>
																			<option>05:00 AM</option>
																			<option>06:00 AM</option>
																			<option>07:00 AM</option>
																			<option>08:00 AM</option>
																			<option>09:00 AM</option>
																			<option>10:00 AM</option>
																			<option>11:00 AM</option>
																			<option>12:00 PM</option>
																			<option>01:00 PM</option>
																			<option>02:00 PM</option>
																			<option>03:00 PM</option>
																			<option>04:00 PM</option>
																			<option>05:00 PM</option>
																			<option>06:00 PM</option>
																			<option>07:00 PM</option>
																			<option>08:00 PM</option>
																			<option>09:00 PM</option>
																			<option>10:00 PM</option>
																			<option>11:00 PM</option>
																		</select>
																	</span>
																</td>
																<td className="w-155">
																	To time
																	<span className="time-select">
																		<select className="form-control">
																			<option>Select Time</option>
																			<option>00:00 AM</option>
																			<option>01:00 AM</option>
																			<option>02:00 AM</option>
																			<option>03:00 AM</option>
																			<option>04:00 AM</option>
																			<option>05:00 AM</option>
																			<option>06:00 AM</option>
																			<option>07:00 AM</option>
																			<option>08:00 AM</option>
																			<option>09:00 AM</option>
																			<option>10:00 AM</option>
																			<option>11:00 AM</option>
																			<option>12:00 PM</option>
																			<option>01:00 PM</option>
																			<option>02:00 PM</option>
																			<option>03:00 PM</option>
																			<option>04:00 PM</option>
																			<option>05:00 PM</option>
																			<option>06:00 PM</option>
																			<option>07:00 PM</option>
																			<option>08:00 PM</option>
																			<option>09:00 PM</option>
																			<option>10:00 PM</option>
																			<option>11:00 PM</option>
																		</select>
																	</span>
																</td>
															</tr>
														
															<tr>
																<td>
																	<input type="checkbox" className="mr-1" /> Tuesday
																</td>
																<td className="w-180">
																	From time 
																	<span className="time-select mb-1">
																		<select className="form-control">
																			<option>Select Time</option>
																			<option>00:00 AM</option>
																			<option>01:00 AM</option>
																			<option>02:00 AM</option>
																			<option>03:00 AM</option>
																			<option>04:00 AM</option>
																			<option>05:00 AM</option>
																			<option>06:00 AM</option>
																			<option>07:00 AM</option>
																			<option>08:00 AM</option>
																			<option>09:00 AM</option>
																			<option>10:00 AM</option>
																			<option>11:00 AM</option>
																			<option>12:00 PM</option>
																			<option>01:00 PM</option>
																			<option>02:00 PM</option>
																			<option>03:00 PM</option>
																			<option>04:00 PM</option>
																			<option>05:00 PM</option>
																			<option>06:00 PM</option>
																			<option>07:00 PM</option>
																			<option>08:00 PM</option>
																			<option>09:00 PM</option>
																			<option>10:00 PM</option>
																			<option>11:00 PM</option>
																		</select>
																	</span>
																</td>
																<td className="w-155">
																	To time
																	<span className="time-select">
																		<select className="form-control">
																			<option>Select Time</option>
																			<option>00:00 AM</option>
																			<option>01:00 AM</option>
																			<option>02:00 AM</option>
																			<option>03:00 AM</option>
																			<option>04:00 AM</option>
																			<option>05:00 AM</option>
																			<option>06:00 AM</option>
																			<option>07:00 AM</option>
																			<option>08:00 AM</option>
																			<option>09:00 AM</option>
																			<option>10:00 AM</option>
																			<option>11:00 AM</option>
																			<option>12:00 PM</option>
																			<option>01:00 PM</option>
																			<option>02:00 PM</option>
																			<option>03:00 PM</option>
																			<option>04:00 PM</option>
																			<option>05:00 PM</option>
																			<option>06:00 PM</option>
																			<option>07:00 PM</option>
																			<option>08:00 PM</option>
																			<option>09:00 PM</option>
																			<option>10:00 PM</option>
																			<option>11:00 PM</option>
																		</select>
																	</span>
																</td>
															</tr>
												
															<tr>
																<td>
																	<input type="checkbox" className="mr-1" /> Wednesday
																</td>
																<td className="w-180">
																	From time 
																	<span className="time-select mb-1">
																		<select className="form-control">
																			<option>Select Time</option>
																			<option>00:00 AM</option>
																			<option>01:00 AM</option>
																			<option>02:00 AM</option>
																			<option>03:00 AM</option>
																			<option>04:00 AM</option>
																			<option>05:00 AM</option>
																			<option>06:00 AM</option>
																			<option>07:00 AM</option>
																			<option>08:00 AM</option>
																			<option>09:00 AM</option>
																			<option>10:00 AM</option>
																			<option>11:00 AM</option>
																			<option>12:00 PM</option>
																			<option>01:00 PM</option>
																			<option>02:00 PM</option>
																			<option>03:00 PM</option>
																			<option>04:00 PM</option>
																			<option>05:00 PM</option>
																			<option>06:00 PM</option>
																			<option>07:00 PM</option>
																			<option>08:00 PM</option>
																			<option>09:00 PM</option>
																			<option>10:00 PM</option>
																			<option>11:00 PM</option>
																		</select>
																	</span>
																</td>
																<td className="w-155">
																	To time
																	<span className="time-select">
																		<select className="form-control">
																			<option>Select Time</option>
																			<option>00:00 AM</option>
																			<option>01:00 AM</option>
																			<option>02:00 AM</option>
																			<option>03:00 AM</option>
																			<option>04:00 AM</option>
																			<option>05:00 AM</option>
																			<option>06:00 AM</option>
																			<option>07:00 AM</option>
																			<option>08:00 AM</option>
																			<option>09:00 AM</option>
																			<option>10:00 AM</option>
																			<option>11:00 AM</option>
																			<option>12:00 PM</option>
																			<option>01:00 PM</option>
																			<option>02:00 PM</option>
																			<option>03:00 PM</option>
																			<option>04:00 PM</option>
																			<option>05:00 PM</option>
																			<option>06:00 PM</option>
																			<option>07:00 PM</option>
																			<option>08:00 PM</option>
																			<option>09:00 PM</option>
																			<option>10:00 PM</option>
																			<option>11:00 PM</option>
																		</select>
																	</span>
																</td>
															</tr>
														
															<tr>
																<td>
																	<input type="checkbox" className="mr-1" /> Thursday
																</td>
																<td className="w-180">
																	From time 
																	<span className="time-select mb-1">
																		<select className="form-control">
																			<option>Select Time</option>
																			<option>00:00 AM</option>
																			<option>01:00 AM</option>
																			<option>02:00 AM</option>
																			<option>03:00 AM</option>
																			<option>04:00 AM</option>
																			<option>05:00 AM</option>
																			<option>06:00 AM</option>
																			<option>07:00 AM</option>
																			<option>08:00 AM</option>
																			<option>09:00 AM</option>
																			<option>10:00 AM</option>
																			<option>11:00 AM</option>
																			<option>12:00 PM</option>
																			<option>01:00 PM</option>
																			<option>02:00 PM</option>
																			<option>03:00 PM</option>
																			<option>04:00 PM</option>
																			<option>05:00 PM</option>
																			<option>06:00 PM</option>
																			<option>07:00 PM</option>
																			<option>08:00 PM</option>
																			<option>09:00 PM</option>
																			<option>10:00 PM</option>
																			<option>11:00 PM</option>
																		</select>
																	</span>
																</td>
																<td className="w-155">
																	To time
																	<span className="time-select">
																		<select className="form-control">
																			<option>Select Time</option>
																			<option>00:00 AM</option>
																			<option>01:00 AM</option>
																			<option>02:00 AM</option>
																			<option>03:00 AM</option>
																			<option>04:00 AM</option>
																			<option>05:00 AM</option>
																			<option>06:00 AM</option>
																			<option>07:00 AM</option>
																			<option>08:00 AM</option>
																			<option>09:00 AM</option>
																			<option>10:00 AM</option>
																			<option>11:00 AM</option>
																			<option>12:00 PM</option>
																			<option>01:00 PM</option>
																			<option>02:00 PM</option>
																			<option>03:00 PM</option>
																			<option>04:00 PM</option>
																			<option>05:00 PM</option>
																			<option>06:00 PM</option>
																			<option>07:00 PM</option>
																			<option>08:00 PM</option>
																			<option>09:00 PM</option>
																			<option>10:00 PM</option>
																			<option>11:00 PM</option>
																		</select>
																	</span>
																</td>
															</tr>
														
															
															<tr>
																<td>
																	<input type="checkbox" className="mr-1" /> Friday
																</td>
																<td className="w-180">
																	From time 
																	<span className="time-select mb-1">
																		<select className="form-control">
																			<option>Select Time</option>
																			<option>00:00 AM</option>
																			<option>01:00 AM</option>
																			<option>02:00 AM</option>
																			<option>03:00 AM</option>
																			<option>04:00 AM</option>
																			<option>05:00 AM</option>
																			<option>06:00 AM</option>
																			<option>07:00 AM</option>
																			<option>08:00 AM</option>
																			<option>09:00 AM</option>
																			<option>10:00 AM</option>
																			<option>11:00 AM</option>
																			<option>12:00 PM</option>
																			<option>01:00 PM</option>
																			<option>02:00 PM</option>
																			<option>03:00 PM</option>
																			<option>04:00 PM</option>
																			<option>05:00 PM</option>
																			<option>06:00 PM</option>
																			<option>07:00 PM</option>
																			<option>08:00 PM</option>
																			<option>09:00 PM</option>
																			<option>10:00 PM</option>
																			<option>11:00 PM</option>
																		</select>
																	</span>
																</td>
																<td className="w-155">
																	To time
																	<span className="time-select">
																		<select className="form-control">
																			<option>Select Time</option>
																			<option>00:00 AM</option>
																			<option>01:00 AM</option>
																			<option>02:00 AM</option>
																			<option>03:00 AM</option>
																			<option>04:00 AM</option>
																			<option>05:00 AM</option>
																			<option>06:00 AM</option>
																			<option>07:00 AM</option>
																			<option>08:00 AM</option>
																			<option>09:00 AM</option>
																			<option>10:00 AM</option>
																			<option>11:00 AM</option>
																			<option>12:00 PM</option>
																			<option>01:00 PM</option>
																			<option>02:00 PM</option>
																			<option>03:00 PM</option>
																			<option>04:00 PM</option>
																			<option>05:00 PM</option>
																			<option>06:00 PM</option>
																			<option>07:00 PM</option>
																			<option>08:00 PM</option>
																			<option>09:00 PM</option>
																			<option>10:00 PM</option>
																			<option>11:00 PM</option>
																		</select>
																	</span>
																</td>
															</tr>
													
															
															<tr>
																<td>
																	<input type="checkbox" className="mr-1" /> Saturday
																</td>
																<td className="w-180">
																	From time 
																	<span className="time-select mb-1">
																		<select className="form-control">
																			<option>Select Time</option>
																			<option>00:00 AM</option>
																			<option>01:00 AM</option>
																			<option>02:00 AM</option>
																			<option>03:00 AM</option>
																			<option>04:00 AM</option>
																			<option>05:00 AM</option>
																			<option>06:00 AM</option>
																			<option>07:00 AM</option>
																			<option>08:00 AM</option>
																			<option>09:00 AM</option>
																			<option>10:00 AM</option>
																			<option>11:00 AM</option>
																			<option>12:00 PM</option>
																			<option>01:00 PM</option>
																			<option>02:00 PM</option>
																			<option>03:00 PM</option>
																			<option>04:00 PM</option>
																			<option>05:00 PM</option>
																			<option>06:00 PM</option>
																			<option>07:00 PM</option>
																			<option>08:00 PM</option>
																			<option>09:00 PM</option>
																			<option>10:00 PM</option>
																			<option>11:00 PM</option>
																		</select>
																	</span>
																</td>
																<td className="w-155">
																	To time
																	<span className="time-select">
																		<select className="form-control">
																			<option>Select Time</option>
																			<option>00:00 AM</option>
																			<option>01:00 AM</option>
																			<option>02:00 AM</option>
																			<option>03:00 AM</option>
																			<option>04:00 AM</option>
																			<option>05:00 AM</option>
																			<option>06:00 AM</option>
																			<option>07:00 AM</option>
																			<option>08:00 AM</option>
																			<option>09:00 AM</option>
																			<option>10:00 AM</option>
																			<option>11:00 AM</option>
																			<option>12:00 PM</option>
																			<option>01:00 PM</option>
																			<option>02:00 PM</option>
																			<option>03:00 PM</option>
																			<option>04:00 PM</option>
																			<option>05:00 PM</option>
																			<option>06:00 PM</option>
																			<option>07:00 PM</option>
																			<option>08:00 PM</option>
																			<option>09:00 PM</option>
																			<option>10:00 PM</option>
																			<option>11:00 PM</option>
																		</select>
																	</span>
																</td>
															</tr>
														
															
															<tr>
																<td>
																	<input type="checkbox" className="mr-1" /> Sunday
																</td>
																<td className="w-180">
																	From time 
																	<span className="time-select mb-1">
																		<select className="form-control">
																			<option>Select Time</option>
																			<option>00:00 AM</option>
																			<option>01:00 AM</option>
																			<option>02:00 AM</option>
																			<option>03:00 AM</option>
																			<option>04:00 AM</option>
																			<option>05:00 AM</option>
																			<option>06:00 AM</option>
																			<option>07:00 AM</option>
																			<option>08:00 AM</option>
																			<option>09:00 AM</option>
																			<option>10:00 AM</option>
																			<option>11:00 AM</option>
																			<option>12:00 PM</option>
																			<option>01:00 PM</option>
																			<option>02:00 PM</option>
																			<option>03:00 PM</option>
																			<option>04:00 PM</option>
																			<option>05:00 PM</option>
																			<option>06:00 PM</option>
																			<option>07:00 PM</option>
																			<option>08:00 PM</option>
																			<option>09:00 PM</option>
																			<option>10:00 PM</option>
																			<option>11:00 PM</option>
																		</select>
																	</span>
																</td>
																<td className="w-155">
																	To time
																	<span className="time-select">
																		<select className="form-control">
																			<option>Select Time</option>
																			<option>00:00 AM</option>
																			<option>01:00 AM</option>
																			<option>02:00 AM</option>
																			<option>03:00 AM</option>
																			<option>04:00 AM</option>
																			<option>05:00 AM</option>
																			<option>06:00 AM</option>
																			<option>07:00 AM</option>
																			<option>08:00 AM</option>
																			<option>09:00 AM</option>
																			<option>10:00 AM</option>
																			<option>11:00 AM</option>
																			<option>12:00 PM</option>
																			<option>01:00 PM</option>
																			<option>02:00 PM</option>
																			<option>03:00 PM</option>
																			<option>04:00 PM</option>
																			<option>05:00 PM</option>
																			<option>06:00 PM</option>
																			<option>07:00 PM</option>
																			<option>08:00 PM</option>
																			<option>09:00 PM</option>
																			<option>10:00 PM</option>
																			<option>11:00 PM</option>
																		</select>
																	</span>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
									<div className="submit-section text-right">
										<button className="btn btn-primary submit-btn" type="submit">Submit</button>
									</div>
								</form>
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
export default Availability;
