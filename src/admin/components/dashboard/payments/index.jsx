import React, { Component } from "react";

import { Table } from "antd";
import 'antd/dist/antd.css';

import img1 from "../../../assets/images/provider/provider-02.jpg";
import img2 from "../../../assets/images/provider/provider-03.jpg";
import img3 from "../../../assets/images/provider/provider-04.jpg";
import img4 from "../../../assets/images/provider/provider-05.jpg";
import img5 from "../../../assets/images/provider/provider-06.jpg";

import USER_1 from "../../../assets/images/customer/user-02.jpg";
import USER_2 from "../../../assets/images/customer/user-03.jpg";
import USER_3 from "../../../assets/images/customer/user-04.jpg";
import USER_4 from "../../../assets/images/customer/user-05.jpg";
import USER_5 from "../../../assets/images/customer/user-06.jpg";

class Paymentdashboard extends Component {

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
    
  render() {

    const { data } = this.state;
    const columns = [
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
          title: "User",
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
            title: "Provider",
            dataIndex: "provider",
            render: (text, record) => (
              <div className="text-nowrap">
                <a href="/admin/profile">
                  <img alt="" src={record.image} className="pro-avatar" />
                    {text}
                </a>
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
            title: "Price",
            dataIndex: "price",
            render: (text, record) => (
              <>
                {record.price}
              </>
            ),
          },
          {
            title: "Status",
            dataIndex: "status",
            render: (text, record) => (
              <span className="badge badge-dark">
                {text}
              </span>
            ),
          },
         
      ];
  
    return (
      <>
    
              <div className="col-md-6 d-flex">
                {/* Payments */}
<div className="card card-table flex-fill">
  <div className="card-header">
    <h4 className="card-title">Payments</h4>
  </div>
  <div className="card-body">
    <div className="table-responsive">
      <table className="table table-center">
        <thead>
          <tr>
            <th>Date</th>
            <th>User</th>
            <th>Provider</th>
            <th>Service</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>15 Sep 2020</td>
            <td>
              <span className="table-avatar">
                <a href="#" className="avatar avatar-xs mr-2">
                  <img className="avatar-img rounded-circle" alt={"user1"} src={USER_1} />
                </a>
                <a href={"#"}>Nancy Olson</a>
              </span>
            </td>
            <td>
              <span className="table-avatar">
                <a href="#" className="avatar avatar-xs mr-2">
                  <img className="avatar-img rounded-circle" alt={"user1"} src={img1} />
                </a>
                <a href={"#"}>Matthew Garcia</a>
              </span>
            </td>
            <td>Car Repair Services</td>
            <td>$50</td>
            <td>
              <span className="badge badge-dark">Pending</span>
            </td>
          </tr>
          <tr>
            <td>14 Sep 2020</td>
            <td>
              <span className="table-avatar">
                <a href="#" className="avatar avatar-xs mr-2">
                  <img className="avatar-img rounded-circle" alt={"user1"} src={USER_2} />
                </a>
                <a href={"#"}>Ramona Kingsley</a>
              </span>
            </td>
            <td>
              <span className="table-avatar">
                <a href="#" className="avatar avatar-xs mr-2">
                  <img className="avatar-img rounded-circle" alt={"user1"} src={img2} />
                </a>
                <a href={"#"}>Yolanda Potter</a>
              </span>
            </td>
            <td>Electric Panel Repairing Service</td>
            <td>$45</td>
            <td>
              <span className="badge badge-dark">Pending</span>
            </td>
          </tr>
          <tr>
            <td>13 Sep 2020</td>
            <td>
              <span className="table-avatar">
                <a href="#" className="avatar avatar-xs mr-2">
                  <img className="avatar-img rounded-circle" alt={"user1"} src={USER_3} />
                </a>
                <a href={"#"}>Ricardo Lung</a>
              </span>
            </td>
            <td>
              <span className="table-avatar">
                <a href="#" className="avatar avatar-xs mr-2">
                  <img className="avatar-img rounded-circle" alt={"user1"} src={img3} />
                </a>
                <a href={"#"}>Ricardo Flemings</a>
              </span>
            </td>
            <td>Steam Car Wash</td>
            <td>$14</td>
            <td>
              <span className="badge badge-dark">Pending</span>
            </td>
          </tr>
          <tr>
            <td>12 Sep 2020</td>
            <td>
              <span className="table-avatar">
                <a href="#" className="avatar avatar-xs mr-2">
                  <img className="avatar-img rounded-circle" alt={"user4"} src={USER_4} />
                </a>
                <a href={"#"}>Annette Silva</a>
              </span>
            </td>
            <td>
              <span className="table-avatar">
                <a href="#" className="avatar avatar-xs mr-2">
                  <img className="avatar-img rounded-circle" alt={"user4"} src={img4} />
                </a>
                <a href={"#"}>Maritza Wasson</a>
              </span>
            </td>
            <td>House Cleaning Services</td>
            <td>$100</td>
            <td>
              <span className="badge badge-dark">Pending</span>
            </td>
          </tr>
          <tr>
            <td>11 Sep 2020</td>
            <td>
              <span className="table-avatar">
                <a href="#" className="avatar avatar-xs mr-2">
                  <img className="avatar-img rounded-circle" alt={"user5"} src={USER_5} />
                </a>
                <a href={"#"}>Stephen Wilson</a>
              </span>
            </td>
            <td>
              <span className="table-avatar">
                <a href="#" className="avatar avatar-xs mr-2">
                  <img className="avatar-img rounded-circle" alt={"img5"} src={img5} />
                </a>
                <a href={"#"}>Marya Ruiz</a>
              </span>
            </td>
            <td>Computer &amp; Server AMC Service</td>
            <td>$80</td>
            <td>
              <span className="badge badge-info">Inprogress</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
{/* Payments */}
              </div>
           
      </>
    );
  }
}

export default Paymentdashboard;
