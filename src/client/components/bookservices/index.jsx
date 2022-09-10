import React, { Component } from "react";

class BookService extends Component {

  render() {
    return (
      <>

<div className="content">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<div className="section-header text-center">
							<h2>Book Service</h2>
						</div>
						<form>
							<div className="row">
								<div className="col-lg-6">
									<div className="form-group">
										<label>Service Location <span className="text-danger">*</span></label>
										<input className="form-control" type="text" placeholder="Enter a location" autoComplete="off" />
									</div>                            
								</div>
								<div className="col-lg-6">
									<div className="form-group">
										<label>Service amount</label>
										<input className="form-control" type="text" value="$100" readOnly />
									</div>
								</div>
								<div className="col-lg-6">
								   <div className="form-group">
										<label>Date <span className="text-danger">*</span></label>
										<input className="form-control hasDatepicker" type="text" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="form-group">
										<label>Time slot <span className="text-danger">*</span></label>
										<select className="form-control">
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
										</select>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="form-group">
										<div className="text-center">
											<div id="load_div"></div>
										</div>
										<label>Notes</label>
										<textarea className="form-control" rows="5"></textarea>
									</div>
								</div>
							</div>
							<div className="submit-section">
								<button className="btn btn-primary submit-btn" type="submit">Continue to Book</button>
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
export default BookService;
