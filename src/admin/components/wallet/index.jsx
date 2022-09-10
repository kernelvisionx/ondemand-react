import React, { Component } from "react";
import SidebarNav from "../sidebar";
import { Table } from "antd";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import IMG01 from "../../assets/images/customer/user-01.jpg";
import IMG02 from "../../assets/images/customer/user-02.jpg";
import IMG03 from "../../assets/images/customer/user-03.jpg";
import IMG04 from "../../assets/images/customer/user-04.jpg";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {
  itemRender,
  onShowSizeChange,
} from "../../components/paginationfunction";
import WalletHistory from "./history";

class Wallet extends Component {
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
             mobile: "832-212-0082",
             wallamt: "$42",
             role: "provider"
            },
            {
                id: 2,
                date: "11 Sep 2020",
                image: IMG02,
                name: "Jeffrey Akridge",
                mobile: "832-212-0082",
                wallamt: "$80",
                role: "user"
               },
               {
                id: 3,
                date: "11 Sep 2020",
                image: IMG03,
                name: "Nancy Olson",
                mobile: "832-212-0082",
                wallamt: "$56",
                role: "provider"
               },
               {
                id:4,
                date: "11 Sep 2020",
                image: IMG04,
                name: "Yolanda Potter",
                mobile: "832-212-0082",
                wallamt: "$42",
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
          title: "Mobile",
          dataIndex: "mobile",
          render: (text, record) => (
           <>
             {text}
            </>
          ),
          sorter: (a, b) => a.mobile.length - b.mobile.length,
        },
        {
            title: "wallamt",
            dataIndex: "wallamt",
            render: (text, record) => (
             <>
               {text}
              </>
            ),
            sorter: (a, b) => a.wallamt.length - b.Wallamt.length,
          },
          {
            title: "role",
            dataIndex: "role",
            render: (text, record) => (
             <label className={record.role === "provider" ? "badge badge-success" : "badge badge-primary"}>
               {text}
              </label>
            ),
            sorter: (a, b) => a.role.length - b.role.length,
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
                    <h3 className="page-title">Wallet</h3>
                  </div>
                  <div className="col-auto text-right">
                         <a
                          className="btn btn-white filter-btn"
                          onClick={() => this.handleShow()}
                          aria-controls="example-collapse-text"
                          aria-expanded={this.state.open}
                        >
                      <i className="fas fa-filter"></i>
                      </a>
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
               </div>   
          </Collapse>   

          <Tabs defaultActiveKey="wallet">
  <Tab eventKey="wallet" title="Wallet">
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
  </Tab>
  <Tab eventKey="history" title="Wallet History">
        <WalletHistory />
  </Tab>

</Tabs>


                                    

          </div>
       </div>
      </>
    );
  }
}

export default Wallet;
