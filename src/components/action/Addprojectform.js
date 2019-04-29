import React, {Component} from 'react';

export default class Content extends Component {





    render(){

      const {item,handleChange,handleSubmit}= this.props

        return (
            
          

            <div className="single-pro-review-area mt-t-30 mg-b-15">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="product-payment-inner-st">
                <ul id="myTabedu1" className="tab-review-design">
                  <li className="active"><a href="#description">ADD Project</a></li>
                </ul>
                <div id="myTabContent" className="tab-content custom-product-edit">
                  <div className="product-tab-list tab-pane fade active in" id="description">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="review-content-section">
                          <div className="row">



                          <form onSubmit={handleSubmit}>
                            <div className="form-group">
                              <label><b>Project Name :</b></label>
                              <input type="text" className="form-control"  placeholder="Enter Project Name"  value={item} onChange={handleChange} id="projectName" />
                            </div>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="payment-adress">
                                  <button type="submit" id="blog_post_submit" className="btn btn-primary waves-effect waves-light">Add Project</button>
                                </div>
                              </div>
                            </div>
                            </form>



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

                
        );
    }
    }