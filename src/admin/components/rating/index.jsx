import React, { Component } from "react";
import SidebarNav from "../sidebar";
import Collapse from 'react-bootstrap/Collapse';
import { Table, Switch } from "antd";

import IMG01 from "../../assets/images/services/service-01.jpg";
import IMG02 from "../../assets/images/services/service-02.jpg";
import IMG03 from "../../assets/images/services/service-03.jpg";
import IMG04 from "../../assets/images/services/service-04.jpg";
import IMG05 from "../../assets/images/services/service-05.jpg";

import IMG06 from "../../assets/images/services/service-01.jpg";
import IMG07 from "../../assets/images/services/service-02.jpg";
import IMG08 from "../../assets/images/services/service-03.jpg";
import IMG09 from "../../assets/images/services/service-04.jpg";
import IMG010 from "../../assets/images/services/service-05.jpg";

import {
  itemRender,
  onShowSizeChange,
} from "../../components/paginationfunction";

class Rating extends Component {

    constructor(props) {
        super(props);
        this.state = {
          show: null,
          open: false,
          data: [
           {
             id: 1,
             date:"13 Sep 2020",
             image: IMG01,
             user: "Ricardo Lung",
             image2: IMG06,
             provider: "Ricardo Flemings",
             service: "Steam Car Wash",
             name: "Normal"
           },
           {
            id: 2,
            date:"18 Sep 2020",
            image: IMG02,
            user: "Ricardo Lung",
            image2: IMG07,
            provider: "Ricardo Flemings",
            service: "Steam Car Wash",
            name: "Normal"
          },
          {
            id: 3,
            date:"11 Sep 2020",
            image: IMG03,
            user: "Ricardo Lung",
            image2: IMG010,
            provider: "Ricardo Flemings",
            service: "Steam Car Wash",
            name: "Normal"
          },
          {
            id: 4,
            date:"12 Sep 2020",
            image: IMG04,
            user: "Ricardo Lung",
            image2: IMG09,
            provider: "Ricardo Flemings",
            service: "Steam Car Wash",
            name: "Normal"
           
          },
          {
            id: 5,
            date:"09 Sep 2020",
            image: IMG05,
            user: "Ricardo Lung",
            image2: IMG08,
            provider: "Ricardo Flemings",
            service: "Steam Car Wash",
            name: "Normal"
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
            title: "Date",
            dataIndex: "date",
            render: (text, record) => (
            <>{text}</>
            ),
          },
        {
          title: "User",
          dataIndex: "user",
          render: (text, record) => (
           <>
                <img alt="" src={record.image} className="rounded service-img mr-1"/>{text}
            </>
          ),
          sorter: (a, b) => a.user.length - b.user.length,
        },
        {
            title: "Provider",
            dataIndex: "provider",
            render: (text, record) => (
             <>
                  <img alt="" src={record.image2} className="rounded service-img mr-1"/>{text}
              </>
            ),
            sorter: (a, b) => a.provider.length - b.provider.length,
          },

          {
            title: "Service",
            dataIndex: "service",
            render: (text, record) => (
            <>{text}</>
            ),
            sorter: (a, b) => a.service.length - b.service.length,
          },
          {
            title: "Type Name",
            dataIndex: "name",
            render: (text, record) => (
            <>{text}</>
            ),
            sorter: (a, b) => a.name.length - b.name.length,
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
                      <h3 className="page-title">Rating</h3>
                    </div>
                    <div className="col-auto text-right">
                      <a className="btn btn-white filter-btn" href={"#"} onClick={() => this.handleShow()} id="filter_search">
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
                                <label>Service</label>
                                <div className="cal-icon">
                                  <input className="form-control datetimepicker" type="text" />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                              <div className="form-group">
                                <label>Type</label>
                                <select className="form-control select">
                                  <option>Select Type</option>
                                  <option>Good</option>
                                  <option>Very Good</option>
                                  <option>Poor</option>
                                  <option>Fair</option>
                                  <option>Excellent</option>
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

export default Rating;
