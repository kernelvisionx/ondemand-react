import React, { Component } from "react";
import SidebarNav from "../../sidebar";
import {Link} from "react-router-dom"

import category1 from "../../../assets/images/category/category-01.jpg";
class EditCategories extends Component {
	handleChange(e, field) {
		
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
									<h3 className="page-title">Edit Category</h3>
								</div>
							</div>
						</div>
				
						
						<div className="card">
							<div className="card-body">
							
							
								<form action="/template/admin/categories">
									<div className="form-group">
										<label>Category Name</label>
										<input className="form-control" type="text" value="Automobile" onChange={this.handleChange.bind(this, "category_name")} />
										
									</div>
									<div className="form-group">
										<label>Category Image</label>
										<input className="form-control" type="file" />
									</div>
									<div className="form-group">
										<div className="avatar">
											<img className="avatar-img rounded" alt="" src={category1} />
										</div>
									</div>
									<div className="mt-4">
										<button className="btn btn-primary" type="submit">Save Changes</button>
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

export default EditCategories;
