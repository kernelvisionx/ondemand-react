import React, { Component } from "react";
import SidebarNav from "../../sidebar";
import { Table } from "antd";
import 'antd/dist/antd.css';
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/Fade";

import {  itemRender, onShowSizeChange } from "../../../components/paginationfunction";

import IMG01 from "../../../assets/images/customer/user-05.jpg";
import IMG02 from "../../../assets/images/customer/user-02.jpg";
import IMG03 from "../../../assets/images/customer/user-03.jpg";
import IMG04 from "../../../assets/images/customer/user-04.jpg";
import IMG05 from "../../../assets/images/customer/user-05.jpg";



class CancelledBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      show: null,
      data: [
        {
            id: 1,
            date: "11 Sep 2020",
            user: IMG01,
            name: "Jeffrey",
            provider: IMG02,
            providername: "Thomas",
            service: "Glass Fitting Services",
            amount: "$83",
            status_color: "badge badge-danger",
            status_name: "Cancelled",
            status: 1,
            updated: "Today 01:38 PM"
        },
        {
            id: 2,
            date: "05 Sep 2020",
            user: IMG03,
            name: "Nancy",
            provider: IMG04,
            providername: "Thomas ",
            service: "Glass Fitting Services",
            amount: "$93",
            status_color: "badge badge-danger",
            status_name: "Cancelled",
            status: 2,
            updated: "Yesterday 01:38 PM"
          },
          {
            id: 3,
            date: "02 Sep 2020",
            user: IMG04,
            name: "Nancy",
            provider: IMG05,
            providername: "Thomas",
            service: "Glass Fitting Services",
            amount: "$10",
            status_color: "badge badge-danger",
            status_name: "Cancelled",
            status: 3,
            updated: "Yesterday 01:31 PM"
          },
          {
            id: 4,
            date: "20 Sep 2020",
            user: IMG04,
            name: "Nancy",
            provider:IMG05,
            providername: "Thomas",
            service: "Glass Fitting Services",
            amount: "$10",
            status_color: "badge badge-danger",
            status_name: "Cancelled",
            status: 4,
            updated: "Today 01:38 PM"
          },
          {
            id: 5,
            date: "16 Sep 2020",
            user: IMG04,
            name: "Nancy",
            provider: IMG05,
            providername: "Thomas",
            service: "Glass Fitting Services",
            amount: "$10",
            status_color: "badge badge-danger",
            status_name: "Cancelled",
            status: 5,
            updated: "Yesterday 01:21 PM"
          },
      ],
    };
  }

  handleShow = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    const { data } = this.state;
    const columns = [
      {
        title: "Id",
        dataIndex: "id",
        render: (text, record) => <>{text}</>,
      },
      {
        title: "Date",
        dataIndex: "date",
        render: (text, record) => <>{text}</>,
      },
      {
        title: "Name",
        dataIndex: "user",
        render: (text, record) => (
          <div className="avatar avatar-sm mr-2">
            <img alt="" src={record.user} className="avatar-img rounded-circle"/>{record.name}
          </div>
        ),
        sorter: (a, b) => a.name.length - b.name.length,
      },
    
      {
        title: "Provider",
        dataIndex: "providername",
        render: (text, record) => (
          <div className="avatar avatar-sm mr-2">
            <img alt="" src={record.provider} className="avatar-img rounded-circle"/>{record.providername}
          </div>
        ),
        sorter: (a, b) => a.providername.length - b.providername.length,
      },

      {
        title: "Service",
        dataIndex: "date",
        render: (text, record) => <> {record.service} </>,
        sorter: (a, b) => a.date.length - b.date.length,
      },

      {
        title: "Amount",
        dataIndex: "amount",
        render: (text, record) => <> {record.amount} </>,
        sorter: (a, b) => a.amount.length - b.amount.length,
      },
      {
        title: "Status",
        dataIndex: "status",
        render: (text, record) => <> <div className={record.status_color}>{record.status_name}</div> </>,
        sorter: (a, b) => a.amount.length - b.amount.length,
      },
      {
        title: "Updated",
        dataIndex: "updated",
        render: (text, record) => <> {record.updated}</>,
        sorter: (a, b) => a.updated.length - b.updated.length,
      },
    ];

    return (
      <>
        <SidebarNav />
         <Table
            className="table mb-0"
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
      </>
    );
  }
}

export default CancelledBooking;
