import React, { Component } from "react";
import SidebarNav from "../sidebar";
import {Link} from "react-router-dom";

class EditSubscriptions extends Component {
	handleChange (e, field) {

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
										<h3 className="page-title">Edit Subscription</h3>
									</div>
								</div>
							</div>

							<div className="card">
								<div className="card-body">
									<form action="/template/admin/subscriptions">
										<div className="form-group">
											<label>Subscription Name</label>
											<input className="form-control" type="text" value="Enterprice" onChange={this.handleChange.bind(this, 'enterprice')} />
											</div>
										<div className="form-group">
											<label>Subscription Amount</label>
											<input className="form-control" type="text" value="$1200"  onChange={this.handleChange.bind(this, 'amount')}/>
										</div>
										<div className="form-group">
											<label>Subscription Duration</label>
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
												<input type="radio" name="edit_subscription" id="edit_subscription_active" onChange={this.handleChange.bind(this, 'radio1')} className="custom-control-input" checked="checked" />
												<label className="custom-control-label" htmlFor="edit_subscription_active">Active</label>
											</div>
											<div className="custom-control custom-radio custom-control-inline">
												<input type="radio" name="edit_subscription" id="edit_subscription_inactive" onChange={this.handleChange.bind(this, 'radio2')} className="custom-control-input" />
												<label className="custom-control-label" htmlFor="edit_subscription_inactive">Inactive</label>
											</div>
										</div>
										<div className="mt-4">
											<button className="btn btn-primary" type="submit">Save Changes</button>
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

export default EditSubscriptions;
