import React, { Component } from 'react';
import SidebarNav from "../sidebar";
import { Table } from "antd";
import img1 from "../../assets/images/customer/user-05.jpg";
import img2 from "../../assets/images/customer/user-02.jpg";
import img3 from "../../assets/images/customer/user-03.jpg";
import img4 from "../../assets/images/customer/user-04.jpg";
import img5 from "../../assets/images/customer/user-09.jpg";

import Paymentdashboard from "./payments";

class Dashboard extends Component{
	constructor(props) {
        super(props);
        this.state = {
          show: null,
          data: [
            {
              id: "#PT001",
             name:"Annette Silva",
             image:img1,
             date: "9 Sep 2020",
             Service:"Car Repair Services",
              status: "pending",
              price: "$50"
            },
            {
              id: "#PT002",
             name:"Stephen Wilson",
             image:img2,
             date: "8 Sep 2020",
             Service:"Steam Car Wash",
             status: "pending",
             price: "$40"
            },
            {
              id: "#PT003",
             name:"Ryan Rodriguez",
             image:img3,
             date: "9 Sep 2020",
             Service:"Car Repair Services",
             status: "pending",
             price: "$150"
            },
            {
              id: "#PT004",
             name:"Lucile Devera",
             image:img4,
             date: "6 Sep 2020",
             Service:"Interior Designing",
             status: "pending",
             price: "$40"
            },
           
          ],
        };
      }
    
    render(){
		const { data } = this.state;
		const columns = [
			{
			  title: "Customer",
			  dataIndex: "name",
			  render: (text, record) => (
				<div className="text-nowrap">
				  <a href="/admin/profile">
					<img alt="" src={record.image} className="pro-avatar" />
					  {record.name}
				  </a>
				</div>
			  ),
			},
		   
			{
			  title: "Date",
			  dataIndex: "date",
			  render: (text, record) => (
				<div className="text-nowrap">
				  {record.date}
				</div>
			  ),
			},
			{
				title: "Service",
				dataIndex: "Service",
				render: (text, record) => (
				  <>
					{record.Service}
				  </>
				),
			  },
			  {
				title: "Status",
				dataIndex: "status",
				render: (text, record) => (
				  <span className="badge bg-danger inv-badge">
					{text}
				  </span>
				),
			  },
			  {
				title: "Price",
				dataIndex: "price",
				render: (text, record) => (
				  <>
					{record.price}
				  </>
				),
			  },
		  ];
        return(
			<>
			<SidebarNav />
			<div className="page-wrapper">
			  <div className="content container-fluid">
				<div className="page-header">
				  <div className="row">
					<div className="col-12">
					  <h3 className="page-title">Welcome Admin!</h3>
					</div>
				  </div>
				</div>
	
				<div className="row">
				  <div className="col-xl-3 col-sm-6 col-12">
					<div className="card">
					  <div className="card-body">
						<div className="dash-widget-header">
						  <span className="dash-widget-icon bg-primary">
							<i className="far fa-user"></i>
						  </span>
						  <div className="dash-widget-info">
							<h3>429</h3>
							<h6 className="text-muted">Users</h6>
						  </div>
						</div>
					  </div>
					</div>
				  </div>
				  <div className="col-xl-3 col-sm-6 col-12">
					<div className="card">
					  <div className="card-body">
						<div className="dash-widget-header">
						  <span className="dash-widget-icon bg-primary">
							<i className="fas fa-user-shield"></i>
						  </span>
						  <div className="dash-widget-info">
							<h3>148</h3>
							<h6 className="text-muted">Providers</h6>
						  </div>
						</div>
					  </div>
					</div>
				  </div>
				  <div className="col-xl-3 col-sm-6 col-12">
					<div className="card">
					  <div className="card-body">
						<div className="dash-widget-header">
						  <span className="dash-widget-icon bg-primary">
							<i className="fas fa-qrcode"></i>
						  </span>
						  <div className="dash-widget-info">
							<h3>124</h3>
							<h6 className="text-muted">Services</h6>
						  </div>
						</div>
					  </div>
					</div>
				  </div>
				  <div className="col-xl-3 col-sm-6 col-12">
					<div className="card">
					  <div className="card-body">
						<div className="dash-widget-header">
						  <span className="dash-widget-icon bg-primary">
							<i className="far fa-credit-card"></i>
						  </span>
						  <div className="dash-widget-info">
							<h3>$11378</h3>
							<h6 className="text-muted">Subscription</h6>
						  </div>
						</div>
					  </div>
					</div>
				  </div>
				</div>
	
				<div className="row">
				  <div className="col-md-6 d-flex">
					{/* Recent Bookings */}
<div className="card card-table flex-fill">
  <div className="card-header">
    <h4 className="card-title">Recent Bookings</h4>
  </div>
  <div className="card-body">
    <div className="table-responsive">
      <table className="table table-center">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Date</th>
            <th>Service</th>
            <th>Status</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-nowrap">
              <img className="avatar-xs rounded-circle" src={img1} alt="User Image" /> Annette Silva
            </td>
            <td className="text-nowrap">9 Sep 2020</td>
            <td>Car Repair Services</td>
            <td>
              <span className="badge bg-danger inv-badge">Pending</span>
            </td>
            <td>
              <div className="font-weight-600">$50</div>
            </td>
          </tr>
          <tr>
            <td className="text-nowrap">
              <img className="avatar-xs rounded-circle" src={img2} alt="User Image" /> Stephen Wilson</td>
            <td className="text-nowrap">8 Sep 2020</td>
            <td>Steam Car Wash</td>
            <td>
              <span className="badge bg-danger inv-badge">Pending</span>
            </td>
            <td>
              <div className="font-weight-600">$14</div>
            </td>
          </tr>
          <tr>
            <td className="text-nowrap">
              <img className="avatar-xs rounded-circle" src={img3} alt="User Image" /> Ryan Rodriguez</td>
            <td className="text-nowrap">7 Sep 2020</td>
            <td>House Cleaning Services</td>
            <td>
              <span className="badge bg-danger inv-badge">Pending</span>
            </td>
            <td>
              <div className="font-weight-600">$100</div>
            </td>
          </tr>
          <tr>
            <td className="text-nowrap">
              <img className="avatar-xs rounded-circle" src={img4} alt="User Image" /> Lucile Devera
            </td>
            <td className="text-nowrap">6 Sep 2020</td>
            <td>Interior Designing</td>
            <td>
              <span className="badge bg-danger inv-badge">Pending</span>
            </td>
            <td>
              <div className="font-weight-600">$5</div>
            </td>
          </tr>
          <tr>
            <td className="text-nowrap">
              <img className="avatar-xs rounded-circle" src={img5} alt="User Image" /> Roland Storey</td>
            <td className="text-nowrap">5 Sep 2020</td>
            <td>Plumbing Services</td>
            <td>
              <span className="badge bg-danger inv-badge">Pending</span>
            </td>
            <td>
              <div className="font-weight-600">$150</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
				  </div>
	
				  <Paymentdashboard />
	
	
				</div>
			  </div>
			</div>
		  </>   
        )
     }
  }
  
 export default Dashboard; 