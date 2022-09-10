import React, { Component } from "react";
import Service08 from "../../../assets/images/services/service-08.jpg";

class AddServices extends Component {
  render() {
    return (
	      <>
  <div className="content">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<div className="section-header text-center">
							<h2>Add Service</h2>
						</div>
						<form>
							<div className="service-fields mb-3">
								<h3 className="heading-2">Service Information</h3>
								<div className="row">
									<div className="col-lg-12">
										<div className="form-group">
											<label>Service Title <span className="text-danger">*</span></label> 
											<input className="form-control" type="text" />
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<label>Service Amount <span className="text-danger">*</span></label>
											<input className="form-control" type="text" />
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<label>Service Location <span className="text-danger">*</span></label>
											<input className="form-control" type="text" />
										</div>
									</div>
								</div>
							</div>
							<div className="service-fields mb-3">
								<h3 className="heading-2">Service Category</h3>
								<div className="row">
									<div className="col-lg-6">
										<div className="form-group">
											<label>Category <span className="text-danger">*</span></label>
											<select className="form-control">
												<option>Automobile</option>
												<option>Construction</option>
												<option>Interior</option>
												<option>Cleaning</option>
												<option>Electrical</option>
												<option>Carpentry</option>
												<option>Computer</option>
											</select>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<label>Sub Category <span className="text-danger">*</span></label>
											<select className="form-control">
												<option>House Cleaning</option>
												<option>Full Car Wash</option>
												<option>Roofing</option>
												<option>Indoor Glass</option>
												<option>Convertible Fridge</option>
												<option>Fridge</option>
												<option>Car Wash</option>
												<option>Others</option>
											</select>
										</div>
									</div>
								</div>
							</div>
							<div className="service-fields mb-3">
								<h3 className="heading-2">Service Offer</h3>
								<div className="membership-info">
									<div className="row form-row membership-cont">
										<div className="col-lg-6">
											<div className="form-group">
												<label>Service Offered <span className="text-danger">*</span></label>
												<input className="form-control" type="text" />
											</div>
										</div>
									</div>
								</div>
								<div className="add-more form-group">
									<a href={"#"} className="add-membership"><i className="fas fa-plus-circle"></i> Add More</a>
								</div>
							</div>
							<div className="service-fields mb-3">
								<h3 className="heading-2">Details Information</h3>
								<div className="row">
									<div className="col-lg-12">
										<div className="form-group">
											<label>Descriptions <span className="text-danger">*</span></label>
											<textarea className="form-control service-desc"></textarea>
										</div>
									</div>
								</div>
							</div>
							<div className="service-fields mb-3">
								<h3 className="heading-2">Service Gallery </h3>
								<div className="row">
									<div className="col-lg-12">
										<div className="service-upload">
											<i className="fas fa-cloud-upload-alt"></i> <span>Upload Service Images *</span>
											<input type="file" multiple />
										</div>
										<div>
											<ul className="upload-wrap">
												<li>
													<div className="upload-images">
														<img alt="Service Image" src={Service08} />
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="submit-section">
								<button className="btn btn-primary submit-btn" type="submit">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>       
        
          </>
    );
  }
}
export default AddServices;