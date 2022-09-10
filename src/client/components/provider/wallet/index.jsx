import React, { Component } from "react";
import Sidebar from "../sidebar";


import { Table } from "antd";

class Wallet extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  show: null,
		  data: [
			{
			  id: "#1",
			  date: "14 Jul 2020",
			  wallet: "$3486",
			  credit: "$399",
			  debit: "$0",
			  available:"$3885",
			  reason: "Complete the Service",
			  status: "credit" 	
			},
			{
				id: "#2",
				date: "18 Jul 2020",
				wallet: "$3486",
				credit: "$872",
				debit: "$0",
				available:"$3885",
				reason: "Complete the Service",
				status: "credit" 
			},
			{
				id: "#3",
				date: "22 Jul 2020",
				wallet: "$3486",
				credit: "$299",
				debit: "$0",
				available:"$3885",
				reason: "Complete the Service",
				status: "credit" 
			},
			{
				id: "#4",
				date: "26 Jul 2020",
				wallet: "$3486",
				credit: "$329",
				debit: "$0",
				available:"$3885",
				reason: "Complete the Service",
				status: "credit" 
			},
		  ],
		};
	  }
  render() {

	const { data } = this.state;

    const columns = [
      {
        title: "id",
        dataIndex: "id",
        render: (text, record) => (
          <>
				{text}
          </>
        ),
	  },

	  {
        title: "Date",
        dataIndex: "date",
        render: (text, record) => (
          <>
				{text}
          </>
        ),
	  },
	  {
        title: "Wallet",
        dataIndex: "wallet",
        render: (text, record) => (
          <>
				{text}
          </>
        ),
	  },
	  {
        title: "Credit",
        dataIndex: "credit",
        render: (text, record) => (
          <>
				{text}
          </>
        ),
	  },
	  {
        title: "Debit",
        dataIndex: "debit",
        render: (text, record) => (
          <>
				{text}
          </>
        ),
	  },
	  {
        title: "Available",
        dataIndex: "available",
        render: (text, record) => (
          <>
				{text}
          </>
        ),
	  },
	  {
        title: "Reason",
        dataIndex: "reason",
        render: (text, record) => (
          <>
				{text}
          </>
        ),
	  },
	  {
        title: "Status",
        dataIndex: "status",
        render: (text, record) => (
          <div className="badge bg-success-light">
				{text}
          </div>
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
											<h3>$3885</h3>
											<div className="d-flex justify-content-between my-4">
												<div>
													<p className="mb-1">Total Credit</p>
													<h4>$5314</h4>
												</div>
												<div>
													<p className="mb-1">Total Debit</p>
													<h4>$1431</h4>
												</div>
											</div>
											<div className="wallet-progress-chart">
												<div className="d-flex justify-content-between">
													<span>$1431</span>
													<span>$5,314.00</span>
												</div> 
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-6 col-lg-6 col-md-6">
								<div className="card">
									<div className="card-body">
										<h4 className="card-title">Withdraw</h4>
										<form action="#">
											<div className="form-group">
												<div className="input-group mb-3">
													<div className="input-group-prepend">
														<label className="input-group-text display-5">$</label>
													</div>
													<input type="text" maxLength="4" className="form-control" placeholder="00.00" />
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
													<a href={"#"} className="updatebtn">$100</a>
												</li>
												<li className="line-inline-item mb-0 d-inline-block mr-1">
													<a href={"#"} className="updatebtn">$150</a>
												</li>
											</ul>
										</div>
										<a href={"#"} className="btn btn-primary btn-block withdraw-btn">Withdraw</a>
									</div>
								</div>
							</div>
						</div>

						<h4 className="mb-4">Recent Transactions</h4>
						<div className="card transaction-table mb-0">
							<div className="card-body">
								<div className="table-responsive">
								<Table
                             
							 className="table table-center mb-0"
							pagination={false}
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
export default Wallet;
