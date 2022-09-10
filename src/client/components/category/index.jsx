import React, { Component } from "react";
import { Link } from "react-router-dom";

import category1 from "../../assets/images/category/category-01.jpg";
import category2 from "../../assets/images/category/category-02.jpg";
import category3 from "../../assets/images/category/category-03.jpg";
import category4 from "../../assets/images/category/category-04.jpg";
import category5 from "../../assets/images/category/category-05.jpg";
import category6 from "../../assets/images/category/category-06.jpg";
import category7 from "../../assets/images/category/category-07.jpg";
import category8 from "../../assets/images/category/category-08.jpg";
import category9 from "../../assets/images/category/category-09.jpg";

import axios from "axios";
const localhost = "http://localhost:9000";
const apiURL = "/api";
export const endpoint = `${localhost}${apiURL}`;
//export const productListURL = `${endpoint}/services/`;
const image_path = "http://localhost:9000/media/";
//export const productListURL = "https://167a-2603-8081-6b03-90d7-8880-2a9a-3d87-c57f.ngrok.io/service/All";
//export const productListURL = "http://localhost:5001/service/All"; 
export const productListURL = "https://ondemand-apps.herokuapp.com/service/All";


class Categories extends Component {

    state = {
        loading: false,
        error: null,
        data: []
    };

    componentDidMount() {
        this.setState({ loading: true });
        axios
            .get(productListURL)
            .then(res => {
                this.setState({ data: res.data, loading: false });
                console.log(data);
            })
            .catch(err => {
                this.setState({ error: err, loading: false });
            });
    };

    
  render() {
    const { data, error, loading } = this.state;
    return (
      <>
		<div className="breadcrumb-bar">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="breadcrumb-title">
							<h2>Categories</h2>
						</div>
					</div>
					<div className="col-auto float-right ml-auto breadcrumb-menu">
						<nav aria-label="breadcrumb" className="page-breadcrumb">
							<ol className="breadcrumb">
								<li className="breadcrumb-item">
									<Link to="/">Home</Link>
								</li>
								<li className="breadcrumb-item active" aria-current="page">Categories</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>
		</div>
		
		<div className="content">
        <div className="container">
          <div className="catsec clearfix">
                        <div className="row">
                            {data.map(item => {
                                return (
                                    <div className="col-lg-4 col-md-6">
                                        <Link to="/pages/search">
                                            <div className="cate-widget">
                                                <img src={category1} alt="category1" />
                                                <div className="cate-title">
                                                    <h3><span><i className="fas fa-circle" /> {item.service_name}</span></h3>
                                                </div>
                                                <div className="cate-count">
                                                    <i className="fas fa-clone" /> 21
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    )
                            })}
              <div className="col-lg-4 col-md-6">
                <Link to="/pages/search">
                  <div className="cate-widget">
                    <img src={category1} alt="category1" />
                    <div className="cate-title">
                      <h3><span><i className="fas fa-circle" /> Computer</span></h3>
                    </div>
                    <div className="cate-count">
                      <i className="fas fa-clone" /> 21
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link to="/pages/search">
                  <div className="cate-widget">
                    <img src={category2} alt="category2" />
                    <div className="cate-title">
                      <h3><span><i className="fas fa-circle" /> Interior</span></h3>
                    </div>
                    <div className="cate-count">
                      <i className="fas fa-clone" /> 15
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link to="/pages/search">
                  <div className="cate-widget">
                    <img src={category3} alt="category3" />
                    <div className="cate-title">
                      <h3><span><i className="fas fa-circle" /> Car Wash</span></h3>
                    </div>
                    <div className="cate-count">
                      <i className="fas fa-clone" /> 15
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link to="/pages/search">
                  <div className="cate-widget">
                    <img src={category4} alt="category4" />
                    <div className="cate-title">
                      <h3><span><i className="fas fa-circle" /> Cleaning</span></h3>
                    </div>
                    <div className="cate-count">
                      <i className="fas fa-clone" /> 14
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link to="/pages/search">
                  <div className="cate-widget">
                    <img src={category5} alt="category5" />
                    <div className="cate-title">
                      <h3><span><i className="fas fa-circle" /> Electrical</span></h3>
                    </div>
                    <div className="cate-count">
                      <i className="fas fa-clone" /> 10
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link to="/pages/search">
                  <div className="cate-widget">
                    <img src={category6} alt="category6" />
                    <div className="cate-title">
                      <h3><span><i className="fas fa-circle" /> Construction</span></h3>
                    </div>
                    <div className="cate-count">
                      <i className="fas fa-clone" /> 8
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link to="/pages/search">
                  <div className="cate-widget">
                    <img src={category7} alt="category7" />
                    <div className="cate-title">
                      <h3><span><i className="fas fa-circle" /> Plumbing</span></h3>
                    </div>
                    <div className="cate-count">
                      <i className="fas fa-clone" /> 18
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link to="/pages/search">
                  <div className="cate-widget">
                    <img src={category8} alt="category8" />
                    <div className="cate-title">
                      <h3><span><i className="fas fa-circle" /> Carpentry</span></h3>
                    </div>
                    <div className="cate-count">
                      <i className="fas fa-clone" /> 32
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link to="/pages/search">
                  <div className="cate-widget">
                    <img src={category9} alt="category9" />
                    <div className="cate-title">
                      <h3><span><i className="fas fa-circle" /> Appliance</span></h3>
                    </div>
                    <div className="cate-count">
                      <i className="fas fa-clone" /> 19
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="pagination">
              <ul>
                <li className="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li className="arrow"><a href="#"><i className="fas fa-angle-right" /></a></li>
              </ul>
            </div>
          </div>
        </div>﻿ 
      </div>
      </>
    );
  }
}
export default Categories;
