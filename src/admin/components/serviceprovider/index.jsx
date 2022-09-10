import React, { Component } from "react";
import SidebarNav from "../sidebar";
import { Table } from "antd";
import Collapse from 'react-bootstrap/Collapse';
import IMG01 from "../../assets/images/customer/user-01.jpg";
import IMG02 from "../../assets/images/customer/user-02.jpg";
import IMG03 from "../../assets/images/customer/user-03.jpg";
import IMG04 from "../../assets/images/customer/user-04.jpg";
import IMG05 from "../../assets/images/customer/user-05.jpg";
import {
  itemRender,
  onShowSizeChange,
} from "../../components/paginationfunction";


class ServiceProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
          show: null,
          open: false,
          data: [
           {
             id: 1,
             image: IMG01,
             name: "Jeffrey Akridge",
             contact: "832-212-0082",
             email:"thomasherzberg@example.com",
             date: "12 Sep 2020",
             subscription: "Enterprice"
            },
            {
                id: 2,
                image: IMG02,
                name: "Ricardo Flemings",
                contact: "631-374-3243",
                email:"ricardoflemings@example.com",
                date: "15 Aug 2020",
                subscription: "Standard"
               },
               {
                id: 3,
                image: IMG03,
                name: "Richard Hughes",
                contact: "937-846-6789",
                email:"thomasherzberg@example.com",
                date: "12 Sep 2020",
                subscription: "Enterprice"
               },
               {
                id: 4,
                image: IMG04,
                name: "Ricardo Lung",
                contact: "419-523-6835",
                email:"davidmorrison@example.com",
                date: "15 Sep 2020",
                subscription: "Enterprice"
               },
               {
                id: 5,
                image: IMG05,
                name: "Nina Wilson",
                contact: "937-846-6789",
                email:"ninawilson@example.com",
                date: "12 Sep 2020",
                subscription: "Enterprice"
               },
          ],
        };
      }
      handleShow() {
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
          title: "Name",
          dataIndex: "name",
          render: (text, record) => (
           <><div className="avatar avatar-sm mr-2">
                <img alt="" src={record.image} className="avatar-img rounded-circle"/>
            </div>
            {text}</>
          ),
          sorter: (a, b) => a.name.length - b.name.length,
        },
        {
          title: "Email",
          dataIndex: "email",
          render: (text, record) => (
           <>
             {text}
            </>
          ),
          sorter: (a, b) => a.email.length - b.email.length,
        },
        {
            title: "Contact No",
            dataIndex: "contact",
            render: (text, record) => (
             <>
               {text}
              </>
            ),
            sorter: (a, b) => a.contact.length - b.contact.length,
          },
          {
            title: "Reg Date",
            dataIndex: "date",
            render: (text, record) => (
             <>
               {text}
              </>
            ),
            sorter: (a, b) => a.date.length - b.date.length,
          },
          {
            title: "Subscripton",
            dataIndex: "subscription",
            render: (text, record) => (
             <>
               {text}
              </>
            ),
            sorter: (a, b) => a.subscription.length - b.subscription.length,
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
                    <h3 className="page-title">Service Provider</h3>
                  </div>
                  <div className="col-auto text-right">
                    <a className="btn btn-white filter-btn" onClick={()=> this.handleShow()} href={"#"} id="filter_search">
                      <i className="fas fa-filter"></i>
                    </a>
                  </div>
                </div>
              </div>
              <Collapse in={this.state.open}>
              <div id="example-collapse-text">
                <div className="card filter-card">
                  <div className="card-body pb-0">
                    <form action="#">
                      <div className="row filter-row">
                        <div className="col-sm-6 col-md-3">
                          <div className="form-group">
                            <label>Provider</label>
                            <div className="form-group">
                              <input className="form-control" type="text" />
                            </div>
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
              <div className="card filter-card" id="filter_inputs">
					<div className="card-body pb-0">
						<form>
							<div className="row filter-row">
								<div className="col-sm-6 col-md-3">
									<div className="form-group">
										<label>Name</label>
										<input className="form-control" type="text" />
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

                <div className="row">
					<div className="col-md-12">
						<div className="card">
							<div className="card-body">
								<div className="table-responsive">
								<Table
                        className="table table-hover table-center mb-0 datatable"
                        style={{ overflowX: "auto", width:"100%"}}
                        columns={columns}
                        // bordered
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

export default ServiceProvider;
