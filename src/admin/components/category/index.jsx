import React, { Component } from "react";
import SidebarNav from "../sidebar";
import { Table } from "antd";
import 'antd/dist/antd.css';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import {Link} from 'react-router-dom';
import {
  itemRender,
  onShowSizeChange,
} from "../../components/paginationfunction";
import "../../assets/css/antdstyle.css";
class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {
          open: false,
          show: null,
          data: [
           {
             id: 1,
             image: "IMG01",
             category: "Computer",
             date:"11 Sep 2020",

           },
           {
            id: 2,
            image: "IMG02",
            category: "Interior",
            date:"09 Sep 2020",
            
          },
          {
            id: 3,
            image: "IMG05",
            category: "Car Wash",
            date:"03 Sep 2020",
            
          },
          {
            id: 4,
            image: "IMG05",
            category: "Plumbing",
            date:"06 Sep 2020",
            
          }
          ],
        };
      }

        
      handleShow = () => {
        this.setState({
          open: !this.state.open
        })
      }

    
  render() {

    const { data } = this.state;
    const columns = [
        {
          title: "Id",
          dataIndex: "id",
          render: (text, record) => (
          <>{text}</>
          ),
        },
        {
          title: "Category",
          dataIndex: "category",
          render: (text, record) => (
           <>
                <img alt="" src={record.PatientImg} />{text}
            </>
          ),
          sorter: (a, b) => a.category.length - b.category.length,
        },
        {
          title: "Date",
          dataIndex: "date",
          render: (text, record) => (
           <>
             {text}
            </>
          ),
          sorter: (a, b) => a.date.length - b.date.length,
        },
        {
          title: 'Actions',
          render: (text, record) => (
                    <div className="actions">
                        <Link to="/admin/edit-categories" className="btn btn-sm bg-success-light" ><i className="far fa-edit mr-1"></i> Edit</Link>
                     
                    </div>
                ),
        },
      
      ];

    return (
      <>
        <SidebarNav />
        <div className="page-wrapper">
			<div className="content container-fluid">
			
		
				<div className="page-header">
					<div className="row">
						<div className="col">
							<h3 className="page-title">Categories</h3>
						</div>
						<div className="col-auto text-right">
					  	  <a className="btn btn-white filter-btn" onClick={() => this.handleShow()} href={"#"} id="filter_search">
								<i className="fas fa-filter"></i>
							</a>
							<Link to="/admin/add-categories" className="btn btn-primary add-button ml-3">
								<i className="fas fa-plus"></i>
							</Link>
						</div>
					</div>
				</div>
      
      <Collapse in={this.state.open}>
      <div id="example-collapse-text">
      <div className="card filter-card">
      <div className="card-body pb-0">
						<form>
							<div className="row filter-row">
								<div className="col-sm-6 col-md-3">
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
								</div>
								<div className="col-sm-6 col-md-3">
									<div className="form-group">
										<label>From Date</label>
										<div className="cal-icon">
											<input className="form-control datetimepicker" type="text" />
										</div>
									</div>
								</div>
								<div className="col-sm-6 col-md-3">
									<div className="form-group">
										<label>To Date</label>
										<div className="cal-icon">
											<input className="form-control datetimepicker" type="text" />
										</div>
									</div>
								</div>
								<div className="col-sm-6 col-md-3">
									<div className="form-group">
										<button className="btn btn-primary btn-block" type="submit">Submit</button>
									</div>
								</div>
							</div>
						</form>
					</div>
          </div>
        </div>
     
      </Collapse>

        <div className="row">
					<div className="col-md-12">
						<div className="card">
							<div className="card-body">
								<div className="table-responsive">

                  <Table
                        className="table table-hover table-center mb-0 datatable"
                        style={{ overflowX: "auto", width:"100%"}}
                        columns={columns}
                        bordered
                        dataSource={data}
                        rowKey={(record) => record.id}
                        showSizeChanger={true}
                        pagination={{
                          total: data.length,
                          showTotal: (total, range) =>
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          showSizeChanger: true,
                          onShowSizeChange: onShowSizeChange,
                          itemRender: itemRender,
                        }}
                      />
                 
                 </div>
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

export default Categories;
