import React, { Component } from "react";
import SidebarNav from "../../sidebar";
import {Link} from "react-router-dom";
import { withRouter } from 'react-router'

class AddSubCategories extends Component {

  constructor(props) {
	super(props)
  }

  gotoAddPage() {
	const {history} = this.props;
	history.push('/admin/category')
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
									<h3 className="page-title">Add Sub Category</h3>
								</div>
							</div>
						</div>
						
						
						<div className="card">
							<div className="card-body">
								<form>
                                    <div className="form-group">
										<label>Category</label>
										<select className="form-control select">
											<option>Select category</option>
											<option>Automobile</option>
											<option>Construction</option>
											<option>Interior</option>
											<option>Cleaning</option>
											<option>Electrical</option>
											<option>Carpentry</option>
											<option>Computer</option>
										</select>
									</div>
									<div className="form-group">
										<label>Sub Category Name</label>
										<input className="form-control" type="text" />
									</div>
									<div className="form-group">
										<label>Sub Category Image</label>
										<input className="form-control" type="file" />
									</div>
									<div className="mt-4">
										<button onClick={()=> this.gotoAddPage()} className="btn btn-primary" type="submit">Add Subcategory</button>
										<Link to="/admin/category" className="btn btn-link">Cancel</Link>
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

export default withRouter(AddSubCategories);
