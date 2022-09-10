import React, { Component } from "react";
import SidebarNav from "../sidebar";
import IMG01 from "../../assets/images/customer/user-01.jpg";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

class Profile extends Component {

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
									<h3 className="page-title">Profile</h3>
								</div>
							</div>
						</div>
			
						
						<div className="card">
							<div className="card-body profile-menu">
                            <Tabs
      id="controlled-tab-example"
      defaultActiveKey="home"
    >
      <Tab eventKey="home" title="Home">
      <div className="tab-pane fade show active" id="profile_settings" role="tabpanel">
										<form>
											<div className="form-group">
												<label>Username</label>
												<input type="text" className="form-control" value="admin" disabled />
											</div>
											<div className="form-group">
												<label>Profile Image</label>
												<div className="media align-items-center">
													<div className="media-left">
														<img className="rounded-circle profile-img avatar-view-img" src={IMG01} alt="" width="100" height="100" />
													</div>
													<div className="media-body">
														<div className="uploader">
															<button className="btn btn-secondary btn-sm ml-3">Change profile picture</button>
														</div>
													</div>
												</div>
											</div>
											<div className="mt-4 save-form">
												<button className="btn btn-primary save-btn" type="button">Save</button>
											</div>
										</form>
									</div>
      </Tab>
      <Tab eventKey="profile" title="Profile">
      <form>
											<div className="form-group">
												<label>Current Password</label>
												<input type="password" className="form-control" />
											</div>
											<div className="form-group">
												<label>New Password</label>
												<input type="password" className="form-control" />
											</div>
											<div className="form-group">
												<label>Repeat Password</label>
												<input type="password" className="form-control" />
											</div>
											<div className="mt-4 save-form">
												<button className="btn save-btn btn-primary" type="submit">Save</button>
											</div>
										</form>
      </Tab>
    
    </Tabs>
								
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

export default Profile;
