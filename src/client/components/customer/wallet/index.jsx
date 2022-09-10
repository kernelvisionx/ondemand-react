import React, { Component } from "react";
import Sidebar from "../sidebar";
import { Table } from "antd";


class CustomerWallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
          show: null,
          data: [
            {
              id: "1",
              date: "9 Sep 2019",
              wallet: "$972.1",
              credit: "$10",
              debit: "$100",
              Txt: "$0",
              available: "$872.1",
              reason:"Booked a services",
               status: "debit"
            },
            {
                id: "2",
                date: "9 Sep 2019",
                wallet: "$972.1",
                credit: "$10",
                debit: "$100",
                Txt: "$0",
                available: "$872.1",
                reason:"Booked a services",
                 status: "debit"
              },
              {
                id: "3",
                date: "9 Sep 2019",
                wallet: "$972.1",
                credit: "$10",
                debit: "$100",
                Txt: "$0",
                available: "$872.1",
                reason:"Booked a services",
                 status: "debit"
              },
              {
                id: "4",
                date: "9 Sep 2019",
                wallet: "$972.1",
                credit: "$10",
                debit: "$100",
                Txt: "$0",
                available: "$872.1",
                reason:"Booked a services",
                 status: "debit"
              },
              {
                id: "5",
                date: "9 Sep 2019",
                wallet: "$972.1",
                credit: "$10",
                debit: "$100",
                Txt: "$0",
                available: "$872.1",
                reason:"Booked a services",
                 status: "debit"
              },
          ],
        };
      }
    
  render() {
    const { data } = this.state;

    const columns = [
      {
        title: "Id",
        dataIndex: "patientName",
        render: (text, record) => (
          <>
           {record.id}
          </>
        ),
      },
     
      {
        title: "Date",
        dataIndex: "date",
        render: (text, record) => (
          <>
            {record.date}
          </>
        ),
      },
      {
        title: "Amount",
        render: (text, record) => (
         <>
              {record.amount}
         </>
        ),
      },
      {
        title: "Credit",
        render: (text, record) => (
         <>
              {record.credit}
         </>
        ),
      },
      {
        title: "Debit",
        render: (text, record) => (
         <>
              {record.debit}
         </>
        ),
      },
      {
        title: "Txt Amt",
        render: (text, record) => (
         <>
              {record.Txt}
         </>
        ),
      },

      {
        title: "Available",
        render: (text, record) => (
         <>
              {record.available}
         </>
        ),
      },
      {
        title: "Reason",
        render: (text, record) => (
         <>
              {record.reason}
         </>
        ),
      },
      {
        title: "status",
        render: (text, record) => (
         
           <span className={`${record.status === "debit" ? "badge bg-success-light" : "badge bg-danger-light"}`}>
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
						<div className="row">
							<div className="col-xl-6 col-lg-6 col-md-6">
								<div className="card">
									<div className="card-body">
										<h4 className="card-title">Wallet</h4>
										<div className="wallet-details">
											<span>Wallet Balance</span>
											<h3>$872.1</h3>
											<div className="d-flex justify-content-between my-4">
												<div>
													<p className="mb-1">Total Credit</p>
													<h4>$29,720.80</h4>
												</div>
												<div>
													<p className="mb-1">Total Debit</p>
													<h4>$29,258.00</h4>
												</div>
											</div>
											<div className="wallet-progress-chart">
												<div className="d-flex justify-content-between">
													<span>$29258</span>
													<span>$29,720.80</span>
												</div>
												<div className="progress mt-1">
													<div className="progress-bar bg-theme" role="progressbar" aria-valuenow="41" aria-valuemin="0" aria-valuemax="100" style={{width:"98%"}}>98.44%</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-6 col-lg-6 col-md-6">
								<div className="card">
									<div className="card-body">
										<h4 className="card-title">Add Wallet</h4>
										<form action="#">
											<div className="form-group">
												<div className="input-group mb-3">
													<div className="input-group-prepend">
														<label className="input-group-text display-5">$</label>
													</div>
													<input type="text" maxLength="4" className="form-control" name="wallet_amt" id="wallet_amt" placeholder="00.00" />
												</div>
											</div>
										</form>
										<div className="text-center mb-3">
											<h5 className="mb-3">OR</h5>
											<ul className="list-inline mb-0">
												<li className="line-inline-item mb-0 d-inline-block mr-1">
													<a href={"#"} className="updatebtn">$50</a>
												</li>
												<li className="line-inline-item mb-0 d-inline-block mr-1">
													<a href={"#"} data-amount="100" className="updatebtn">$100</a>
												</li>
												<li className="line-inline-item mb-0 d-inline-block mr-1">
													<a href={"#"} data-amount="150" className="updatebtn">$150</a>
												</li>
											</ul>
										</div>
										<a href={"#"} className="btn btn-primary btn-block withdraw-btn">Add to Wallet</a>
									</div>
								</div>
							</div>
						</div>
						<h4 className="mb-4">Wallet Transactions</h4>
						<div className="card transaction-table mb-0">
							<div className="card-body">
								<div className="table-responsive">
                <Table
                             
                             className="table table-center mb-0"
                            
                             columns={columns}
                             // bordered
                             dataSource={data}
                             rowKey={(record) => record.id}
                          
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
export default CustomerWallet;
