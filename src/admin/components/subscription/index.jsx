import React, { Component } from "react";
import SidebarNav from "../sidebar";
import {Link} from "react-router-dom";

class Subscriptions extends Component {
  render() {
    return (
      <>
        <SidebarNav />
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col">
                  <h3 className="page-title">Subscriptions</h3>
                </div>
                <div className="col-auto text-right">
                  <Link
                    to="/admin/add-subscriptions"
                    className="btn btn-primary add-button"
                  >
                    <i className="fas fa-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="row pricing-box">
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <div className="pricing-header">
                      <h2>Basic</h2>
                      <p>Monthly Price</p>
                    </div>
                    <div className="pricing-card-price">
                      <h3 className="heading2 price">$0.00</h3>
                      <p>
                        Duration: <span>3 Months</span>
                      </p>
                    </div>
                    <ul className="pricing-options">
                      <li>
                        <i className="far fa-check-circle"></i> One listing
                        submission
                      </li>
                      <li>
                        <i className="far fa-check-circle"></i> 3 Months
                        expiration
                      </li>
                    </ul>
                    <Link
                      to="/admin/edit-subscriptions"
                      className="btn btn-primary btn-block"
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <div className="pricing-header">
                      <h2>Standard</h2>
                      <p>Monthly Price</p>
                    </div>
                    <div className="pricing-card-price">
                      <h3 className="heading2 price">$50.00</h3>
                      <p>
                        Duration: <span>6 Months</span>
                      </p>
                    </div>
                    <ul className="pricing-options">
                      <li>
                        <i className="far fa-check-circle"></i> One listing
                        submission
                      </li>
                      <li>
                        <i className="far fa-check-circle"></i> 6 Months
                        expiration
                      </li>
                    </ul>
                    <Link
                      to="/admin/edit-subscriptions"
                      className="btn btn-primary btn-block"
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <div className="pricing-header">
                      <h2>Enterprice</h2>
                      <p>Monthly Price</p>
                    </div>
                    <div className="pricing-card-price">
                      <h3 className="heading2 price">$1200.00</h3>
                      <p>
                        Duration: <span>One Year</span>
                      </p>
                    </div>
                    <ul className="pricing-options">
                      <li>
                        <i className="far fa-check-circle"></i> One listing
                        submission
                      </li>
                      <li>
                        <i className="far fa-check-circle"></i> One Year
                        expiration
                      </li>
                    </ul>
                    <Link
                      to="/admin/edit-subscriptions"
                      className="btn btn-primary btn-block"
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <div className="pricing-header">
                      <h2>Gold</h2>
                      <p>Monthly Price</p>
                    </div>
                    <div className="pricing-card-price">
                      <h3 className="heading2 price">$2000.00</h3>
                      <p>
                        Duration: <span>2 Years</span>
                      </p>
                    </div>
                    <ul className="pricing-options">
                      <li>
                        <i className="far fa-check-circle"></i> One listing
                        submission
                      </li>
                      <li>
                        <i className="far fa-check-circle"></i> Two Year
                        expiration
                      </li>
                    </ul>
                    <Link
                      to="/admin/edit-subscriptions"
                      className="btn btn-primary btn-block"
                    >
                      Edit
                    </Link>
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

export default Subscriptions;
