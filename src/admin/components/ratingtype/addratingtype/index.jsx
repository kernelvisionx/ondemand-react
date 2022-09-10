import React, { Component } from "react";
import SidebarNav from "../../sidebar";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";



class AddRatingtype extends Component {
  constructor(props) {
    super(props)
  }
  submitrating() {
    const {history} = this.props;
    history.push("/admin/ratingtype")
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
								<div className="col">
									<h3 className="page-title">Add Rating Type</h3>
								</div>
							</div>
						</div>
						
						
						<div className="card">
							<div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Ratings Type</label>
                                        <input className="form-control" type="text" />
                                    </div>
                                    <div className="mt-4">
                                        <button className="btn btn-primary" onClick={()=> this.submitrating()} type="submit">Submit</button>
                                        <Link to="/admin/ratingtype" className="btn btn-link">Cancel</Link>
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

export default withRouter(AddRatingtype);
