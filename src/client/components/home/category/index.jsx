import React, { Component } from "react";
import category1 from "../../../assets/images/category/category-01.jpg";
import category2 from "../../../assets/images/category/category-02.jpg";
import category3 from "../../../assets/images/category/category-03.jpg";
import category4 from "../../../assets/images/category/category-04.jpg";
import category5 from "../../../assets/images/category/category-05.jpg";
import category6 from "../../../assets/images/category/category-06.jpg";
import {Link} from "react-router-dom";

class Categories extends Component {
  render() {
    return (
		<section className="category-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="row">
							<div className="col-md-6">
								<div className="heading">
									<h2>Featured Categories</h2>
									<span>What do you need to find?</span>
								</div>
							</div>
							<div className="col-md-6">
								<div className="viewall">
									<h4><Link to="/categories">View All <i className="fas fa-angle-right"></i></Link></h4>
									<span>Featured Categories</span>
								</div>
							</div>
							<div className="catsec">
							<div className="row">
								<div className="col-lg-4 col-md-6">
									<Link to="/pages/search">
										<div className="cate-widget">
											<img src={category1} alt="" />
											<div className="cate-title">
												<h3><span><i className="fas fa-circle"></i> Computer</span></h3>
											</div>
											<div className="cate-count">
												<i className="fas fa-clone"></i> 21
											</div>
										</div>
									</Link>
								</div>
								<div className="col-lg-4 col-md-6">
									<Link to="/pages/search">
										<div className="cate-widget">
											<img src={category2} alt="" />
											<div className="cate-title">
												<h3><span><i className="fas fa-circle"></i> Interior</span></h3>
											</div>
											<div className="cate-count">
												<i className="fas fa-clone"></i> 15
											</div>
										</div>
									</Link>
								</div>
								<div className="col-lg-4 col-md-6">
									<Link to="/pages/search">
										<div className="cate-widget">
											<img src={category3} alt="" />
											<div className="cate-title">
												<h3><span><i className="fas fa-circle"></i> Car Wash</span></h3>
											</div>
											<div className="cate-count">
												<i className="fas fa-clone"></i> 15
											</div>
										</div>
									</Link>
								</div>
								<div className="col-lg-4 col-md-6">
									<Link to="/pages/search">
										<div className="cate-widget">
											<img src={category4} alt="" />
											<div className="cate-title">
												<h3><span><i className="fas fa-circle"></i> Cleaning</span></h3>
											</div>
											<div className="cate-count">
												<i className="fas fa-clone"></i> 14
											</div>
										</div>
									</Link>
								</div>
								<div className="col-lg-4 col-md-6">
									<Link to="/pages/search">
										<div className="cate-widget">
											<img src={category5} alt="" />
											<div className="cate-title">
												<h3><span><i className="fas fa-circle"></i> Electrical</span></h3>
											</div>
											<div className="cate-count">
												<i className="fas fa-clone"></i> 10
											</div>
										</div>
									</Link>
								</div>
								<div className="col-lg-4 col-md-6">
									<Link to="/pages/search">
										<div className="cate-widget">
											<img src={category6} alt="" />
											<div className="cate-title">
												<h3><span><i className="fas fa-circle"></i> Construction</span></h3>
											</div>
											<div className="cate-count">
												<i className="fas fa-clone"></i> 8
											</div>
										</div>
									</Link>
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
export default Categories;