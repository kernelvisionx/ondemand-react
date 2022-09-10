import React, { Component } from "react";
import SidebarNav from "../sidebar";
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import {
  itemRender,
  onShowSizeChange,
} from "../../components/paginationfunction";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import AllBooking from "./all";
import PendingBooking from "./pending";
import InprogressBooking from "./inprogress";
import CompletedBooking from "./completed";
import RejectedBooking from "./rejected";
import CancelledBooking from "./cancelled";

class Booking extends Component {

  constructor(props) {
    super(props)
    this.state = {
        open: false 
    }
  }

  handleShow = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {

    return (
      <>
        <SidebarNav />
       
        <div className="page-wrapper">
			<div className="content container-fluid">

            <div className="page-header">
              <div className="row">
                <div className="col">
                  <h3 className="page-title">Booking List</h3>
                </div>
                <div className="col-auto text-right">
                  <a className="btn btn-white filter-btn" onClick={() => this.handleShow()} href={"#"} id="filter_search">
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
                                    <Tabs defaultActiveKey="booking">
                                        <Tab eventKey="booking" title="All Booking">
                                            <AllBooking />
                                        </Tab>
                                        <Tab eventKey="pending" title="Pending">
                                            <PendingBooking />
                                        </Tab>
                                        <Tab eventKey="progress" title="In Progress">
                                            <InprogressBooking />
                                        </Tab>
                                        <Tab eventKey="completed" title="Completed">
                                            <CompletedBooking />
                                        </Tab>
                                        <Tab eventKey="rejected" title="Rejected">
                                            <RejectedBooking />
                                        </Tab>
                                        <Tab eventKey="canceled" title="Canceled">
                                            <CancelledBooking />
                                        </Tab>
                                    </Tabs>
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

export default Booking;
