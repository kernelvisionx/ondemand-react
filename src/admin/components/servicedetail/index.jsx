import React, { Component } from "react";
import SidebarNav from "../sidebar";
import { Table, Switch } from "antd";
import Collapse from 'react-bootstrap/Collapse';
import { Link } from 'react-router-dom';
import IMG01 from "../../assets/images/services/service-01.jpg";
import IMG02 from "../../assets/images/services/service-02.jpg";
import IMG03 from "../../assets/images/services/service-03.jpg";
import IMG04 from "../../assets/images/services/service-04.jpg";
import IMG05 from "../../assets/images/services/service-05.jpg";

import { itemRender,  onShowSizeChange} from "../../components/paginationfunction";

class Services extends Component {
    
    handleShow = () => {
      this.setState({
        open: !this.state.open
      })
    }
    
    constructor(props) {
        super(props);
        this.state = {
          open: false,
          show: null,
          data: [
           {
             id: 1,
             image: IMG01,
             services: "Toughened Glass Fitting Services",
             location: "Wayne, New Jersey",
             category: "Cleaning",
             amount: "$56",
             date:"13 Sep 2020",
           },
           {
            id: 2,
            image: IMG02,
            services: "Car Repair Services",
            location: "Wayne, New Jersey",
            category: "Cleaning",
            amount: "$56",
            date:"11 Sep 2020",
          },
          {
            id: 3,
            image: IMG03,
            services: "Electric Panel Repairing Service",
            location: "Kalispell, Montana",
            category: "Electrical",
            amount: "$56",
            date:"11 Sep 2020",
          },
          {
            id: 4,
            image: IMG04,
            services: "Steam Car Wash",
            location: "Electra, Texas",
            category: "Car Wash",
            amount: "$14",
            date:"17 Sep 2020",
          },
          {
            id: 5,
            image: IMG05,
            services: "House Cleaning Service",
            location: "Sylvester, Georgia",
            category: "Cleaning",
            amount: "$56",
            date:"11 Sep 2020",
          },
         
          ],
        };
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
          title: "Services",
          dataIndex: "services",
          render: (text, record) => (
           <>
                <img alt="" src={record.image} className="rounded service-img mr-1"/>{text}
            </>
          ),
          sorter: (a, b) => a.services.length - b.services.length,
        },
        {
            title: "Location",
            dataIndex: "location",
            render: (text, record) => (
             <>
               {text}
              </>
            ),
            sorter: (a, b) => a.location.length - b.location.length,
          },
        {
          title: "Category",
          dataIndex: "category",
          render: (text, record) => (
           <>
             {text}
            </>
          ),
          sorter: (a, b) => a.category.length - b.category.length,
        },
        {
            title: "Amount",
            dataIndex: "amount",
            render: (text, record) => (
             <>
               {text}
              </>
            ),
            sorter: (a, b) => a.amount.length - b.amount.length,
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
                        <Link to="/admin/services-view" className="btn btn-sm bg-success-light"><i className="fe fe-eye"></i> View</Link>
                    </div>
                ),
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (e) => (
              <Switch onChange={this.onChangeHandle} defaultChecked={e}/>
            ),
            sorter: (a, b) => a.status.length - b.status.length,
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
							<h3 className="page-title">Services</h3>
						</div>
						<div className="col-auto text-right">
							<a className="btn btn-white filter-btn" onClick={() => this.handleShow()}  href={"#"} id="filter_search">
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
											<label>Services</label>
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

export default Services;
