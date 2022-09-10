import React, { Component } from "react";
import SidebarNav from "../../sidebar";
import {Link} from "react-router-dom";
import { withRouter } from 'react-router'

class AddCategories extends Component {

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
									<h3 className="page-title">Add Category 123</h3>
								</div>
							</div>
						</div>
						
						
						<div className="card">
							<div className="card-body">
							
							
								<form>
									<div className="form-group">
										<label>Category Name</label>
										<input className="form-control" type="text" />
									</div>
									<div className="form-group">
										<label>Category Image</label>
										<input className="form-control" type="file" />
									</div>
									<div className="mt-4">
										<button onClick={()=> this.gotoAddPage()} className="btn btn-primary" type="submit">Add Category</button>
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

export default withRouter(AddCategories);
