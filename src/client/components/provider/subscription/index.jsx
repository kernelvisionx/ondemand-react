import React, { Component } from "react";
import Sidebar from "../sidebar";

class Subscription extends Component {
  render() {
    return (
      <>
        <div className="content">
          <div className="container">
            <div className="row">
              <Sidebar />
              <div className="col-xl-9 col-md-8">
						<div className="row pricing-box">
							<div className="col-xl-4 col-md-6 ">
								<div className="card">
									<div className="card-body">
										<div className="pricing-header">
											<h2>Basic</h2>
											<p>Monthly Price</p>
										</div>
										<div className="pricing-card-price">
											<h3 className="heading2 price">$0.00</h3>
											<p>Duration: <span>3 Months</span></p>
										</div>
										<ul className="pricing-options">
											<li><i className="far fa-check-circle"></i> One listing submission</li>
											<li><i className="far fa-check-circle"></i> 90 days expiration</li>
										</ul>
										<a href={"#"} className="btn btn-primary btn-block">Select Plan</a>
									</div>
								</div>
							</div>
							<div className="col-xl-4 col-md-6 ">
								<div className="card">
									<div className="card-body">
										<div className="pricing-header">
											<h2>Standard</h2>
											<p>Monthly Price</p>
										</div>
										<div className="pricing-card-price">
											<h3 className="heading2 price">$50.00</h3>
											<p>Duration: <span>6 Months</span></p>
										</div>
										<ul className="pricing-options">
											<li><i className="far fa-check-circle"></i> One listing submission</li>
											<li><i className="far fa-check-circle"></i> 180 days expiration</li>
										</ul>
										<a href={"#"} className="btn btn-primary btn-block">Select Plan</a>
									</div>
								</div>
							</div>
							<div className="col-xl-4 col-md-6 pricing-selected">
								<div className="card">
									<div className="card-body">
										<div className="pricing-header">
											<h2>Enterprice</h2>
											<p>Monthly Price</p>
										</div>
										<div className="pricing-card-price">
											<h3 className="heading2 price">$1200.00</h3>
											<p>Duration: <span>12 Months</span></p>
										</div>
										<ul className="pricing-options">
											<li><i className="far fa-check-circle"></i> One listing submission</li>
											<li><i className="far fa-check-circle"></i> 360 days expiration</li>
										</ul>
										<a href={"#"} className="btn btn-primary btn-block">Subscribed</a>
									</div>
								</div>
							</div>
						</div>
						<div className="card">
							<div className="card-body">
								<div className="plan-det">
									<h6 className="title">Plan Details</h6>
									<ul className="row">
										<li className="col-sm-4">
											<p><span className="text-muted">Started On</span> 15 Jul 2020</p>
										</li>
										<li className="col-sm-4">
											<p><span className="text-muted">Price</span> $1502.00</p>
										</li>
										<li className="col-sm-4">
											<p><span className="text-muted">Expired On</span> 15 Jul 2021</p>
										</li>
									</ul>
									<h6 className="title">Last Payment</h6>
									<ul className="row">
										<li className="col-sm-4">
											<p>Paid at 15 Jul 2020</p>
										</li>
										<li className="col-sm-4">
											<p><span className="amount">$1502.00 </span>  <span className="badge bg-success-light">Paid</span></p>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<h5 className="mb-4">Subscribed Details</h5>	
						<div className="card transaction-table mb-0">
							<div className="card-body">
								<div className="table-responsive">
									<table className="table table-center mb-0 no-footer">
										<thead>
											<tr>
												<th>Plan</th>
												<th>Start Date</th>
												<th>End Date</th>
												<th>Amount</th>
												<th>Status</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Basic</td>
												<td>03-04-2020</td>
												<td>02-07-2020</td>
												<td>0.00</td>
												<td><span className="badge bg-success-light">Paid</span></td>
											</tr>
											<tr>
												<td>Standard</td>
												<td>04-04-2020</td>
												<td>01-10-2020</td>
												<td>50.00</td>
												<td><span className="badge bg-success-light">Paid</span></td>
											</tr>
											<tr>
												<td>Enterprice</td>
												<td>28-05-2020</td>
												<td>28-05-2021</td>
												<td>1200.00</td>
												<td><span className="badge bg-success-light">Paid</span></td>
											</tr>
										</tbody>
									</table>
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
export default Subscription;
