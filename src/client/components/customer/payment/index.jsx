import React, { Component } from "react";
import Sidebar from "../sidebar";
import { Link } from "react-router-dom";

import IMG01 from "../../../assets/images/services/service-08.jpg";
import IMG02 from "../../../assets/images/services/service-09.jpg";
import IMG03 from "../../../assets/images/services/service-10.jpg";
import IMG04 from "../../../assets/images/services/service-11.jpg";
import IMG05 from "../../../assets/images/services/service-12.jpg";

import IMG06 from "../../../assets/images/customer/user-01.jpg";
import IMG07 from "../../../assets/images/customer/user-02.jpg";
import IMG08 from "../../../assets/images/customer/user-03.jpg";
import IMG09 from "../../../assets/images/customer/user-04.jpg";
import IMG10 from "../../../assets/images/customer/user-05.jpg";

import { Table } from "antd";

class CustomerPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      data: [
        {
          id: "#PT001",
          service: "Electric Panel Repairing Service",
           image: IMG01,
           customerimage: IMG06,
           customer: "Thomas Herzberg",
          date: "9 Sep 2019",
          amount: "$25",
          status: "User Rejected",
        },
        {
          id: "#PT002",
          service: "Steam Car Wash",
           image: IMG02,
           customerimage: IMG07,
           customer: "Matthew Garcia",
          date: "9 Sep 2019",
          amount: "$25",
          status: "Payment Completed",
        }, 
        {
          id: "#PT003",
          service: "Electric Panel Repairing Service",
           image: IMG03,
           customerimage: IMG08,
           customer: "Matthew Garcia",
          date: "9 Sep 2019",
          amount: "$45",
          status: "User Rejected",
        },
     
        {
          id: "#PT004",
          service: "Computer & Server AMC Service",
           image: IMG04,
           customerimage: IMG09,
           customer: "Ricardo Flemings",
          date: "9 Sep 2019",
          amount: "$45",
          status: "User Rejected",
        },
        {
          id: "#PT005",
          service: "Building Construction Services",
           image: IMG05,
           customerimage: IMG10,
           customer: "Annette Silva",
          date: "9 Sep 2019",
          amount: "$45",
          status: "Marya Ruiz",
        },
     
     
      ],
    };
  }

  render() {
    const { data } = this.state;

    const columns = [
      {
        title: "Service",
        dataIndex: "patientName",
        render: (text, record) => (
          <>
            <a href="#">
              <img  src={record.image} className="pro-avatar" />
                {record.service}
            </a>
          </>
        ),
      },
      {
        title: "Customer",
        dataIndex: "patientName",
        render: (text, record) => (
          <>
              <img src={record.customerimage} className="avatar-xs rounded-circle" />
              {record.customer}
          </>
        ),
      },
      {
        title: "Date",
        dataIndex: "status",
        render: (text, record) => (
          <>
            {record.date}
          </>
        ),
      },
      {
        title: "Amount",
        render: (text, record) => (
         <strong>
              {record.amount}
         </strong>
        ),
      },
      {
        title: "status",
        render: (text, record) => (
         
           <span className={`${record.status === "Payment Completed" ? "badge bg-success-light" : "badge bg-danger-light"}`}>
              {record.status}
         </span>
        ),
      },
    ];

    return (
      <>
        <div className="content">
          <div className="container">
            <div className="row">
              <Sidebar />

              <div className="col-xl-9 col-md-8">
              <h4 className="widget-title">Payment History</h4>
              
              <div className="card transaction-table mb-0">
						
                    <div className="card">
                      <div className="card-body">
                        <div className="table-responsive">
                          <div className="row">
                            <div className="col-sm-12">
                              <Table
                             
                                className="table table-center mb-0"
                               
                                columns={columns}
                                // bordered
                                dataSource={data}
                                rowKey={(record) => record.id}
                                showSizeChanger={true}
                                pagination={false}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                
                   </div>             
              </div>
            </div>

            {/* Delete Modal */}
          </div>
        </div>
      </>
    );
  }
}
export default CustomerPayment;
