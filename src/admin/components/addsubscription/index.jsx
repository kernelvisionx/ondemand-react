import React, { Component } from "react";
import SidebarNav from "../sidebar";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";

class AddSubscriptions extends Component {

  constructor(props) {
	super(props)
  }
	
  handleChange(e, field) {

  }

  submitsubscription() {
	const {history} = this.props;
	history.push("/admin/subscriptions")
  }

  render() {
    return (
      <>
        <SidebarNav />
    
        <div className="page-wrapper">
			<div className="content container-fluid">
				<div className="row">
					<div className="col-xl-8 offset-xl-2">

                    <div className="page-header">
							<div className="row">
								<div className="col-sm-12">
                                <h3 className="page-title">Add Subscription</h3>
								</div>
							</div>
						</div>

                        <div className="card">
							<div className="card-body">
							
                            <form>
									<div className="form-group">
										<label>Subscription Name</label>
										<input className="form-control" type="text" placeholder="Free Trial" onChange={this.handleChange.bind(this, 'subscription_name')} />
									</div>
									<div className="form-group">
										<label>Subscription Amount</label>
										<input className="form-control" type="text" onChange={this.handleChange.bind(this, 'subscription_amount')} />
									</div>
									<div className="form-group">
										<label>Subscription Durations</label>
										<select className="form-control select">
											<option>Select Duration</option>
											<option>One Month</option>
											<option>3 Months</option>
											<option>6 Months</option>
											<option>One Year</option>
											<option>2 Years</option>
										</select>
									</div>
									<div className="form-group">
										<label className="d-block">Subscription Status</label>
										<div className="custom-control custom-radio custom-control-inline">
											<input type="radio" id="subscription_active" className="custom-control-input" onChange={this.handleChange.bind(this, 'checked_active')} checked="checked" />
											<label className="custom-control-label" htmlFor="subscription_active">Active</label>
										</div>
										<div className="custom-control custom-radio custom-control-inline">
											<input type="radio" id="subscription_inactive" className="custom-control-input" onChange={this.handleChange.bind(this, 'checked_inactive')} />
											<label className="custom-control-label" htmlFor="subscription_inactive">Inactive</label>
										</div>
									</div>
									<div className="mt-4">
										<button className="btn btn-primary" onClick={()=>this.submitsubscription()} type="submit">Submit</button>
										<Link to="/admin/subscriptions" className="btn btn-link">Cancel</Link>
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

export default withRouter(AddSubscriptions);
