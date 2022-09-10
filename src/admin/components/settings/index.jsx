import React, { Component } from "react";
import SidebarNav from "../sidebar";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import logo from "../../assets/images/logo.png";
import favicon from "../../assets/images/favicon.png";

class Settings extends Component {
 
  handleChange(e, field) {

  }	

  render() {
 
    return (
      <>
        <SidebarNav />
        <div className="page-wrapper settings">
			<div className="content container-fluid">
			
				
				<div className="page-header">
					<div className="row">
						<div className="col-12">
							<h3 className="page-title">General Settings</h3>
						</div>
					</div>
				</div>

								<Tabs defaultActiveKey="general" id="uncontrolled-tab-example">
									<Tab eventKey="general" title="General Settings">
										<div className="card mb-0">
												<div className="card-header">
													<h4 className="card-title">General Settings</h4>
												</div>
												<div className="card-body">
													<div className="form-group">
														<label>Website Name</label>
														<input type="text" className="form-control" placeholder="Dreamguy's Technologies" onChange={this.handleChange.bind(this, "webiste_name")} />
													</div>
													<div className="form-group">
														<label>Contact Details</label>
														<input type="text" className="form-control"  onChange={this.handleChange.bind(this, "webiste_name")}/>
													</div>
													<div className="form-group">
														<label>Mobile Number</label>
														<input type="text" className="form-control" onChange={this.handleChange.bind(this, "webiste_name")}/>
													</div>
													<div className="form-group">
														<label>Currency</label>
														<p><strong>USD $ </strong></p>
													</div>
													<div className="form-group">
														<label>Website Logo</label>
														<div className="uploader">
															<input type="file" className="form-control" />
														</div>
														<p className="form-text text-muted small mb-0">Recommended image size is <b>150px x 150px</b>
														</p>
														<img src={logo} className="site-logo" alt="" />
													</div>
													<div className="form-group">
														<label>Favicon</label>
														<div className="uploader">
															<input type="file" className="form-control" />
														</div>
														<p className="form-text text-muted small mb-0">Recommended image size is <b>16px x 16px</b> or <b>32px x 32px</b></p>
														<p className="form-text text-muted small mb-1">Accepted formats: only png and ico</p>
														<img src={favicon} className="fav-icon" alt="" />
													</div>
												</div>
											</div>
  										</Tab>
									<Tab eventKey="email" title="Email Settings">
									<div className="card mb-0">
											
												<div className="card-body">
													
													<form> 
									<div className="form-group">
										<div className="custom-control custom-radio custom-control-inline">
											<input className="custom-control-input" id="php_mail" name="gateway_type" type="radio" onChange={this.handleChange.bind(this, "webiste_name")} checked />
											<label className="custom-control-label" htmlFor="php_mail">PHP Mail</label>
										</div>
										<div className="custom-control custom-radio custom-control-inline">
											<input className="custom-control-input" id="smtp_mail" name="gateway_type" type="radio" onChange={this.handleChange.bind(this, "webiste_name")} />
											<label className="custom-control-label" htmlFor="smtp_mail">SMTP</label>
										</div>
									</div>
									
									<div className="phpmail mt-3">
										<div className="form-group">
											<label>Email From Address</label>
											<input type="email" className="form-control" onChange={this.handleChange.bind(this, "webiste_name")} />
										</div>
										<div className="form-group">
											<label>Email Password</label>
											<input type="password" className="form-control" onChange={this.handleChange.bind(this, "webiste_name")} />
										</div>
										<div className="form-group">
											<label>Emails From Name</label>
											<input type="text" className="form-control" onChange={this.handleChange.bind(this, "webiste_name")} />
										</div>
									</div>
									
									<div className="smtpmail">
										<div className="form-group">
											<label>Email From Address</label>
											<input type="email" className="form-control" onChange={this.handleChange.bind(this, "webiste_name")} />
										</div>
										<div className="form-group">
											<label>Email Password</label>
											<input type="password" className="form-control" onChange={this.handleChange.bind(this, "webiste_name")} />
										</div>
										<div className="form-group">
											<label>Email Host</label>
											<input type="text" className="form-control" onChange={this.handleChange.bind(this, "webiste_name")}/>
										</div>
										<div className="form-group">
											<label>Email Port</label>
											<input type="text" className="form-control" onChange={this.handleChange.bind(this, "webiste_name")} />
										</div>
									</div>
									<div className="mt-4">
										<button type="submit" className="btn btn-primary">Save Changes</button>
									</div>
								</form>
												</div>
											</div>
  </Tab>
  <Tab eventKey="payment" title="Payment Gateway">
  <div className="card mb-0">
											
												<div className="card-body">
												<form>
									<h4 className="text-primary">Stripe</h4>
									<div className="form-group">
										<label>Stripe Option</label>
										<div>
											<div className="custom-control custom-radio custom-control-inline">
												<input className="custom-control-input" id="sandbox" name="gateway_type" value="sandbox" type="radio" onChange={this.handleChange.bind(this, "gateway_name")} checked  />
												<label className="custom-control-label" htmlFor="sandbox">Sandbox</label>
											</div>
											<div className="custom-control custom-radio custom-control-inline">
												<input className="custom-control-input" id="livepaypal" name="gateway_type" value="live" type="radio" onChange={this.handleChange.bind(this, "gateway_name")} />
												<label className="custom-control-label" htmlFor="livepaypal">Live</label>
											</div>
										</div>
									</div>
									<div className="form-group">
										<label>Gateway Name</label>
										<input type="text" value="Stripe" className="form-control" placeholder="Gateway Name" onChange={this.handleChange.bind(this, "gateway_name")} />
									</div>
									<div className="form-group">
										<label>API Key</label>
										<input type="text" value="pk_test_AealxxOygZz84AruCGadWvUV00mJQZdLvr" className="form-control" onChange={this.handleChange.bind(this, "api_key")} />
									</div>
									<div className="form-group">
										<label>Rest Key</label>
										<input type="text" value="sk_test_8HwqAWwBd4C4E77bgAO1jUgk00hDlERgn3" className="form-control" onChange={this.handleChange.bind(this, "rest_key")} />
									</div>
									<div className="mt-4">
										<button className="btn btn-primary" type="submit">Submit</button>
										<a href="stripe_payment_gateway.html" className="btn btn-link ml-2">Cancel</a>
									</div>
								</form>
												</div>
											</div>
  </Tab>
  <Tab eventKey="sms" title="SMS Gateway">
  <div className="card">
								<div className="card-body">
									<div className="row align-items-center">
										<div className="col">
											<h5>Default OTP</h5>
											<p className="mb-0">You can use default otp <strong>1234</strong> for Tom Burns purpose</p>
										</div>
										<div className="col-auto">
											<div className="status-toggle">
												<input id="default_otp" className="check" type="checkbox" onChange={this.handleChange.bind(this, "api_key")} checked />
												<label htmlFor="default_otp" className="checktoggle">checkbox</label>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="card">
								<div className="card-body">
									<h4 className="card-title">Nexmo</h4>
									<div className="form-group">
										<label>API Key</label>
										<input type="text" className="form-control" onChange={this.handleChange.bind(this, "api_key")} />
									</div>
									<div className="form-group">
										<label>API Secret Key</label>
										<input type="text" className="form-control" onChange={this.handleChange.bind(this, "secret_key")} />
									</div>
									<div className="form-group">
										<label>Sender ID</label>
										<input type="text" className="form-control" onChange={this.handleChange.bind(this, "sender_id")} />
									</div>
									<div className="mt-4">
										<button type="submit" className="btn btn-primary center-block">Save Changes</button>
									</div>
								</div>
							</div>
</Tab>
</Tabs>
          </div>
        </div>        
      </>
    );
  }
}

export default Settings;
