import React, { Component } from "react";

import user01 from "../../../assets/images/customer/user-01.jpg";
import user02 from "../../../assets/images/customer/user-02.jpg";
import user03 from "../../../assets/images/customer/user-03.jpg";
import user04 from "../../../assets/images/customer/user-04.jpg";
import user05 from "../../../assets/images/customer/user-05.jpg";
import user06 from "../../../assets/images/customer/user-06.jpg";


class Notification extends Component {
  render() {
    return (
	      <>
          <div className="content">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<div>
							<h4 className="widget-title">Notifications</h4>
							<div className="notcenter">
								<div className="notificationlist">
									<div className="inner-content-blk position-relative">
										<div className="d-flex text-dark">
											<img className="rounded" src={user01} width="50" alt="" />
											<div className="noti-contents">
												<h3><strong>Jeffrey Akridge has booked your service</strong></h3>
												<span>Today 01:35 PM</span>
											</div>
										</div>
									</div>
								</div>
								<div className="notificationlist">
									<div className="inner-content-blk position-relative">
										<div className="d-flex text-dark">
											<img className="rounded" src={user02} width="50" alt="" />
											<div className="noti-contents">
												<h3><strong>Nancy Olson booked your service</strong></h3>
												<span>Yesterday 01:31 PM</span>
											</div>
										</div>
									</div>
								</div>
								<div className="notificationlist">
									<div className="inner-content-blk position-relative">
										<div className="d-flex text-dark">
											<img className="rounded" src={user03} width="50" alt="" />
											<div className="noti-contents">
												<h3><strong>Ramona Kingsley booked your service</strong></h3>
												<span>18 Sep 2020 01:29 PM</span>
											</div>
										</div>
									</div>
								</div>
								<div className="notificationlist">
									<div className="inner-content-blk position-relative">
										<div className="d-flex text-dark">
											<img className="rounded" src={user04} width="50" alt="" />
											<div className="noti-contents">
												<h3><strong>Ricardo Lung have rejected the service</strong></h3>
												<span>17 Sep 2020 01:21 PM</span>
											</div>
										</div>
									</div>
								</div>
								<div className="notificationlist">
									<div className="inner-content-blk position-relative">
										<div className="d-flex text-dark">
											<img className="rounded" src={user05}width="50" alt="" />
											<div className="noti-contents">
												<h3><strong>Annette Silva has booked your service</strong></h3>
												<span>16 Sep 2020 01:15 PM</span>
											</div>
										</div>
									</div>
								</div>
								<div className="notificationlist">
									<div className="inner-content-blk position-relative">
										<div className="d-flex text-dark">
											<img className="rounded" src={user06} width="50" alt="" />
											<div className="noti-contents">
												<h3><strong>Stephen Wilson has booked your service</strong></h3>
												<span>15 Sep 2020 08:03 PM</span>
											</div>
										</div>
									</div>
								</div>
								<div className="notificationlist">
									<div className="inner-content-blk position-relative">
										<div className="d-flex text-dark">
											<img className="rounded" src={user01} width="50" alt="" />
											<div className="noti-contents">
												<h3><strong>Ryan Rodriguez has booked your service</strong></h3>
												<span>14 Sep 2020 09:29 PM</span>
											</div>
										</div>
									</div>
								</div>
								<div className="notificationlist">
									<div className="inner-content-blk position-relative">
										<div className="d-flex text-dark">
											<img className="rounded" src={user02} width="50" alt="" />
											<div className="noti-contents">
												<h3><strong>Lucile Devera booked your service</strong></h3>
												<span>13 Sep 2020 08:40 PM</span>
											</div>
										</div>
									</div>
								</div>
								<div className="notificationlist">
									<div className="inner-content-blk position-relative">
										<div className="d-flex text-dark">
											<img className="rounded" src={user02} width="50" alt="" />
											<div className="noti-contents">
												<h3><strong>Roland Storey has booked your service</strong></h3>
												<span>12 Sep 2020 01:59 PM</span>
											</div>
										</div>
									</div>
								</div>
								<div className="notificationlist">
									<div className="inner-content-blk position-relative">
										<div className="d-flex text-dark">
											<img className="rounded" src={user04} width="50" alt="" />
											<div className="noti-contents">
												<h3><strong>Lindsey Parmley has cancelled the service</strong></h3>
												<span>11 Sep 2020 04:38 AM</span>
											</div>
										</div>
									</div>
								</div>
								
							</div>
								
					
							<div className="pagination">
								<ul>
									<li className="active">
										<a href={"#"}>1</a>
									</li>
									<li>
										<a href={"#"}>2</a>
									</li>
									<li>
										<a href={"#"}>3</a>
									</li>
									<li>
										<a href={"#"}>4</a>
									</li>
									<li className="arrow">
										<a href={"#"}><i className="fas fa-angle-right"></i></a>
									</li>
								</ul>
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
export default Notification