import React, { Component } from "react";
import icon01 from "../../../assets/images/icon-1.png";
import icon02 from "../../../assets/images/icon-2.png";
import icon03 from "../../../assets/images/icon-3.png";

class Workflow extends Component {
  render() {
    return (
		<section className="how-work">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="heading howitworks">
							<h2>How It Works</h2>
							<span>Aliquam lorem ante, dapibus in, viverra quis</span>
						</div>
						<div className="howworksec">
							<div className="row">
								<div className="col-lg-4">
									<div className="howwork">
										<div className="iconround">
											<div className="steps">01</div>
											<img src={icon01} alt="" />
										</div>
										<h3>Choose What To Do</h3>
										<p>Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet.</p>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="howwork">
										<div className="iconround">
											<div className="steps">02</div>
											<img src={icon02} alt="" />
										</div>
										<h3>Find What You Want</h3>
										<p>Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet.</p>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="howwork">
										<div className="iconround">
											<div className="steps">03</div>
											<img src={icon03} alt="" />
										</div>
										<h3>Amazing Places</h3>
										<p>Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    );
  }
}
export default Workflow;