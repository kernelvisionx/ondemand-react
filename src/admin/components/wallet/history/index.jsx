import React, { Component } from "react";

import { Table } from "antd";

import IMG01 from "../../../assets/images/customer/user-01.jpg";
import IMG02 from "../../../assets/images/customer/user-02.jpg";
import IMG03 from "../../../assets/images/customer/user-03.jpg";


import {
  itemRender,
  onShowSizeChange,
} from "../../../components/paginationfunction";


class WalletHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
          show: null,
          open: false,
          data: [
           {
             id: 1,
             date: "13 Sep 2020",
             image: IMG01,
             name: "Jeffrey Akridge",
            currentamt: "$1061",
            creditamt: "-",
            debitamt: "$14",
            feeamt: "-",
            availableamt: "$106",
            reason: "Booked a service",
            paytype: "Debit",
            role: "user"
            },
          
            {
                id: 2,
                date: "13 Sep 2020",
                image: IMG02,
                name: "Ramona Kingsley",
               currentamt: "$1061",
               creditamt: "-",
               debitamt: "$14",
               feeamt: "-",
               availableamt: "$106",
               reason: "Booked a service",
               paytype: "Debit",
               role: "user"
               },
               {
                id: 3,
                date: "13 Sep 2020",
                image: IMG03,
                name: "Matthew Garcia",
               currentamt: "$1061",
               creditamt: "-",
               debitamt: "$14",
               feeamt: "-",
               availableamt: "$106",
               reason: "Booked a service",
               paytype: "Debit",
               role: "user"
               },
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
            title: "Date",
            dataIndex: "date",
            render: (text, record) => (
             <>{text}</>
            ),
            sorter: (a, b) => a.date.length - b.date.length,
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
          title: "Current Amt",
          dataIndex: "currentamt",
          render: (text, record) => (
           <>
             {text}
            </>
          ),
          sorter: (a, b) => a.currentamt.length - b.currentamt.length,
        },
        {
            title: "Credit Amt",
            dataIndex: "creditamt",
            render: (text, record) => (
             <>
               {text}
              </>
            ),
            sorter: (a, b) => a.creditamt.length - b.creditamt.length,
          },
          {
            title: "Debit Amt",
            dataIndex: "debitamt",
            render: (text, record) => (
             <>
               {text}
              </>
            ),
            sorter: (a, b) => a.debitamt.length - b.debitamt.length,
          },

          {
            title: "Fee Amt",
            dataIndex: "feeamt",
            render: (text, record) => (
             <>
               {text}
              </>
            ),
            sorter: (a, b) => a.feeamt.length - b.feeamt.length,
          },
          {
            title: "Available amount",
            dataIndex: "availableamt",
            render: (text, record) => (
             <>
               {text}
              </>
            ),
            sorter: (a, b) => a.availableamt.length - b.availableamt.length,
          },
          {
            title: "Reason",
            dataIndex: "reason",
            render: (text, record) => (
             <>
               {text}
              </>
            ),
            sorter: (a, b) => a.reason.length - b.reason.length,
          },
          {
            title: "Pay Type",
            dataIndex: "paytype",
            render: (text, record) => (
             <>
               <span class="btn btn-sm btn-danger">{text}</span>
              </>
            ),
            sorter: (a, b) => a.paytype.length - b.paytype.length,
          },
          {
            title: "Role",
            dataIndex: "role",
            render: (text, record) => (
             <>
               <span class="badge badge-primary">{text}</span>
              </>
            ),
            sorter: (a, b) => a.role.length - b.role.length,
          },
      ];
  
    return (
      <>




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

      </>
    );
  }
}

export default WalletHistory;
