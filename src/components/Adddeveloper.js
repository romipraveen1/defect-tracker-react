import React, {Component} from 'react';
import Show from './Show';
import Adddeveloperform from './action/Adddeveloperform';

export default class Adddevelopers extends Component {
    render(){
        return (
     
         <div className="all-content-wrapper">
         <div className="breadcome-area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="breadcome-list single-page-breadcome">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="breadcome-heading">
                        <form role="search" className="sr-input-func">
                          <input type="text" placeholder="Search..." className="search-int form-control" />
                          <a href="#"><i className="fa fa-search" /></a>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <ul className="breadcome-menu">
                        <li><a href="dashboard.html">Home</a> <span className="bread-slash">/</span>
                        </li>
                        <li><span className="bread-blod">Add Developer</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Single pro tab review Start*/}
        {/* <Show/> */}
        {/* <div className="single-pro-review-area mt-t-30 mg-b-15">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="product-payment-inner-st">
                  <ul id="myTabedu1" className="tab-review-design">
                    <li className="active"><a href="#description">ADD Developer</a></li>
                  </ul>
                  <div id="myTabContent" className="tab-content custom-product-edit">
                    <div className="product-tab-list tab-pane fade active in" id="description">
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="review-content-section">
                            <div className="row">
                              <label htmlFor="developerName"><b />Developer Name :</label>
                              <input type="text" className="form-control" id="developerName" />
                              <br />
                              <label htmlFor="moduleId">Module Id</label>
                              <select id="moduleId" className="form-control">
                              </select>
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="payment-adress">
                                    <br />
                                    <button onclick="addDevelopers()" className="btn btn-primary waves-effect waves-light">Add Developer</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <Adddeveloperform/>
     
          </div>
      

            );
        }
    }