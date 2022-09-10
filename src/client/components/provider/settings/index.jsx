import React, { Component } from "react";
import Sidebar from "../sidebar";
import Provider1 from "../../../assets/images/provider/provider-01.jpg";

class Settings extends Component {

  handleChange(e, field) {

  }

  render() {
    return (
      <>
        <div className="content">
          <div className="container">
            <div className="row">
              <Sidebar />

              <div className="col-xl-9 col-md-8">
                <form>
                  <div className="widget">
                    <h4 className="widget-title">Profile Settings</h4>
                    <div className="row">
                      <div className="col-xl-12">
                        <h5 className="form-title">Basic Information</h5>
                      </div>
                      <div className="form-group col-xl-12">
                        <div className="media align-items-center mb-3">
                          <img
                            className="user-image"
                            src={Provider1}
                            alt=""
                          />
                          <div className="media-body">
                            <h5 className="mb-0">Thomas Herzberg</h5>
                            <p>Max file size is 20mb</p>
                            <div className="jstinput">
                              <a
                                href={"#"}
                                className="browsephoto"
                              >
                                Browse
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-xl-6">
                      <label className="mr-sm-2">Name</label>
                      <input
                        className="form-control"
                        type="text"
                        value="Thomas Herzberg"
                        readOnly
                      />
                    </div>
                    <div className="form-group col-xl-6">
                      <label className="mr-sm-2">Email</label>
                      <input
                        className="form-control"
                        type="email"
                        value="truelysell@example.com"
                        readOnly
                      />
                    </div>
                    <div className="form-group col-xl-6">
                      <label className="mr-sm-2">Country Code</label>
                      <input
                        className="form-control"
                        type="text"
                        value="+1"
                        readOnly
                      />
                    </div>
                    <div className="form-group col-xl-6">
                      <label className="mr-sm-2">Mobile Number</label>
                      <input
                        className="form-control no_only"
                        type="text"
                        value="412-355-7471"
                        readOnly
                        required
                      />
                    </div>
                    <div className="form-group col-xl-6">
                      <label className="mr-sm-2">Date of birth</label>
                      <input
                        type="text"
                        className="form-control provider_datepicker"
                        autoComplete="off"
                        value="17-01-1996"
                        onChange={this.handleChange.bind(this, 'dob')}
                      />
                    </div>
                    <div className="col-xl-12">
                      <h5 className="form-title">Service Info</h5>
                    </div>
                    <div className="form-group col-xl-6">
                      <label className="mr-sm-2">
                        What Service do you Provide?
                      </label>
                      <select
                        className="form-control select provider_category"
                        title="Category"
                      >
                        <option>Automobile</option>
                        <option>Construction</option>
                        <option>Interior</option>
                        <option>Cleaning</option>
                        <option>Electrical</option>
                        <option>Carpentry</option>
                        <option>Computer</option>
                      </select>
                    </div>
                    <div className="form-group col-xl-6">
                      <label className="mr-sm-2">Sub Category</label>
                      <select
                        className="form-control select provider_subcategory"
                        title="Sub Category"
                      >
                        <option>House Cleaning</option>
                        <option>Full Car Wash</option>
                        <option>Roofing</option>
                        <option>Indoor Glass</option>
                        <option>Convertible Fridge</option>
                        <option>Fridge</option>
                        <option>Car Wash</option>
                        <option>Others</option>
                      </select>
                    </div>
                    <div className="col-xl-12">
                      <h5 className="form-title">Address</h5>
                    </div>
                    <div className="form-group col-xl-12">
                      <label className="mr-sm-2">Address</label>
                      <input type="text" className="form-control" onChange={this.handleChange.bind(this, 'address')} />
                    </div>
                    <div className="form-group col-xl-6">
                      <label className="mr-sm-2">Country</label>
                      <select className="form-control">
                        <option>Select Country</option>
                        <option>Australia (+61)</option>
                        <option>France (+33)</option>
                        <option>Germany (+49)</option>
                        <option>Iceland (+354)</option>
                        <option>India (+91)</option>
                        <option>Romania (+40)</option>
                        <option>Russia (+7)</option>
                        <option>Spain (+34)</option>
                        <option>UK (+44)</option>
                        <option>USA (+1)</option>
                      </select>
                    </div>
                    <div className="form-group col-xl-6">
                      <label className="mr-sm-2">State</label>
                      <select className="form-control"></select>
                    </div>
                    <div className="form-group col-xl-6">
                      <label className="mr-sm-2">City</label>
                      <select className="form-control"></select>
                    </div>
                    <div className="form-group col-xl-6">
                      <label className="mr-sm-2">Postal Code</label>
                      <input
                        type="text"
                        className="form-control"
                        value="654587"
                        onChange={this.handleChange.bind(this, 'postal_code')}
                      />
                    </div>
                    <div className="form-group col-xl-12">
                      <button
                        className="btn btn-primary pl-5 pr-5"
                        type="submit"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Settings;
