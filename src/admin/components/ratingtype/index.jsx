import React, { Component } from "react";
import SidebarNav from "../sidebar";
import { Table, Switch } from "antd";
import {Link} from "react-router-dom";

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

class RatingType extends Component {

    constructor(props) {
        super(props);
        this.state = {
          show: null,
          data: [
            {
                id: 1,
                rating_type:"Good"
            },
            {
                id: 2,
                rating_type:"Very Good"
            },
            {
                id: 3,
                rating_type:"Poor"
            },
            {
                id: 4,
                rating_type:"Fair"
            },
            {
                id: 5,
                rating_type:"Excellent"
            }
          ],
        };
      }
    
  render() {

    const { data } = this.state;
    const columns = [
            {
                title: "#",
                dataIndex: "id",
                render: (text, record) => (
                <>{record.id}</>
                ),
            },
            {
                title: "Rating Type",
                dataIndex: "rating_type",
                render: (text, record) => (
                    <>{record.rating_type}</>
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
            {
                title: 'Actions',
                render: (text, record) => (
                    <div className="actions">
                        <Link to="/admin/edit-ratingtype" className="btn btn-sm bg-success-light"><i className="far fa-edit mr-1"></i> Edit</Link>
                    </div>
                ),
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
							<h3 className="page-title">Rating Type</h3>
						</div>
						<div className="col-auto text-right">
                            <Link to="/admin/add-ratingtype" className="btn btn-primary add-button ml-3">
								<i className="fas fa-plus"></i>
							</Link>
						</div>
					</div>
				</div>

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

export default RatingType;
